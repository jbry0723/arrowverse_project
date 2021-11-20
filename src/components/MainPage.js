import "../css/MainPage.css";
import CastButton from "./CastButton";

function MainPage(props) {
  let { showData, castData } = props;
  console.log(showData);
  console.log(castData);
  
  return (
    <main id="mainDiv">
      <header id="titleHeader">
        <h1 className="headerText"> {showData.name}</h1>
      </header>
      <section id="infoWindow">
        <header id="infoHeader" className="windowHeaders">
          <h2>Information</h2>
        </header>
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
        <p className="infoText">Runtime: {showData.runtime}</p>
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
        <header className="windowHeaders">
          <h2>Cast</h2>
        </header>
        <div className="castListContainer">
        {castData.map((castMember) => {
          return (
            <CastButton 
            key={castMember.person.name+castMember.person.id}
            castImg= {castMember.character.image.medium}
            castName={castMember.person.name}
            charName={castMember.character.name}
            />
          );
        })}
        </div>
      </section>
    </main>
  );
}
export default MainPage;
