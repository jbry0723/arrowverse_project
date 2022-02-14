import "./css/App.css";
import React, { useState, useEffect } from "react";
import { getShowData, getCastData } from "./api";
import { Route, Routes } from "react-router-dom";
import TitleHeader from "./components/TitleHeader";

import MainPage from "./components/MainPage";
import CastPage from "./components/CastPage";

function App() {
  const [data, setData] = useState({
    showData: [],
    castData: [],
    isLoading: true,
    csvFile: null,
  });

  useEffect(() => {
    async function makeAPICalls() {
      function prepareCSV() {
        let castCopy = castResp.map((entry) => {
          return entry.person;
        });
        let csv = JSON.parse(JSON.stringify(castCopy));
        csv.forEach((entry) => {
          if (entry.country !== null) {
            entry.country = entry.country.name;
          }
          entry.image = entry.image.original;
          entry._links = entry._links.self.href;
        });
        castResp.forEach((entry) => {
          csv[castResp.indexOf(entry)].charUrl = entry.character.url;
          csv[castResp.indexOf(entry)].charName = entry.character.name;
          csv[castResp.indexOf(entry)].charId = entry.character.id;
          csv[castResp.indexOf(entry)].charImage =
            entry.character.image.original;
        });
        return csv;
      }

      let showResp = await getShowData()
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          window.alert("Error retrieving show data");
        });
      let castResp = await getCastData()
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          window.alert("Error retrieving cast data");
        });
      if (showResp && castResp) {
        let csv = await prepareCSV();
        setData({
          showData: showResp,
          castData: castResp,
          isLoading: true,
          csvFile: csv,
        });
      }
    }
    makeAPICalls();
  }, []);

  return (
    <div className="App">
      <TitleHeader />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              isLoading={data.isLoading}
              showData={data.showData}
              castData={data.castData}
              csvFile={data.csvFile}
            />
          }
        />
        <Route
          path="/cast/:id"
          element={
            <CastPage isLoading={data.isLoading} castData={data.castData} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
