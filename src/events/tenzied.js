function tenzied(boxes, tenzy, setTenzy, alarm, setAlarm) {
var same = boxes.every(box => box.random === boxes[0].random);
var change = boxes.every(box => !box.change);
var currentTenzy = same && change;
var currentAlarm = !same && change;
  if (tenzy !== currentTenzy) {
  setTenzy(currentTenzy);
  }
  if (alarm !== currentAlarm) {
  setAlarm(currentAlarm);
  }
}
export default tenzied;