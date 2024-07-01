import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import multer from 'multer'

const { PORT = 3100 } = process.env;
const cors = require('cors')
// const upload = multer({dest: '/upload'})
const upload = multer()


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

app.post('/formdata', upload.none(), (req: Request, res: Response) => {
  
  // res.json({body: req.body, file: req.file})
  res.json({body: req.body})
});



app.use( (err: any, req: Request, res: Response, next: NextFunction) => {
  const { statusCode = 500, message } = err;
  
  res.status(statusCode).send(err)
})