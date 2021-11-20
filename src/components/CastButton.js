import "../css/CastButton.css";

function CastButton(props) {
  let { castImg,castName, charName } = props;
  return (
    <div className="castButton">
      <img src={castImg} alt="cast member"></img>
        <p  className="castButtonTitle">{castName} as {charName}</p>
    </div>
  );
}
export default CastButton;
