import { TwitterApi } from 'twitter-api-v2';


const TwitterAPI = async (userName: string) => {
    //Bearer v2 auth
    const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAGVycwEAAAAAJ0OmWLOGlGKV%2BZSZvcgFq%2FBcxzk%3DAeQqEweCQOogLr9vrtk4JCCscu6NovmaetroNfWJ9pg3mdeA5u');
    const roClient = twitterClient.readOnly;
    const user = await roClient.v2.userByUsername(userName);

    console.log(user);
    return user;

}
    

export default TwitterAPI;
