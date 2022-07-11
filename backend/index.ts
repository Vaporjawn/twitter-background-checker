import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { TwitterApi } from 'twitter-api-v2';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const twitterClient = new TwitterApi(process.env.TWITTER_API_KEY!);
const twitterAPI = twitterClient.readOnly;


app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/hello', (_req: Request, res: Response) => {
    res.json({
        message: 'Hello World'
    });
});

app.post('/twitterV2', async (req: Request, res: Response) => {
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

app.post('/twitter', async (req: Request, res: Response) => {
  await fetch('https://api.github.com/users/'+ req.body.userName)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    res.json(data);
  }, err => {
    console.log(err);
    res.json(err);
  })
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
