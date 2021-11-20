import "./css/App.css";
import React, { useState, useEffect } from "react";
import { getShowData, getCastData } from "./api";
import LoadingScreen from "./components/LoadingScreen";
import MainPage from "./components/MainPage"


function App() {
  const [data, setData] = useState({ showData: [], castData: [] });
  const [isLoading, setIsLoading] = useState(true);

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
      if (showResp && castResp) {
        setIsLoading(false);
      }
    }
    makeAPICalls();
  }, []);

  useEffect(() => {
    console.log("hit");
  });

  if (isLoading) {
    return (
      <LoadingScreen/>
    );
  } else {
    return( <MainPage showData={data.showData} castData={data.castData} />
  )}
}
export default App;
