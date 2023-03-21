/* Defining the shape of the data that will be returned from the API. */
export interface GitHubUser{
    id: string,
    login: string,
    avatar_url: string,
    created_at: Date,
    name: string,
    location: string,
    twitter_username: string,
    blog: string,
    public_repos: number,
    followers: number,
    following: number,
}