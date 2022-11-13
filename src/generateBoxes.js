import { v4 } from "uuid";
function generateBoxes(props) {
var data = [];
  for (let i = 0; i < 10; i++) {
  var random = Math.floor(Math.random() * 6 + 1);
  try {
  var prop = props[i];
  } catch(e) {}
    if ((prop && prop.change) || !prop) {
    data.push({random, change: true, id: v4()})
    } else {
    data.push(prop);
    }
  }
return data;
}
export default generateBoxes;