import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

const App = () => {
  const cities = ["New York", "London", "Toronto", "Sydney", "Mumbai"];
  const heading = "Cities";
  const handleSlectedItem = (index: number, name: string) => {
    console.log(name, index);
  };
  const [visableAlert, setVisableAlert] = useState(true);

  return (
    <div>
      {visableAlert && (
        <Alert
          type="danger"
          onAlertClick={() => {
            setVisableAlert(!visableAlert);
          }}>
          This is a danger alert
        </Alert>
      )}

      <Button
        type="danger"
        onClick={() => {
          console.log("Clicked");
          setVisableAlert(!visableAlert);
        }}>
        Danger
      </Button>
      {/* <ListGroup
          cities={cities}
          heading={heading}
          onSelectedItem={handleSlectedItem}
        /> */}

      {/* <Alert type="secondary">This is a secondary alert</Alert>
      <Alert type="success">This is a success alert</Alert>
      <Alert type="danger">This is a danger alert</Alert>
      <Alert type="warning">This is a warning alert</Alert>
      <Alert type="info">This is a info alert</Alert>
      <Alert type="light">This is a light alert</Alert>
      <Alert type="dark">This is a dark alert</Alert> */}
    </div>
  );
};
export default App;
