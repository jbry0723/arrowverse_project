import "../css/MainPage.css";
import CastButton from "./CastButton";
import LoadingScreen from "./LoadingScreen";

function MainPage(props) {
  let { showData, castData, isLoading } = props;
  console.log(showData);
  console.log(castData);

  if (isLoading) {
    return (
      <LoadingScreen/>
    );
  } else {
    return( 
  
    <main id="mainDiv">
      
      <header id="windowHeaderContainer">
        <div className="windowHeader">
          <h2>Information</h2>
        </div>
        <div className="windowHeader">
          <h2>Cast</h2>
        </div>
      </header>
      <section id="infoWindow">
        <h3>Title: {showData.name}</h3>
        <p className="infoText">
          Genre:{" "}
          {showData.genres
            .map((genre) => {
              return " " + genre;
            })
            .toString()}
        </p>
        <p className="infoText">Premiered: {showData.premiered}</p>
        <p className="infoText">Ended: {showData.ended}</p>

        <p className="infoText">Network: {showData.network?.name}</p>
        <p className="infoText">Runtime: {showData.runtime} Minutes</p>
        <p className="infoText">Type: {showData.type}</p>

        <p className="infoText" id="summaryHeader">
          Summary:
        </p>
        <article id="summaryContainer">
          <p className="infoText" id="summary">
            {showData.summary.substring(3, showData.summary.length - 4)}
          </p>
        </article>
      </section>
      <section id="castWindow">
        <div className="castListContainer">
          {castData.map((castMember) => {
            return (
              <CastButton
                key={Math.random()*castMember.person.id }
                castImg={castMember.character.image.medium}
                castName={castMember.person.name}
                charName={castMember.character.name}
                charId={castMember.character.id}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

}
export default MainPage;
