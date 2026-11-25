import { MongoMemoryServer } from 'mongodb-memory-server'
export default async function globalSetup() {
  const instance = await MongoMemoryServer.create({
    binary: {
      version: '9.0.7',
    },
  })
  global.__MONGOINSTANCE = instance
  process.env.DATABASE_URL = instance.getUri()
}
