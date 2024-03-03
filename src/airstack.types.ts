export interface AirstackPage {
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
    profileDisplayName: string
    profileName: string
    userId: string
    profileImageContentValue: ProfileImageContentValue
    updatedAt: string
    followings: Followings
}

interface Followings {
    Following: UserFollowing[]
}

interface UserFollowing {
    followingProfileId: string
}

interface ProfileImageContentValue {
    image?: Image
}

interface Image {
    medium: string
}

interface TokenTransfer {
    blockTimestamp: string | undefined
    transactionHash: string | undefined
}
