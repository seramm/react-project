import { useState } from "react";

export default function Task({ id, number, text, onDelete }) {
  return (
    <div className="task">
      <h2>Task {number}</h2>
      <p
        style={{
          display: "flex",
          textAlign: "left",
          flex: "1",
          fontSize: "18px",
        }}
      >
        {text}
      </p>
      <div className="v-flexbox">
        <button onClick={() => onDelete(id)}>Remove</button>
      </div>
    </div>
  );
}
