import Button from "./Button";

function ListOfButtons() {
  return (
    <>
      <Button variant="primary" 
      //@ts-ignore
      onClick={() => alert("Please read all the instructions")}>
        Primary
      </Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
    </>
  );
}

export default ListOfButtons;
