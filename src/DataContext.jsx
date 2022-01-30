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
    ]
}
  //создание контекста для данных 
export const DataContext = React.createContext(data);

export function DataContextProvider({children}) {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}


