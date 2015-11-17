import React from 'react';
import ReactDOM from 'react-dom';

import UserInfoList from './UserInfoList';
import JoinInfo from './joininfo';


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
      <FollowJoin users={this.state.users} />
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


export default UserInfomation;
export default JointJoin;
