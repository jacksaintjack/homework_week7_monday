import React from 'react'

class UserInfoList extends React.Component {
  render () {
    return (
      <span>
        <span id="usersFullName">{this.props.users.name}</span>
        <span id="userName">{this.props.users.login}</span>
      </span>
    )
  }
}

export default UserInfoList;
