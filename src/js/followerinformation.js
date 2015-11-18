import React from 'react'

class FollowerView extends React.Component {
  render () {
    return (
      <section>

        <span id="followers">{this.props.users.followers}</span> <br />
          <a id="followerLink" href ='#'>Follower </a>

        <span id="starred">0 </span> <br />
          <a id="starredLink"href="https://api.github.com/users/jacksaintjack/starred">Starred</a>

        <span id="following">{this.props.users.following}</span><br />
          <a id="followingLink" href ='#'>Following </a>

      </section>
    )
  }
}

export default FollowerView;
