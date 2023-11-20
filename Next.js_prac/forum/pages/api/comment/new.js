import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session =  getServerSession(req,res,authOptions)
  if (req.method == "POST") {
    req.body = JSON.parse(req.body)
    let data = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: "",
    };
    const db = (await connectDB).db("forum");
    let result = await db.collection("comment").insertOne(req.body);
  }
}
