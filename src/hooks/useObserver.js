import React from 'react';

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = React.useRef();
    //получение наблюдателя для скролла новых постов
    React.useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        var cb = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                console.log('intersection')
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])
}