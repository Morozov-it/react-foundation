import axios from 'axios';
let cancelToken;

export class PostService {
    static async getAll(limit = 10, page = 1, { sort = '', search = '' }) {
        if (cancelToken) {
            cancelToken.cancel('cancelToken')
        }
        cancelToken = axios.CancelToken.source();
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            cancelToken: cancelToken.token,
            params: {
                _limit: limit,
                _page: page,
                _sort: sort,
                q: search
            }
        });
        return response
    }
    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
    }
    static async getCommentsById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}

export const getTotalPages = (totalCount, limit ) => {
    const pages = Math.ceil( totalCount / limit )
    return pages
};