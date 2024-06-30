import express, { Request, Response } from 'express';
const cors = require('cors')

const { PORT = 3100 } = process.env;


const app = express();
app.use(cors({
  origin: true,
  credentials: true,
}))

app.listen(PORT, () => console.log(`Listen port http://localhost:${PORT}`))


app.get('/setcookie', (req: Request, res: Response) => {
  const now = Date.now()
  res.cookie('user_token', now, { httpOnly: true });
  res.json({ test: 'test ' + now })
});