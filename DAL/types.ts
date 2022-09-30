export type GetPhotoResponseEntityType={
    alt_description: string|null
    blur_hash: string
    color: string
    created_at: string
    current_user_collections: any[]
    description: string|null
    height: number
    id: string
    liked_by_user: boolean
    likes: number
    links: {self: string, html: string, download: string, download_location: string}
    promoted_at: null
    sponsorship: {impression_urls: string[], tagline: string, tagline_url:string, sponsor: Record<string, any>}
    topic_submissions: any
    updated_at: string
    urls: {raw: string, full: string, regular: string, small: string, small_s3:string, thumb: string}
    user: {id: string, updated_at: string, username: string, name: string, first_name: string,instagram_username:string}
    width: number
}