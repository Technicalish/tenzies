function Boxes(props) {
var { boxes, boxClicked, tenzy, setBoxes } = props;
  return (
    boxes.map(({random, change, id}, i) => {
      return (
        <div key={id} className={`box ${!change?"dark":""}`} onClick={(e) => boxClicked(e, i, random, change, tenzy, setBoxes)}>
          <img src={`/dice-${random}.svg`} alt={random}/>
        </div>
      )
    })
  )
}
export default Boxes;