import "../css/CastPage.css";
import { useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";


function CastPage(props) {
  let { id } = useParams();
  let { castData, isLoading } = props;
  id = Number(id);

  let selectedCast =
    castData[castData.map((castMember) => castMember.character.id).indexOf(id)];

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
        <h3 id="characterName">as {selectedCast.character.name}</h3>
        <div id="castInfoContainer">
          <p className="castInfoText">
            Nationality: {selectedCast.person.country?.name}
          </p>
          <p className="castInfoText">
            Birtdate: {selectedCast.person?.birthday}
          </p>
          <p className="castInfoText">Gender: {selectedCast.person.gender}</p>

          <a
            href={`${selectedCast.person.url}`}
            rel="noreferrer"
            target="_blank"
            id="tvMazeLink"
            type="button"
          >
            More Info Via TvMaze
          </a>
        </div>
      </div>
    );
  }
}
export default CastPage;
