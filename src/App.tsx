import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import NewButton from "./components/NewButton/NewButton";
import Like from "./components/Like";

const App = () => {
  const cities = ["New York", "London", "Toronto", "Sydney", "Mumbai"];
  const heading = "Cities";
  const handleSlectedItem = (index: number, name: string) => {
    console.log(name, index);
  };
  const [visableDanger, setVisableDanger] = useState(true);
  const [visableSecondry, setVisableSecondry] = useState(true);

  const [visableAlert, setVisableAlert] = useState(true);

  return (
    <div>
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      />

      {visableDanger && (
        <Alert
          type="danger"
          onAlertClick={() => {
            setVisableDanger(!visableDanger);
          }}>
          This is a danger alert
        </Alert>
      )}

      <Button
        type="danger"
        onClick={() => {
          console.log("Clicked");
          setVisableDanger(!visableDanger);
        }}>
        Danger
      </Button>
      <ListGroup
        items={cities}
        heading={heading}
        onSelectedItem={handleSlectedItem}
      />
      {visableSecondry && (
        <Alert
          type="secondary"
          onAlertClick={() => {
            setVisableSecondry(!visableSecondry);
          }}>
          This is a secondary alert
        </Alert>
      )}
      {visableAlert && (
        <>
          <Alert
            type="success"
            onAlertClick={() => {
              setVisableAlert(!visableAlert);
            }}>
            This is a success alert
          </Alert>
          <Alert
            type="danger"
            onAlertClick={() => {
              setVisableAlert(!visableAlert);
            }}>
            This is a danger alert
          </Alert>
          <Alert
            type="warning"
            onAlertClick={() => {
              setVisableAlert(!visableAlert);
            }}>
            This is a warning alert
          </Alert>
          <Alert
            type="info"
            onAlertClick={() => {
              setVisableAlert(!visableAlert);
            }}>
            This is a info alert
          </Alert>
          <Alert
            type="light"
            onAlertClick={() => {
              setVisableAlert(!visableAlert);
            }}>
            This is a light alert
          </Alert>
          <Alert
            type="dark"
            onAlertClick={() => {
              setVisableAlert(!visableAlert);
            }}>
            This is a dark alert
          </Alert>
          <NewButton type="info" onClick={() => console.log("NewButton")}>
            New Button
          </NewButton>
        </>
      )}
    </div>
  );
};
export default App;
