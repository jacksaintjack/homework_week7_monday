import React from 'react';
import ReactDOM from 'react-dom';

import UserInfoList from './UserInfoList';
import JoinInfo from './joininfo';
import FollowerView from './followerinformation';
import RepoList from './repositoryList';

//For UserInformation
class UserInfomation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    }
  }

  componentDidMount() {
  $.ajax("https://api.github.com/users/jacksaintjack")
  .then( response =>{
    this.setState({
      users: response
    });
  })
}
  render(){
    return(
      <UserInfoList users={this.state.users} />
    )
  }
}

//Joint information
class JointJoin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    }
  }

  componentDidMount() {
  $.ajax("https://api.github.com/users/jacksaintjack")
  .then( response =>{
    this.setState({
      users: response
    });
  })
}
  render(){
    return(
      <JoinInfo users={this.state.users} />
    )
  }
}

//Follower Information
class FollowJoin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    }
  }

  componentDidMount() {
  $.ajax("https://api.github.com/users/jacksaintjack")
  .then( response =>{
    this.setState({
      users: response
    });
  })
}
  render(){
    return(
      <FollowerView users={this.state.users} />
    )
  }
}

class RepoJoin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }

  componentDidMount() {
  $.ajax("https://api.github.com/users/jacksaintjack/repos")
  .then( response =>{
    console.log(response);
    this.setState({
      repos: response
    });
  })
}
  render(){
    return(
      <RepoList repos={this.state.repos} />
    )
  }
}

//Rendering the Classes
ReactDOM.render(
  <UserInfomation/>,
  document.getElementById('userInfo')
);

ReactDOM.render(
  <JointJoin/>,
  document.getElementById('userJoinInformation')
);

ReactDOM.render(
  <FollowJoin/>,
  document.getElementById('stats')
);

ReactDOM.render(
  <RepoJoin/>,
  document.getElementById('projectArea')
);

export default UserInfomation;
export default JointJoin;
export default FollowJoin;
export default RepoJoin;
