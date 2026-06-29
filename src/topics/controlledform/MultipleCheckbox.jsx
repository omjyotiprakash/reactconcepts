import React, { useState } from "react";

const MultipleCheckbox = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const hobbies = ["Cricket", "Football", "Coding", "Reading"];

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checkedItems);
  };

  return (
    <div>
      <h1>Multiple Checkbox</h1>

      <form onSubmit={handleSubmit}>
        {hobbies.map((hobby) => (
          <div key={hobby}>
            <input
              type="checkbox"
              value={hobby}
              checked={checkedItems.includes(hobby)}
              onChange={handleCheckbox}
            />
            <label>{hobby}</label>
          </div>
        ))}

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultipleCheckbox;