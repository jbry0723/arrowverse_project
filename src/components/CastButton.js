import "../css/CastButton.css";
import {Link} from 'react-router-dom'

function CastButton(props) {
  let { castImg,castName, charName,charId } = props;

  
  return (
      <Link to= {`/cast/${charId}`}>
    <div className="castButton">
      <img src={castImg} alt="Arrow character" id="castButtonImg"></img>
        <p  className="castButtonTitle"><span className="castName">{castName}</span> as {charName}</p>
    </div>
    </Link>
  );
}
export default CastButton;
