function Boxes(props) {
var { boxes, boxClicked, tenzy, setBoxes, alarm } = props;
  function generateClasses(change) {
  var classyString = "";
    if (alarm) {
    classyString = " red"
    } else if (!change) {
    classyString = " hide"
    }
  return classyString
  }
  return (
    boxes.map(({random, change, id}, i) => {
      return (
        <div key={id} className={`box${generateClasses(change)}`} onClick={(e) => boxClicked(e, i, random, change, tenzy, alarm, setBoxes, boxes)}>
          <img src={`/dice-${random}.svg`} alt={random}/>
        </div>
      )
    })
  )
}
export default Boxes;