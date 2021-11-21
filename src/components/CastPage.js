import "../css/CastPage.css";
import { useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

function CastPage(props) {
  let { id } = useParams();
  let { castData, isLoading } = props;
  id = Number(id);

  let selectedCast =
    castData[castData.map((castMember) => castMember.character.id).indexOf(id)];
  console.log(selectedCast);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="castMainDiv">
        <h3 id="castNameHeader">{selectedCast.person.name}</h3>
        <img
          id="castImg"
          src={selectedCast.person.image?.original}
          alt="cast member"
        ></img>
        <h3>as {selectedCast.character.name}</h3>
      </div>
    );
  }
}
export default CastPage;
