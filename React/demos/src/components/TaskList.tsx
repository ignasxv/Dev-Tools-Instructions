import { useState } from "react";

interface Props {
  tasks: any;
  handleDelete: (task: any) => void;
  handleAdd: (task: any) => void;
  handleChange: (task: any) => void;
}

export default function TaskList({tasks, handleChange, handleDelete}: Props) {
  return (
    <>
      {tasks.map( (task: any) => <Task key={task.id} task={task} handleChange={handleChange} handleDelete={handleDelete} />  )}
    </>
  );

function Task({
  task,
  handleChange,
  handleDelete,
}: {
  task: any;
  handleChange: (task: any) => void;
  handleDelete: (task: any) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputVal, setInputVal] = useState(task.text);
  const [taski, setTask] = useState(task);

  let taskContent = isEditing ? (
    <div className="mb-2 d-flex align-items-center">
      <input type="checkbox" className="form-check-input me-2" />
      <input
        value={inputVal}
        type="email"
        className="form-control me-2"
        placeholder="Add task"
        onChange={(e) => { 
          setInputVal(e.target.value);
          setTask({...task, text: e.target.value} );
        }}
      />
      <button
        onClick={() => {
          console.log("saved");
          handleChange(taski);
          setIsEditing(false);
        }}
        className="btn btn-primary me-1"
      >
        Save
      </button>
      <button onClick={() => handleDelete(task.id)} className="btn btn-primary me-0">Delete</button>
    </div>
  ) : (
    <div className="mb-2 d-flex align-items-center">
      <input type="checkbox" className="form-check-input me-2" />
      <label className="col-form-label me-5">
        <strong>{task.text}</strong>
      </label>

      <button
        onClick={() => {
          setIsEditing(true);
        }}
        className="btn btn-primary me-2"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(task.id)}
        className="btn btn-primary me-0"
      >
        Delete
      </button>
    </div>
  );

  return <>{taskContent}</>;
}
}
