export interface AirstackResponse {
    data: Data
}

interface Data {
    SocialFollowings: SocialFollowings
}

interface SocialFollowings {
    Following: Following[]
}

interface Following {
    followingAddress: FollowingAddress
}

interface FollowingAddress {
    socials: Social[]
    tokenTransfers: TokenTransfer[]
}

interface Social {
    dappName: string
    profileName: string
    profileImageContentValue: ProfileImageContentValue
    updatedAt: string
}

interface ProfileImageContentValue {
    image?: Image
}

interface Image {
    medium: string
}

interface TokenTransfer {
    blockTimestamp: string
}
