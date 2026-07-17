import React, { useCallback, useState } from "react"
import Child from "./Child"

const UseCallbackHook = () => {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)

  const handleClick = useCallback(() => {
    console.log("Button clicked from Child")
  }, [])

  return (
    <div style={{ background: dark ? "#222" : "#f4f4f4", color: dark ? "#fff" : "#000", minHeight: "100vh", padding: "30px",}}>
      <h1>useCallback Hook</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setDark(!dark)} style={{ marginLeft: "10px" }}>Toggle Theme</button>
      <hr />
      <Child onClick={handleClick} />
    </div>
  );
};

export default UseCallbackHook;