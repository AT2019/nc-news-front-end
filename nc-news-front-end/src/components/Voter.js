import React, { Component } from "react";
import { vote } from "../api";

class Voter extends Component {
  state = {
    voteModifier: 0,
    err: null
  };
  render() {
    const { voteModifier, err } = this.state;
    if (err) return <p>Something went wrong...</p>;
    return (
      <div>
        <button onClick={() => this.vote(1)} disabled={voteModifier === 1}>
          <span role="img" aria-label="thumbs up">
            👍
          </span>
        </button>
        <p>Votes: {this.props.votes + this.state.voteModifier}</p>
        <button onClick={() => this.vote(-1)} disabled={voteModifier === -1}>
          <span role="img" aria-label="thumbs down">
            👎
          </span>
        </button>
      </div>
    );
  }

  vote = num => {
    vote(this.props.type, this.props.id, num).catch(err => {
      this.setState({ err });
    });
    this.setState(state => {
      return { voteModifier: state.voteModifier + num };
    });
  };
}

export default Voter;
