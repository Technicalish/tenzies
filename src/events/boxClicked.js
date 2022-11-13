export default function boxClicked(e, i, random, change, tenzy, setBoxes) {
  if (tenzy) return;
  setBoxes(prevBoxes => {
  var boxes = [...prevBoxes];
  var box = boxes[i];
  box.change = !box.change;
  return boxes;
  });
}