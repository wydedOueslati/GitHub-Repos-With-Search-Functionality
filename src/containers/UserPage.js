import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Navtabs from '../components/NavTabs/NavTabs';
import Repositories from '../components/Repositories/Repositories';
import UserInfo from '../components/UserInfo/UserInfo';
import Loading from "../components/Loading/Loading";
import { useState, useEffect, useRef } from "react";
import { getUserData, getUserRepositories } from "../service/Api";
import "./UserPage.css";



/**
 *Functional Component for the user page.
 *
 * @callback
 * @returns {React.ElementType}

 */

/**
* @param {Object} match
* @param {String}     inputEl     value to get the input text.
* @param {Object}     user     constant to get the user data.
* @param {Object}     repositories     constant to get the user's repositories data.
* @param {String}     searchTerm     contains the searched term.
* @param {Array<Object>}     searchResults     value to save the filtered repositories.

*/

function UserPage({match}) {
  const inputEl= useRef("");
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState([]);
  const userNameParams = match.params.userName;
  const [searchTerm , setSearchTearm]= useState("");
  const [searchResults,setSearchResults]=useState([]);
 
  
  useEffect(() => {
    fetchUser(); 
    fetchRepositories();
  }, []);

  async function fetchUser() {
    const { data } = await getUserData(userNameParams);
    setUser(data);
  }
  async function fetchRepositories() {
    const { data } = await getUserRepositories(userNameParams);
    setRepositories(data);
  }
  
  /**
 * function to filter the repositories depending on the searchTerm
 * @param   {Object} repo the current repository mapped
 *
 * @return  {Array<Object>}     the result of the Filter applied on all repositories.
 */
  const searchHandler = () => {
    setSearchTearm(inputEl.current.value);
    if( searchTerm != ""){
      const newReposList= repositories.filter((repo)=>{
        return repo.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newReposList);
    }
    else{
      setSearchResults(repositories);
    }
  }
  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />
          <div className="container">
            <UserInfo user={user} />
            <Navtabs repos={repositories} user={user} />
            <div className="input-group py-2">
            <input className="form-control border-end-0 border rounded-pill" ref= {inputEl} type="text" value={searchTerm} placeholder="Find a repository..." onChange={ searchHandler }/>
            <span className="input-group-append pt-1 ps-2">
            <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            </div>
            { searchTerm!="" ? (
              <div>
               <span className="result"><span className="bold"> {searchResults.length} </span>results for repositories matching <span className="bold">{searchTerm}</span></span>
              </div>
            ):<div></div>
            }
            <Repositories repos={searchTerm.length < 1 ? repositories : searchResults} user={user} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UserPage;
