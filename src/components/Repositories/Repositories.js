import "./Repositories.css";
import React from 'react'
import Repo from "./Repo";



/**
 *Functional Component for the presentation of a single repository.
 *
 * @callback
 * @returns {React.ElementType}

 */

/**
* @param {Object} props
* @param {Array<Object>} props.repos
* @param {Object} props.user
*/

const Repositories = ({ repos, user }) => (
    <section className="repositories">
      {repos.map((repo) => (
        <Repo key={repo.id} repo={repo} user={user} />
      ))}
    </section>
  );


export default Repositories;
