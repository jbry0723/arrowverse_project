import axios from "axios";

const getShowData = () => {
  return axios.get("https://api.tvmaze.com/lookup/shows?imdb=tt2193021");
};

const getCastData = () => {
  return axios.get("https://api.tvmaze.com/shows/4/cast");
};

export { getShowData, getCastData };
