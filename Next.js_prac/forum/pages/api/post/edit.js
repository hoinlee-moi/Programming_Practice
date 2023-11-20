import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = { title: req.body.title, content: req.body.content };
      console.log(req.body._id);
      const db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set:  data  });
      res.redirect(302, "/list");
    } catch (error) {
      throw error;
    }
  }
}
