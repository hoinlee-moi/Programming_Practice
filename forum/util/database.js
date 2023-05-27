import { MongoClient } from 'mongodb'
const url = `mongodb+srv://admin_214:${process.env.NEXT_PUBLIC_MONGO_PASSWORD}@cluster0.yrtepdc.mongodb.net/`
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
