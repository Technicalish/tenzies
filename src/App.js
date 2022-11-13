import { useState } from "react";
import Boxes from "./Boxes";
import generateBoxes from "./generateBoxes";
import Won from "./Won";
import boxClicked from "./events/boxClicked";
import windowResized from "./events/windowResized";
import Tenzied from "./events/Tenzied";
function App() {
console.log("render")
var [boxes, setBoxes] = useState(generateBoxes);
var [tenzy, setTenzy] = useState(false);
  function buttonClicked() {
    if (tenzy) {
    setBoxes();
    }
  setBoxes(generateBoxes);
  }
  windowResized();
  Tenzied(boxes, tenzy, setTenzy);
  return (
    <div className="container">
      {!tenzy?
      <main>
        <Boxes {...{boxes, setBoxes, tenzy, boxClicked}}/>
      </main>
      :
      <Won random={boxes[0].random}/>}
      <button onClick={buttonClicked}>{tenzy?`RESET`:`ROLL`}</button>
    </div>
  )
}
export default App;