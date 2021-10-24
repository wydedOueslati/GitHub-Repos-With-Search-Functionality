import React from 'react'
import "./Repositories.css";

/**
 *Functional Component for the presentation of a single repository.
 *
 * @callback
 * @returns {React.ElementType}

 */

/**
* @param {Object} props
* @param {String} props.repos.full_name
* @param {String} props.repos.description
* @param {String} props.repo.stargazers_count
* @param {String} props.repo.forks_count
*/

const Repo=({ repo, user }) => (
<div className="repo">
    <div>
      <div className="title">
        <i className="fa fa-book pe-1" />
        <a
          href={`https://github.com/${repo.full_name}`}
          target="_blank"
          rel="noopener norefferer"
        >
          <span>{repo.name}</span>
        </a>
      </div>
      <span className="description">{repo.description}</span>
    </div>
    <div className="d-flex">
      <div className="items">
        <i className="fa fa-code pe-1" />
        <span>{repo.language}</span>
      </div>
      <div className="items">
        <i className="fa fa-star pe-1" />
        <span>{repo.stargazers_count}</span>
      </div>
      <div className="items">
        <i className="fa fa-code-fork pe-1" />
        <span>{repo.forks_count}</span>
      </div>
    </div>
  </div> 
);
    


export default Repo
