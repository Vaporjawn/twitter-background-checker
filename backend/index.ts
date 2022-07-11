import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
// const JSONParser = bodyParser.json();
// const URLencodedParser = bodyParser.urlencoded({ extended: false })

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
