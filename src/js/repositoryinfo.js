import React from 'react'

class RepoInfo extends React.Component {
  render () {
    return(
      <div id="projectBox">
        <li>
          <a href ="#"> {this.props.repo.name}  </a>
          <li id="stats"> {this.props.repo.language}
            <span className="octicon octicon-star starIcon"></span>
            <span> {this.props.repo.stargazers}</span>
            <span className="octicon octicon-git-branch branchIcon"></span>
            <span> {this.props.repo.forks}</span>
          </li>
          <span className="updatedTime"> Updated {moment(" " +this.props.repo.updated_at).fromNow()}</span>
        </li>
    </div>
  );
}
}

export default RepoInfo ;
