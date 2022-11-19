function tenzied(boxes, tenzy, setTenzy) {
var current = boxes.every(box => {
  return (box.random === boxes[0].random) && !box.change;
  });
  if (tenzy !== current) {
  setTenzy(current);
  }
}
export default tenzied;