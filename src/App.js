import "./App.css";
import React, { useState, useEffect } from "react";
import { getShowData, getCastData } from "./api";

function App() {
  const [data, setData] = useState({ showData: [], castData: [] });

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
      setData({ showData: showResp, castData: castResp });
    }
    makeAPICalls();
  }, []);

  useEffect(() => {
    console.log("hit");
  });

  return <div>test</div>;
}

export default App;
