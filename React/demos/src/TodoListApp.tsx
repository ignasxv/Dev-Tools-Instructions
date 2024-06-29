import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskGroup from "./components/TaskGroup";
import TaskList from "./components/TaskList";
let nextId = 2;
export default function TodoListApp() {
  const initialTasks = [
    { id: 0, text: "one" },
    { id: 1, text: "two" },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  function handleDelete(taskId: any) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  function handleAdd(text: string) {
    console.log(text);
    setTasks([{ id: nextId++, text: text }, ...tasks]);
  }

  function handleChange(task: any) {
    setTasks(
      tasks.map((t) => {
        if (t.id == task.id) return task;
        else return t;
      })
    );
  }

  return (
    <>
      <TaskGroup
        listImage="https://cdn.britannica.com/64/145564-050-BEF0E4DC/Wind-palm-trees-golf-course-Hawaii-Maui.jpg"
        listName="Prague Itenary"
        tasks={tasks}
        handleDelete={handleDelete}
        handleChange={ handleChange }
        handleAdd={handleAdd}
      />
    </>
  );
}
