import { useMemo } from 'react';

export const usePagination = (totalPages = 0) => {
    let array = [];
    const pagesArray = useMemo(() => {
        for (let i = 0; i < totalPages; i++) {
            array.push(i + 1)
        }
        return array;
    }, [totalPages]);

    return pagesArray;
}