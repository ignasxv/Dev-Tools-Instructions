import ListGroupApp from "./ListGroupApp/ListGroupApp";
import Gala from "./GalaApp/Gala"
import TodoListApp from "./TodoListApp/TodoListApp";
import { useState } from "react";
import ListGroup from "./ListGroupApp/ListGroup";

export default function App() {

  const projects = [<ListGroup />, <ListGroupApp />, <ListGroupApp />, <Gala />, <TodoListApp />, <MovingDot />];
  const [index, setIndex] = useState(0);

  return (


    <div className="container-fluid" >
      <div className="btn-group" role="group" aria-label="Basic example">
        <button onClick={handlePreviouProject} type="button" className="btn btn-primary me-2">Previous Project</button>
        <button onClick={handleNexProject} type="button" className="btn btn-primary me-2">Next Project</button>
      </div>
      {projects[index]}

    </div>
  );

  function handleNexProject() {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePreviouProject() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }


  function MovingDot() {
    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });
    return (
      <div
        onPointerMove={e => {
          setPosition({
            x: e.clientX,
            y: e.clientY
          });
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '1000vh',
        }}>
        <div style={{
          position: 'relative',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          // left: -18,
          // top: -50,
          width: 20,
          height: 20,
        }} />
      </div>
    );
  }





}
