import axios from 'axios';

export function get(url) {
    return axios.get(url);
}

export function patch(url, data) {
    const instance = axios.create({
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return axios.patch(url, data);
}

export function post(url, data) {
    const instance = axios.create({
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return axios.post(url, data);
}

export function del(url, id) {
    const instance = axios.create({
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return axios.delete(`${url}/${id}`);
}
