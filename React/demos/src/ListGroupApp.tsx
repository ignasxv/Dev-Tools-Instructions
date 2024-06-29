import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function ListGroupApp() {
  const items: string[] = ["kenya", "uganda", "kampala"];
  const names: string[] = [];

  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleClick = (item: string) => {
    console.log(item);
  };

  const Buttons = [
    <Button text={""} whenClicked={handleClick} />,
    <Button text={""} color={"warning"} whenClicked={handleClick} />,
    <Button
      text={""}
      color={"danger"}
      whenClicked={() => {
        setAlertVisibility(!alertVisibility);
      }}
    />,
  ];

  return (
    <>
      <ListGroup
        onSelectItem={(item: string) => {
          console.log(item);
        }}
        items={Buttons}
        heading="Cities"
      />

      {alertVisibility && (
        <Alert
          onClickButton={() => {
            setAlertVisibility(!alertVisibility);
          }}
        >
          <h1>hello World</h1>
        </Alert>
      )}
    </>
  );
}