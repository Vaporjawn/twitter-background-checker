import { Client } from "twitter-api-sdk";
import { request } from "twitter-api-sdk/dist/request";


const TwitterAPI = async (userName: string) => {
    //Bearer v2 auth
    const twitterClient = new Client('AAAAAAAAAAAAAAAAAAAAAGVycwEAAAAAJ0OmWLOGlGKV%2BZSZvcgFq%2FBcxzk%3DAeQqEweCQOogLr9vrtk4JCCscu6NovmaetroNfWJ9pg3mdeA5u');
    const user = await twitterClient.users.findUserByUsername(userName);

    console.log(user);
    return user;

}
    

export default TwitterAPI;
