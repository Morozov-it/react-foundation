import React from 'react';

const data = {
    posts: [
        {
            id: 1,
            title: 'New post',
            description: 'Those of us who live in Europe new post-communist democracies experienced similar political deals when we lived behind the former Iron Curtain',
            gender: 'male',
            language: 'JavaScript',
            isCompleted: false,
            postDate: Date(),
        },
        {
            id: 2,
            title: 'Old post',
            description: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.',
            gender: 'female',
            language: 'Java',
            isCompleted: false,
            postDate: Date(),
        }
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


