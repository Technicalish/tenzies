import { useEffect } from "react";
function Tenzied(boxes, tenzy, setTenzy) {
  useEffect(() => {
  var current = boxes.every(box => {
    return box.random === boxes[0].random;
    });
    if (tenzy !== current) {
    setTenzy(current);
    }
  }, [boxes, tenzy, setTenzy]);
}
export default Tenzied;