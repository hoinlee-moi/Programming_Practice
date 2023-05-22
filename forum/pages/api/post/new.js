import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session=  getServerSession(req,res,authOptions)
  /*
  if(session) {
    req.body.autho = session.user.email
  }
  */ 
  if (req.method == "POST") {
    if (
      req.body.title==="" ||
      req.body.content===""
    ) {
      return res.status(500).json("다쓰셈");
    }
    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(req.body);
      return res.redirect(302, "/list");
    } catch (error) {
        return res.status(500).json("데이터저장 실패함!")
    }
  }
}
