import Item from "./Item";

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((item, idx) => {
        return <Item item={item} idx={idx} />;
      })}
    </div>
  );
}
