import React, { useState } from "react";
let q = 0;
export default function AddTask( {handleAdd} ) {
  const [content, setContent] = useState("");
  return (
    <>
      <div className="mb-3 d-flex ">
        <input
          onChange={(e) => {setContent(e.target.value)}}
          value={content}
          type="email"
          className="form-control me-1"
          placeholder="Add Task"
        />
        <button onClick={ () => { handleAdd(content); setContent( "" + q++ ) } } type="submit" className="btn btn-primary me-0">
          Add
        </button>
      </div>
    </>
  );
}
