import { useMemo } from 'react';

const initialFilter = {
    sort: '',
    search: ''
};
const initArray = [];

export const useFilter = (array = initArray, filter = initialFilter) => {
    const { sort, search } = filter
    //console.log('filter')
    //функция сортировки массива
    const sortedArray = useMemo(() => {
        //console.log('sort')
        if (sort) {
            if (sort === "id") {
                return [...array].sort((a, b) => a[sort] < b[sort])
            }
            return [...array].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return array;
    }, [array, sort]);

    //функция поиска по полю title в сортированном массиве
    const sortedAndSearchedArray = useMemo(() => {
        //console.log('search')
        return sortedArray.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    }, [sortedArray, search]);

    return sortedAndSearchedArray;
}