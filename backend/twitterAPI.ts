import { Client } from "twitter-api-sdk";
import { request } from "twitter-api-sdk/dist/request";
import fetch from 'node-fetch';



const TwitterAPI = async (userName: string) => {

    const response = await fetch('https://api.github.com/users/'+userName);
    const data = await response.json();

    //Bearer v2 auth
    // const twitterClient = new Client('AAAAAAAAAAAAAAAAAAAAAGVycwEAAAAAJ0OmWLOGlGKV%2BZSZvcgFq%2FBcxzk%3DAeQqEweCQOogLr9vrtk4JCCscu6NovmaetroNfWJ9pg3mdeA5u');
    // const user = await twitterClient.users.findUserByUsername(userName);

    console.log(data);
    return data;

}
    

export default TwitterAPI;
