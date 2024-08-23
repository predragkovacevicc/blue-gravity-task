import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.static('public'));
app.use(express.json());

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({ message: `Can't find ${req.originalUrl} on this server!` });
});

export default app;
