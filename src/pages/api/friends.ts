import { AirstackResponse } from '@/airstack.types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const fid = req.query.fid;

  if (fid) {
    const data = await fetchAirstackData(Number(fid));
    return res.json(data);
  }

  return res.status(400).json({error: 'No FID'})
}

export async function fetchAirstackData(fid: number) {
  // Format GraphQL query
  const query = `
    {
      SocialFollowings(
        input: {filter: {identity: {_eq: "fc_fid:${fid}"}, dappName: {_eq: farcaster}}, blockchain: ALL, limit: 50}
      ) {
        Following {
          followingAddress {
            socials(input: {filter: {dappName: {_eq: farcaster}}}) {
              dappName
              profileName
              profileImageContentValue{
                image{
                  medium
                }
              }
              updatedAt
              profileDisplayName
              userId
              followings(input: {filter: {followingProfileId: {_eq: "${fid}"}}}) {
                Following {
                  followingProfileId
                }
              }
            }
            tokenTransfers(input: {blockchain: base, order: [{blockTimestamp: DESC}]}) {
              blockTimestamp
              transactionHash
            }
          }
        }
      }
    }
  `

  // Hit the Airstack GraphQL API with the above query
  const res = await fetch('https://api.airstack.xyz/gql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.AIRSTACK_API_KEY}`
    },
    body: JSON.stringify({ query })
  });

  const airstackRes = await res.json() as AirstackResponse;

  const formattedData: FormattedAirstackData[] = airstackRes.data.SocialFollowings.Following.map((user) => {
    
    let latestBaseAction: {
      blockTimestamp: string | undefined
      transactionHash: string | undefined
    } = { blockTimestamp: undefined, transactionHash: undefined }

    if (user.followingAddress.tokenTransfers.length > 0) {
      const baseTxns = user.followingAddress.tokenTransfers
      const maxTimeObj = baseTxns.reduce((maxObj, txnObj) => {
        if (txnObj.blockTimestamp == undefined || txnObj.blockTimestamp == undefined || maxObj.blockTimestamp == undefined) return maxObj
        return Date.parse(txnObj.blockTimestamp) > Date.parse(maxObj.blockTimestamp) ? txnObj : maxObj
      }, baseTxns[0])
      latestBaseAction.blockTimestamp = maxTimeObj.blockTimestamp
      latestBaseAction.transactionHash = maxTimeObj.transactionHash
    }

    const followsMe = user.followingAddress.socials[0].followings.Following ? (
      user.followingAddress.socials[0].followings.Following[0].followingProfileId === fid.toString()
    ) : (
      false
    )

    return {
      displayName: user.followingAddress.socials[0].profileDisplayName,
      username: user.followingAddress.socials[0].profileName,
      fid: user.followingAddress.socials[0].userId,
      avatar: user.followingAddress.socials[0].profileImageContentValue.image?.medium,
      latestFarcasterAction: new Date(user.followingAddress.socials[0].updatedAt),
      latestBaseAction: latestBaseAction.blockTimestamp ? new Date(latestBaseAction.blockTimestamp) : undefined,
      latestBaseActionHash: latestBaseAction.transactionHash ? latestBaseAction.transactionHash : undefined,
      followsMe: followsMe
    }
  })

  return formattedData;
}

export type FormattedAirstackData = {
  displayName: string
  username: string
  fid: string
  avatar: string | undefined
  latestFarcasterAction: Date
  latestBaseAction: Date | undefined
  latestBaseActionHash: string | undefined
  followsMe: boolean
}