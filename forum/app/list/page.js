import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item, idx) => {
        return (
          <Link href={`/detail/${item._id}`}>
            <div className="list-item" id={idx}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
