import Link from "next/link";
import DetailLink from "./DetailLink";
import { connectDB } from "@/util/database";
import handler from "@/pages/api/list";
import ListItem from "./ListItem";

export default async function List() {
  // let result = await fetch(handler)
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  result = result.map(item=>{
    item._id = item._id.toString()
    return item
  })
  return (
    <div className="list-bg">
      <ListItem result={result}/>
    </div>
  );
}

