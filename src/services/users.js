import request from '../utils/request';
// request(url, options)
import { PAGE_SIZE } from '../constants';
// 分页 size 3


// http://localhost:8000/sockjs-node/info?t=1499839053437
// GET
// ??? where to get the datas ??? 

export function fetch({ page }) {
    // http://localhost:8000/users?page=2
    // http://localhost:8000/api/users?_page=2&_limit=3
    // GET
    return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}


// http://localhost:8000/api/users/4
// DELETE
export function remove(id) {
    return request(`/api/users/${id}`, {
        method: 'DELETE'
    });
}

// http://localhost:8000/api/users/4
// PATCH
export function patch(id, values) {
    return request(`/api/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(values)
    });
}

// http://localhost:8000/api/users/4
// POST
export function create(values) {
    return request('/api/users', {
        method: 'POST',
        body: JSON.stringify(values)
    });
}
