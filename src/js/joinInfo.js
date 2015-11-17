import React from 'react'

class JoinInfo extends React.Component {
  render () {
    return (
      <span>
        <span>
          <span className="octicon octicon-organization octi"></span>
            <span id ="company">{this.props.users.company}</span>
        </span><br />
        <span>
          <span className="octicon octicon-location octi"></span>
            <span id="location">{this.props.users.location}</span>
        </span><br />
        <span>
          <span className="octicon octicon-clock octi"></span>
          <span> Joined on</span>
            <span id="dateJoined">{this.props.users.created_at}</span>
        </span>
      </span>
    )
  }
}

export default JoinInfo;
