import { memo } from "react"

const Child = ({ onClick }) => {
  console.log("Child Rendered")
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onClick}>Child Button</button>
    </div>
  )
}

export default memo(Child)