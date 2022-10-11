import axios from 'axios'


const endpoint = '/api/graphql';
const headers = {
    "content-type": "application/json",
}

const mutation = (operation, query) => {
    const graphqlQuery = {
        "operationName": operation,
        "mutation": query,
        "variables": {}
    }

    return axios.post(endpoint, graphqlQuery, headers)
}

export { mutation }
