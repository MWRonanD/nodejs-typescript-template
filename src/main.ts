import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Request, Response } from 'express';
import { ExampleController } from './controllers/ExampleController';
import { Container } from 'typedi/Container';
import * as mongoose from 'mongoose';
import 'dotenv/config';
import { ValidateEnv } from './utils/validate.env';

useContainer(Container);

ValidateEnv.checkEnv();
const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

mongoose.connect(
  `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`,
  { useNewUrlParser: true },
);

const app = createExpressServer({
  cors: {
    origin: '*',
  },
  controllers: [ExampleController],
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('app listening on port 3000');
});
