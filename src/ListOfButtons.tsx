import Button from "./Button";

function ListOfButtons() {
  return (
    <>
      <Button variant="primary" onClick={() => alert("I am important")}>
        Primary
      </Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
    </>
  );
}

export default ListOfButtons;
