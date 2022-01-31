import React from 'react';

const data = {
    posts: [
        {
            id: 1,
            title: 'JavaScript',
            body: 'JavaScript is the most usefull language'
        },
        {
            id: 2,
            title: 'Java',
            body: 'Java is the most complex language'
        },
        {
            id: 3,
            title: 'Pyton',
            body: 'Pyton is the most hipe language'
        },
    ],
    genderItems: [
        { id: 'male', title: 'male' },
        { id: 'female', title: 'female' },
        { id: 'other', title: 'other' },
    ],
    options: [
        { id: '1', title: 'JavaScript' },
        { id: '2', title: 'Java' },
        { id: '3', title: 'Pyton' },
    ],
}
  //создание контекста для данных 
export const DataContext = React.createContext(data);

export function DataContextProvider({ children }) {
    //создание состояния для постов
    const [posts, setPosts] = React.useState(data.posts);

    //функция удаления постов
    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    };
    //функция добавления постов
    const addPost = (post) => {
        setPosts((prevPosts) => ([
            ...prevPosts, post
        ]))
    }

    return (
        <DataContext.Provider
            value={{
                posts,
                deletePost,
                addPost,
                genderItems: data.genderItems,
                options: data.options
            }}>
            {children}
        </DataContext.Provider>
    )
}


