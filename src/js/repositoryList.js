import React from 'react';
import jQuery from 'jquery';

import RepoInfo from './repositoryinfo';

class RepoList  extends React.Component {
  render () {
    console.log(this.props.repos);
    let repos = this.props.repos.map(repo => {
      return (<RepoInfo key={repo.id} repo={repo} />)
    });
    return (
      <div>
        {repos}
      </div>
    )
  }
}

export default RepoList ;
