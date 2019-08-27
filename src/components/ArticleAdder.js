import React, { Component } from "react";
import { postArticle } from "../api";

class ArticleAdder extends Component {
  state = {
    title: "",
    topic: "coding",
    author: "",
    body: "",
    err: null
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddArticle}>
          <input
            type="text"
            placeholder="Title"
            onChange={this.handleTitleChange}
            value={this.state.title}
            required
          />
          <select onChange={this.handleTopicChange} value={this.state.topic}>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
          {/* <input
            type="text"
            placeholder="Topic"
            onChange={this.handleTopicChange}
            value={this.state.topic}
            required
          /> */}
          <input
            placeholder="Article Text"
            onChange={this.handleBodyChange}
            value={this.state.body}
            required
          />
          <button>Add Article</button>
        </form>
      </>
    );
  }
  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };
  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
  };
  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };
  handleAddArticle = event => {
    event.preventDefault();
    postArticle({
      title: this.state.title,
      topic: this.state.topic,
      body: this.state.body,
      author: this.props.author
    })
      .then(article => {
        console.log(article);
        this.props.setNewArticle(article);
        this.setState({
          title: "",
          topic: "coding",
          author: "",
          body: ""
        });
      })
      .catch(({ err }) => {
        this.setState({ err });
      });
  };
}

export default ArticleAdder;
