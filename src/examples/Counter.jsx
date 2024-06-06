import { useEffect, useState } from "react";
import { Child } from "./Child";

const Counter = () => {
    // "use memo"
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Counter and Name component");
  });
  return (
    <div>
      <button onClick={() => setCount((value) => value + 1)}>
        Count: {count}
      </button>
      <input className="border-2 border-black" type="text" placeholder="text input" onChange={(e) => setName(e.target.value)} />
      <Child name={name} />
    </div>
  );
};

export default Counter;
