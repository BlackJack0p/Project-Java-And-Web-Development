/*
import ListGroup from "./components/ListGroup";
let items =['New York','San Francisco','Tokyo','Londan','Paris'];

  const handleSelectItem = (item: string) => {
   console.log(item); }
 inbetween div <ListGroup items={items} heading ="Cities" onSelectItem={handleSelectItem}/>


*/
import { useState } from "react";
import Alert from "./components/Alert";
import Buttens from "./components/Buttens";


function App(){
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>

      {alertVisible && <Alert>My alert</Alert>}

      <Buttens color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Buttens>
    </div>
  );
}

export default App;