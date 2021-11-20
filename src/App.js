import "./css/App.css";
import React, { useState, useEffect } from "react";
import { getShowData, getCastData } from "./api";
import { Route, Routes } from "react-router-dom";

import MainPage from "./components/MainPage";
import CastPage from "./components/CastPage";

function App() {
  const [data, setData] = useState({
    showData: [],
    castData: [],
    isLoading: true,
  });

  useEffect(() => {
    async function makeAPICalls() {
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

      console.log("DATA SET");
      if (showResp && castResp) {
        setData({ showData: showResp, castData: castResp, isLoading: false });
      }
    }
    makeAPICalls();
  }, []);

  useEffect(() => {
    console.log("hit");
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            isLoading={data.isLoading}
            showData={data.showData}
            castData={data.castData}
          />
        }
      />
      <Route path="/cast/:id" element={<CastPage castData={data.castData} />} />
    </Routes>
  );
}

export default App;
