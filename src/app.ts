import express, { Request, Response } from 'express';
import cors from 'cors';
import { getErrorStatusCode, getErrorMessage } from './core/utils';

const app = express();

app.use(cors());

app.use(express.json());

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({ message: `Can't find ${req.originalUrl} on this server!` });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const statusCode = getErrorStatusCode(err, res);
  const message = getErrorMessage(err);

  res.status(statusCode).json({ message });
});

export default app;
