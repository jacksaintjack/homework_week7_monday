import React from 'react';
import jQuery from 'jquery';


class UserLoginName extends React.component{
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       users: {}
//     }
//   }
//
//   componentDidMount() {
//   $.ajax("https://api.github.com/users/jacksaintjack")
//   .then( response =>{
//     this.setState({
//       users: response
//     });
//   })
// }

  render (){
    let users = this.props.users(user => {
        return <UserLoginName name = {user.name},
                              login = {user.login},
                              company = {user.company},
                              location = {user.location},
                              created = {user.created_at},
                              followers = {user.followers},
                              following = {user.following},
                              followersUrl = {user.followers_url},
                              followingUrl = {user.following_url }
                              />
    });
    return (
      <div>
        {users}
      </div>
    )
  }
}

export default UserLoginName;
