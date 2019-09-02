import React from "react";
import { Link } from "@reach/router";
import styles from "../componentsCSS/Articles.module.css";
import articleBody from "../utils/articleBody";
import formatDateAppearance from "../utils/formatDateAppearance";

const ArticleCard = ({ article, loggedInUser, deleteArticle }) => {
  return (
    <div>
      <li className={styles.ListItem}>
        <Link className={styles.Link} to={`/articles/${article.article_id}`}>
          <h3 className={styles.TitleText}>{article.title}</h3>
        </Link>
        <Link
          className={styles.BodyLink}
          to={`/articles/${article.article_id}`}
        >
          <p className={styles.Text}>
            {articleBody(article.body)}...click here to read more
          </p>
        </Link>
        <p className={styles.Text}>Author: {article.author}</p>
        <Link className={styles.Link} to={`/authors/${article.author}`}>
          <p className={styles.Text}>Read more articles by {article.author}</p>
        </Link>

        <Link className={styles.Link} to={`/topic/${article.topic}`}>
          <p className={styles.Text}>
            Click here for more articles on... {article.topic}
          </p>
        </Link>
        <p className={styles.Text}>
          Created at: {formatDateAppearance(article.created_at)}
        </p>
        <p className={styles.Text}>Votes: {article.votes}</p>
        <p className={styles.Text}>Comments: {article.comment_count}</p>

        {loggedInUser === article.author && (
          <button
            className={styles.DeleteButton}
            type="button"
            onClick={() => deleteArticle(article.article_id)}
          >
            Delete My Article
          </button>
        )}
      </li>
    </div>
  );
};

export default ArticleCard;
