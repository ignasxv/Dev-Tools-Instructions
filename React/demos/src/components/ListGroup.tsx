import { MouseEvent, ReactNode, useState } from "react";
import Button from "./Button";


interface PropsName{
    items: ReactNode[];
    heading: string;
    onSelectItem: (item: string) => void;
}



function ListGroup({items, heading, onSelectItem}: PropsName) {
  
  const name = "ignas";

  // Hook
  const arr = useState(-1);
  arr[0] //variable
  arr[1] // updater
 

  const handleClick = (e: MouseEvent) => {
    console.log("clicket");
    console.log(e.clientX, e.clientY);
  };

  function handle2(e: MouseEvent) {
    console.log(e.currentTarget);
  }

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No {heading} found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              "list-group-item " + (arr[0] === index ? "active" : "")
            }
            onClick={(e) => {console.log(e.clientX)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
