export default function boxClicked(e, i, random, change, tenzy, alarm, setBoxes, boxes) {
  setBoxes(prevBoxes => {
  var boxes = [...prevBoxes];
  var box = boxes[i];
  box.change = !box.change;
  return boxes;
  });
}