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
        { id: '1', value: 'male', name: 'male' },
        { id: '2', value: 'female', name: 'female' },
        { id: '3', value: 'other', name: 'other' },
    ],
    langOptions: [
        { id: '1', value: 'JavaScript', name: 'JavaScript' },
        { id: '2', value: 'Java', name: 'Java' },
        { id: '3', value: 'Pyton', name: 'Pyton' },
    ],
    sortOptions: [
        { id: '1', value: 'postDate', name: 'by date' },
        { id: '2', value: 'title', name: 'by title' },
        { id: '3', value: 'language', name: 'by language' }
    ]
}
  //создание контекста для данных 
export const DataContext = React.createContext(data);

export function DataContextProvider({ children }) {
    //создание состояния для постов
    const [posts, setPosts] = React.useState(data.posts);

    //функция добавления постов
    const addPost = (post) => {
        setPosts([...posts, post])
    };
    //функция удаления постов
    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    };
    //функция сортировки постов
    const sortPosts = (sort) => {
        console.log('sorted');
        if (sort) {
            setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
        }
        return posts;
    };

    return (
        <DataContext.Provider
            value={{
                posts,
                deletePost,
                addPost,
                sortPosts,
                genderItems: data.genderItems,
                langOptions: data.langOptions,
                sortOptions: data.sortOptions
            }}>
            {children}
        </DataContext.Provider>
    )
}


