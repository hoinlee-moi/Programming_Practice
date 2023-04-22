function CartItem({item}) {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

export default CartItem;
