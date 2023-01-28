import app from '../app'
import { usingAsyncTest } from '../utils/function'
import supertest from 'supertest'

describe('Testing the home page endpoint', function () {
  it('returns 200', async function () {
    // status code should be 200 `OK`
    await supertest(app).get('/').expect(200)
  })
})

describe('Testing the imgs page endpoint', function () {
  it('returns 200', async function () {
    // status code should be 200 `OK`
    await supertest(app).get('/images').expect(200)
  })
})

describe('Testing imgs page endpoint error', function () {
  it('should return 200 (cause error got handel and no error thrown) ', async function () {
    // status code should be 200 `OK`
    await supertest(app)
      .get('/images?name=bdr&width=80&height=ftgjggfh')
      .expect(200)
  })
})
describe('Testing imgs page endpoint seccess ', function () {
  it('should return 200  ', async function () {
    // status code should be 200 `OK`
    await supertest(app).get('/images?name=bdr&width=80&height=20').expect(200)
  })
})

describe('img function', function () {
  it('Test Img Function', async function () {
    const value: Boolean | any = await usingAsyncTest('BDR', 380, 80)
    expect(value).toBe(true)
  })
})
