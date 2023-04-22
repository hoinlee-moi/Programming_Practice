import CartItem from "./CartItem";
import Greetings from "./Greetings";

export default function Cart() {
  let cartitem = ['Tomatoes', 'Pasts']
  return (
    <div>
      <Greetings />
      <h4 className="title">Cart</h4>
      {cartitem.map(item=>{
        return <CartItem item={item} />
      })}
    </div>
  );
}
