import axios from "axios";

const baseUrl = "https://nc-newsorama.herokuapp.com/api";

export const getArticles = topic => {
  const params = { topic: topic };
  return axios
    .get(`${baseUrl}/articles`, {
      params
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleById = article_id => {
  return axios.get(`${baseUrl}/articles/${article_id}`, {}).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleId = article_id => {
  return axios
    .get(`${baseUrl}/articles/${article_id}/comments`, [])
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};
