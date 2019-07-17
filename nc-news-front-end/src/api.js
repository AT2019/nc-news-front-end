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
      return data;
    });
};

export const postComment = (article_id, newComment) => {
  console.log(newComment);
  //   newComment.username = "jessjelly";
  return axios
    .post(`${baseUrl}/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    })
    .catch(err => console.log(err));
};

export const deleteCommentById = id => {
  return axios.delete(`${baseUrl}/comments/${id}`);
};

export const vote = (type, id, increment) => {
  return axios.patch(`${baseUrl}/${type}s/${id}`, { inc_votes: increment });
};
