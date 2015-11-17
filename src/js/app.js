import React from 'react';
import ReactDOM from 'react-dom';

import UserInfoList from './UserInfoList';

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
ReactDOM.render(
  <UserInfomation/>,
  document.getElementById('userInfo')
);
export default UserInfomation;
