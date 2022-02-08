import axios from 'axios';
//let cancelToken;

export class PostService {
    static async getAll(limit = 10, page = 1 ) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,
            }
        });
        return response
    }
    // static async search(search) {
    //     // if (cancelToken) {
    //     //     cancelToken.cancel('cancelToken')
    //     // }
    //     // cancelToken = axios.CancelToken.source();
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //         //cancelToken: cancelToken.token,
    //         params: {
    //             _page: 1,
    //             q: search
    //         }
    //     });
    //     return response
    // }
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