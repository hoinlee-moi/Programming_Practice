"use client";

const { useState } = require("react");

function Item({item,idx}) {
   const [count,setCount] =  useState(0)
  return (
    <div className="food" key={idx}>
      {/* <Image src={picture} className="food-img" /> */}
      <img src={`/food${idx}.png`} className="food-img" />
      <h4>{item} $40</h4>
      <span> {count} </span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Item