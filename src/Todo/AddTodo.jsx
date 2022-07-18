import { useState } from "react";

function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add something"
      />
      <button onClick={() => handleAdd(text)}>ADD</button>
    </div>
  );
}

export default AddTodo;
