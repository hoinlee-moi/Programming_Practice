import Image from "next/image";
import picture from "/public/food0.png"

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((item,idx) => {
        return (
          <div className="food" key={idx}>
            {/* <Image src={picture} className="food-img" /> */}
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
