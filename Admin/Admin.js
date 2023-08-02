import React from 'react';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      voterID: null,
      voterNo: null,
    };
  }

  submitReport = () => {
    // TODO implement here
  }

  render() {
    return (
      <div>
        
        <p>Voter ID: {this.state.voterID}</p>
        <p>Voter No: {this.state.voterNo}</p>
        <button onClick={this.submitReport}>Submit Report</button>
      </div>
    );
  }
}

export default Admin;