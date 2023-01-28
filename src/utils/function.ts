const fs = require('fs')
const sharp = require('sharp')
import express, { Request, Response } from 'express'
import path from 'path'

export async function API(
  res: Response,
  name: string,
  width: Number,
  height: Number,
): Promise<Boolean> {
  var Spath = path.join(
    __dirname,
    '..',
    'imgs',
    `${name}${width}x${height}.jpg`,
  )

  try {
    if (await fs.accessSync(Spath, fs.constants.R_OK))
      console.log('file exists')
    res.sendFile(Spath)
    return true
  } catch (err) {
    console.log('file not found')
    await usingAsync(name, width, height)
    res.sendFile(Spath)
    return true
  }
}

export const usingAsync = async (
  name: string,
  width: Number,
  height: Number,
): Promise<void> => {
  var Epath = path.join(__dirname, '..', 'imgs', `${name}.jpg`)

  try {
    await sharp(Epath)
      .resize(width, height)
      .toFile(
        path.join(__dirname, '..', 'imgs', `${name}${width}x${height}.jpg`),
      )
  } catch (e) {
    console.log(e)
  }
}

//test function without neededfor respone ..

export const usingAsyncTest = async (
  name: string,
  width: number,
  height: number,
): Promise<boolean> => {
  var Epath = path.join(__dirname, '..', 'imgs', `${name}.jpg`)

  try {
    await sharp(Epath)
      .resize(width, height)
      .toFile(
        path.join(__dirname, '..', 'imgs', `${name}${width}x${height}.jpg`),
      )
    return true
  } catch (e) {
    return false
  }
}

module.exports = { API, usingAsyncTest, usingAsync }
