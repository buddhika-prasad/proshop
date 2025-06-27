import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
  <spinner
    animation="border"
    role="status"
    style={{   
      width: "100px",
      height: "100px",
      margin: "auto",
      display: "block",
  }} 
  > </spinner>

  );};

export default Loader;