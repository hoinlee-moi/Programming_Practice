import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (
      req.body.title.tirm().length < 1 ||
      req.body.content.tirm().length < 1
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
