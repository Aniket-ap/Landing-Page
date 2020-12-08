import axios from "axios";

// const apiServer = process.env.REACT_APP_API_SERVER;
const apiServer = "https://powerful-forest-55875.herokuapp.com/";

export function getCategories() {
  return axios.get(`${apiServer}categories`);
}

export function getImages() {
  return axios.get(`${apiServer}banners`);
}
