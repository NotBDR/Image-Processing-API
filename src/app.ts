import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
const func = require('./utils/function')
dotenv.config()
const app = express()
app.use(express.json())

//root ofthe website
app.get('/', (_req: Request, res: Response): void => {
  res.send('Welcome to the home page!')
})

//images
app.get('/images', (req: Request, res: Response): void => {
  let name: String = String(req.query.name)
  let width: Number | any = Number(req.query.width)
  let height: Number | any = Number(req.query.height)
  if (!isNaN(width) && !isNaN(height) && req.params) {
    if (func.API(res, name, width, height)) {
      console.log('Success!')
    } else console.log('failed')
  } else {
    res.send('width or height is not a Number !')
  }
})
export default app
