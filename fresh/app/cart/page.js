import CartItem from "./CartItem";
import Greetings from "./Greetings";

export default function Cart() {
  return (
    <div>
      <Greetings />
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}
