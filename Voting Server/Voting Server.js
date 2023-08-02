import React from 'react';

class VotingServer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Voter_ID: null,
      Candidate_id: null,
      TimeStamp: null,
      Votes_Count: null,
      Attribute1: null,
    };
  }

  sendReport = () => {
    // TODO implement here
  }

  countVotes = () => {
    // TODO implement here
  }

  render() {
    return (
      <div>
        <p>Voter ID: {this.state.Voter_ID}</p>
        <p>Candidate ID: {this.state.Candidate_id}</p>
        <p>TimeStamp: {this.state.TimeStamp}</p>
        <p>Votes Count: {this.state.Votes_Count}</p>
        <button onClick={this.sendReport}>Send Report</button>
        <button onClick={this.countVotes}>Count Votes</button>
      </div>
    );
  }
}

export default VotingServer;
