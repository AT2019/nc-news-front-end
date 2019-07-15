import axios from "axios";

const baseUrl = "https://nc-newsorama.herokuapp.com/api";

export const getArticles = topic => {
  return axios
    .get(`${baseUrl}/articles`, {
      params: {
        topic: topic
      }
    })
    .then(({ data }) => {
      return data;
    });
};
