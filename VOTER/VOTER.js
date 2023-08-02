import React from 'react';

class Voter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      V_ID: null,
      V_Password: null,
      V_Name: null,
    };
  }

  castVote = () => {
    // TODO implement here
  }

  operation1 = () => {
    // TODO implement here
  }

  viewResult = () => {
    // TODO implement here
  }

  render() {
    return (
      <div>
    
        <p>Voter ID: {this.state.V_ID}</p>
        <p>Voter Name: {this.state.V_Name}</p>
        <button onClick={this.castVote}>Cast Vote</button>
        <button onClick={this.operation1}>Operation1</button>
        <button onClick={this.viewResult}>View Result</button>
      </div>
    );
  }
}

export default Voter;
