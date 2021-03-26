import { elements } from './cons';
import axios from "axios";
const CommonService = {
    getHttp,
    postHttp,
    deleteHttp,
    putHttp,
    getQueryParamFromUrl,
    invalidSession
}
var api_url = elements.API_ENDPOINT;

function getHttp(dataUrl, Param, token) {

    return axios.get(api_url + dataUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + (token || localStorage.getItem("token"))
        }, params: Param
    }).then(handleResponse)

}

function postHttp(dataUrl, data, token) {

    return axios.post(api_url + dataUrl, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + (token || localStorage.getItem("token"))
        }
    })
        .then(handleResponse)


}

function deleteHttp(dataUrl, data, token) {
    console.log(data)
    return axios.delete(api_url + dataUrl,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + (token || localStorage.getItem("token"))
            }
            ,

            data: data
        }
    )
        .then(handleResponse)

}

function putHttp(dataUrl, data) {
    return axios.put(api_url + dataUrl, data).then(handleResponse)

}

function handleResponse(response) {

    if (response !== null || response !== undefined) {

        return response;
    } else {
        const error = "error occoured"

        return Promise.reject(error);
    }
}
function getQueryParamFromUrl(variable) {

    var query = window.location.search.substring(1);
    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");

        if (pair[0] === variable) { return pair[1]; }
    }
    return (false);
}
function invalidSession() {

    localStorage.removeItem('token');
    localStorage.removeItem('userName')
    localStorage.removeItem('setupTime')

    window.location.replace(`${window.location.origin}/login`);


}
export default CommonService;