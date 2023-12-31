import axios from 'axios'

export default process.env.NODE_ENV === 'production'
    ? axios.create({
        baseURL: "https://api.francisokpani.com",
        withCredentials: true
    })
    : axios.create({
        baseURL: `http://localhost:2500`,
        withCredentials: true
    });


