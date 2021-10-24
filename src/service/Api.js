import axios from 'axios';

const URL_BASE = "https://api.github.com"

/**
 * asynchronous function to get data about the user from the GIT API
 *
 * 
 * @return  { AxiosResponse<unknown, any>}        response of axios(user data)
 */

export async function getUserData(userName) {
    const response = await axios.get(`${URL_BASE}/users/${userName}`);
    console.log(response);
    return response
}

/**
 * asynchronous function to get data about the user's list of repositories from the GIT API
 * @return  { AxiosResponse<unknown, any>}        response of axios(user's repositories data)
 */

export async function getUserRepositories(userName) {
    const repositories = await axios.get(`${URL_BASE}/users/${userName}/repos`);
    return repositories
}