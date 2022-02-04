import axios from 'axios';

export class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
    static async getPostId(id = 1) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response
    }
}

export const getTotalPages = (totalCount, limit ) => {
    const pages = Math.ceil( totalCount / limit )
    return pages
};