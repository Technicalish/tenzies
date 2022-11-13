import { useEffect } from "react";
function Won(props) {
  useEffect(() => {
  var p = document.querySelector(".won p");
  var height = document.body.clientHeight * 0.8;
  var width = document.body.clientWidth * 0.8;
  var size = Math.min(height, width);
  var value = size * (16 / 150);
  var font = `normal normal 900 ${value}px/${value}px  sans-serif`;
  p.style.font = font;
  }, []);
var { random } = props;
  return (
    <div className="won">
      <img src={`/dice-${random}.svg`} alt={random}/><p> was Tenzied!</p>
    </div>
    
  )
}
export default Won;