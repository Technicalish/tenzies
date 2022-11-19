import { useEffect } from "react";
function Won(props) {
var { random, HW } = props;
  useEffect(() => {
  var p = document.querySelector(".won p");
  
  var [height, width] = HW;
  var Height = height * 0.8;
  var Width = width * 0.8;
  var size = Math.min(Height, Width);
  var value = size * (16 / 150);
  var font = `normal normal 900 ${value}px/${value}px  sans-serif`;
  p.style.font = font;
  }, [HW]);
  return (
    <div className="won">
      <img src={`/dice-${random}.svg`} alt={random}/><p> was Tenzied!</p>
    </div>
    
  )
}
export default Won;