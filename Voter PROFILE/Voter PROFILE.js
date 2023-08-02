import React from 'react';

class VoterPROFILE extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      V_ID: null,
      V_Password: null,
      V_Name: null,
      V_Information: null,
    };
  }

  castVote = () => {
    // TODO implement here
  }

  viewResult = () => {
    // TODO implement here
  }

  operation3 = () => {
    // TODO implement here
  }

  render() {
    return (
      <div>

        <p>Voter ID: {this.state.V_ID}</p>
        <p>Voter Name: {this.state.V_Name}</p>
        <p>Voter Information: {this.state.V_Information}</p>
        <button onClick={this.castVote}>Cast Vote</button>
        <button onClick={this.viewResult}>View Result</button>
        <button onClick={this.operation3}>Operation 3</button>
      </div>
    );
  }
}

export default VoterPROFILE;
