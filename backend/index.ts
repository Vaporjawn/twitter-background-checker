import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { TwitterApi } from 'twitter-api-v2';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const twitterClient = new TwitterApi(process.env.TWITTER_API_KEY!);
const twitterAPI = twitterClient.readOnly;
const twitterAPIAuth = new TwitterApi({ appKey: process.env.TWITTER_API_KEY!, appSecret: process.env.TWITTER_API_SECRET! });

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server is up an running');
});

app.get('/hello', (_req: Request, res: Response) => {
    res.json({
        message: 'Hello World'
    });
});

app.post('/userName', async (req: Request, res: Response) => {
  await twitterAPI.v2.userByUsername(req.body.userName)
  .then(user => {
    res.json(user.data);
    console.log(user.data);
    // console.log(res); // this is extra data but I don't need it 
  }).catch(err => {
    res.json(err);
    console.log(err);
  });
});

app.post('/tweetCount', async (req: Request, res: Response) => {
  await twitterAPIAuth.v2.tweetCountAll(req.body.userName)
  .then(tweetCount => {
    res.json(tweetCount.data);
    console.log(tweetCount.data);
  }).catch(err => {
    res.json(err);
    console.log(err);
  });
});

app.post('/userNameTest', (req: Request, res: Response) => {
    const test = req.body;
    console.warn(test);
    console.log(test);
    res.json({
        userName: 'test',
        message: 'Hello World',
        body: test
      });
    }
  );

app.listen(port, () => {
  console.log(`\n\n ⚡️[server]: Express server is running at https://localhost:${port}`);
});
