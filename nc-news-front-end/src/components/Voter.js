import React, { Component } from "react";
import { vote } from "../api";
import styles from "./Voter.module.css";

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
        <p>
          <button
            className={styles.Ptag}
            onClick={() => this.vote(1)}
            disabled={voteModifier === 1}
          >
            <span role="img" aria-label="thumbs up">
              👍
            </span>
          </button>
          Votes: {this.props.votes + this.state.voteModifier}
          <button
            className={styles.Ptag}
            onClick={() => this.vote(-1)}
            disabled={voteModifier === -1}
          >
            <span role="img" aria-label="thumbs down">
              👎
            </span>
          </button>
        </p>
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
