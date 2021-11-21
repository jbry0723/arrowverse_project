import "../css/CastButton.css";
import {Link} from 'react-router-dom'

function CastButton(props) {
  let { castImg,castName, charName,charId } = props;

  
  return (
      <Link to= {`/cast/${charId}`}>
    <div className="castButton">
      <img src={castImg} alt="Arrow character"></img>
        <p  className="castButtonTitle">{castName} as {charName}</p>
    </div>
    </Link>
  );
}
export default CastButton;
