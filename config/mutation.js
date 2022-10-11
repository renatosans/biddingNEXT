import axios from 'axios'


const endpoint = '/api/graphql';
const headers = {
    "content-type": "application/json",
}

const mutation = (query) => {
    const graphqlQuery = {
        "mutation": query,
        "variables": {}
    }

    return axios.post(endpoint, graphqlQuery, headers)
}

export { mutation }
