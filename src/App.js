import { useState, useEffect } from "react";
import Boxes from "./Boxes";
import generateBoxes from "./generateBoxes";
import Won from "./Won";
import Confetti from "react-confetti";
import boxClicked from "./events/boxClicked";
import windowResized from "./events/windowResized";
import tenzied from "./events/tenzied";

function App() {
var [boxes, setBoxes] = useState(generateBoxes);
var [tenzy, setTenzy] = useState(false);
var [HW, setHW] = useState([document.body.clientHeight, document.body.clientWidth]);
var [height, width] = HW;
  function buttonClicked() {
    if (tenzy) {
    setBoxes();
    setBoxes(generateBoxes);
    } else {
    setBoxes(generateBoxes);
    }
  }
  function resized() {
  windowResized(setHW);
  }
  useEffect(() => {
  var container = document.querySelector(".container");
  var button = document.querySelector("button");
  var [height, width] = HW;
  var Height = height * 0.8;
  var Width = width * 0.8;
  var size = Math.min(Height, Width);
  var value = size * (16 / 150);
  container.style.width = size + "px";
  var font = `normal normal 900 ${value}px/${value}px  sans-serif`;
  button.style.font = font;
  window.addEventListener("resize", resized);
  }, [HW]);
  tenzied(boxes, tenzy, setTenzy);
  return (
    <>
    {tenzy && <Confetti {...{ height, width }}/>}
    <div className="container">
      {!tenzy?
      <main>
        <Boxes {...{boxes, setBoxes, tenzy, boxClicked}}/>
      </main>
      :<Won {...{HW, random: boxes[0].random}}/>}
      <button onClick={buttonClicked}>{tenzy?`RESET`:`ROLL`}</button>
    </div>
    </>
  )
}
export default App;