import axios from "axios";

const baseUrl = "https://nc-newsorama.herokuapp.com/api";

export const getArticles = (author, topic, sort_by, order, p) => {
  return axios
    .get(`${baseUrl}/articles`, {
      params: {
        author,
        topic,
        sort_by,
        order,
        p
      }
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleById = article_id => {
  return axios.get(`${baseUrl}/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleId = article_id => {
  return axios
    .get(`${baseUrl}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (article_id, newComment) => {
  return axios
    .post(`${baseUrl}/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentById = id => {
  return axios.delete(`${baseUrl}/comments/${id}`);
};

export const vote = (type, id, increment) => {
  return axios.patch(`${baseUrl}/${type}s/${id}`, { inc_votes: increment });
};

export const postArticle = data => {
  return axios.post(`${baseUrl}/articles`, data).then(({ data }) => {
    return data.article;
  });
};

export const deleteArticleById = article_id => {
  return axios.delete(`${baseUrl}/articles/${article_id}`);
};
