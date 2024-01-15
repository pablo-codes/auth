import https from "../https"

const test = () => {
    return https.get('/')
}
const verify = (data) => {
    return https.post('/verify', data)
}
const check = (data) => {
    return https.post('/check', data)
}
const signup = (data) => {
    return https.post('/signup', data)
}
const signin = (data) => {
    return https.post('/signin', data)
}


const gauth = () => {
    return https.get('/gauth')
}
const gverify = (data) => {
    return https.post(`/api/sessions/oauth/google`, data)
}
const gparams = () => {
    return https.get(`/api/params/oauth/google`)
}


const gitauth = () => {
    return https.get(`/gitauth`)
}
const gitparams = (data) => {
    return https.post(`/api/params/oauth/github/`, data)
}

const xauth = () => {
    return https.get(`/xauth`)
}
const xparams = (data) => {
    return https.post(`/api/params/oauth/x/`, data)
}


const LoginServices = { test, verify, check, signin, signup, gauth, gverify, gparams, gitauth, gitparams, xauth, xparams }
export default LoginServices