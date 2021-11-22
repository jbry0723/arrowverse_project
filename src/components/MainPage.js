import "../css/MainPage.css";
import CastButton from "./CastButton";
import React, { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import { CSVLink } from "react-csv";

function MainPage(props) {
  const [drawerToggle, setDrawerToggle] = useState(false);
  let { showData, castData, isLoading, csvFile } = props;

  let openDrawer = (e) => {
    e.preventDefault();
    setDrawerToggle(true);
  };

  let closeDrawer = (e) => {
    e.preventDefault();
    setDrawerToggle(false);
  };

  const closedDrawer = {
    maxWidth: "0",
    opacity: "0",
    transition: "max-width .3s,opacity .2s",
  };
  const openedDrawer = {
    maxWidth: "100%",
    transition: "max-width .3s, opacity .2s",
  };

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <main id="mainDiv">
        <nav id="mobileHeader">
          <div
            className="windowHeader"
            onClick={openDrawer}
            id={drawerToggle ? "activeMobileButton" : "inactiveMobileButton"}
          >
            <h2>Information</h2>
          </div>
          <div
            className="windowHeader"
            onClick={closeDrawer}
            id={drawerToggle ? "inactiveMobileButton" : "activeMobileButton"}
          >
            <h2>Cast</h2>
          </div>
        </nav>
        <header id="windowHeaderContainer">
          <div className="windowHeader">
            <h2>Information</h2>
          </div>
          <div className="windowHeader">
            <h2>Cast</h2>
          </div>
        </header>
        <section
          style={drawerToggle === true ? openedDrawer : closedDrawer}
          id="infoWindow"
        >
          <h3>{showData.name}</h3>
          <p className="infoText">
            <span className="infoLabel">Genre: </span>
            {showData.genres
              .map((genre) => {
                return " " + genre;
              })
              .toString()}
          </p>
          <p className="infoText">
            <span className="infoLabel">Premiered:</span> {showData.premiered}
          </p>
          <p className="infoText">
            <span className="infoLabel">Ended:</span> {showData.ended}
          </p>

          <p className="infoText">
            <span className="infoLabel">Network:</span> {showData.network?.name}
          </p>
          <p className="infoText">
            <span className="infoLabel">Runtime:</span> {showData.runtime}{" "}
            Minutes
          </p>
          <p className="infoText">
            <span className="infoLabel">Type:</span> {showData.type}
          </p>

          <p className="infoText" id="summaryHeader">
            Summary:
          </p>
          <article id="summaryContainer">
            <p className="infoText" id="summary">
              {showData.summary.substring(3, showData.summary.length - 4)}
            </p>
          </article>
          <CSVLink
            id="CSVbutton"
            data={csvFile}
            filename={"arrow-cast-info.csv"}
          >
            Download Cast Data (.csv)
          </CSVLink>
        </section>
        <section id="castWindow">
          <div className="castListContainer">
            {castData.map((castMember) => {
              return (
                <CastButton
                  key={Math.random() * castMember.person.id}
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
