function tenzied(boxes, tenzy, setTenzy, alarm, setAlarm) {
var same = boxes.every(box => box.random === boxes[0].random);
var nochange = boxes.every(box => !box.change);
var currentTenzy = same && nochange;
var currentAlarm = !same && nochange;
  if (tenzy !== currentTenzy) {
  setTenzy(currentTenzy);
  }
  if (alarm !== currentAlarm) {
  setAlarm(currentAlarm);
  }
}
export default tenzied;