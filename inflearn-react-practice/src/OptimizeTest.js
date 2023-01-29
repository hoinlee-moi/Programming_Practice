import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log("CounterA update - count : ", count);
  });
  return <div>{count}</div>;
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log("CouterB update - count :", obj.count);
  });

  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count;

  //return true // 이전 프롭스와 현재 프롭스가 같다 -> 리렌더링을 일으키지 않음
  //return false // 이전과 현재가 다르다 -> 리렌더링을 일으키다
};
const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>counter a</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>a button</button>
      </div>
      <div>
        <h2>counter b</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          b button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
