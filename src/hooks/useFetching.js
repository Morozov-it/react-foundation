import { useState } from "react"

//хук для индикации состояния загрузки
export const useFetching = (callback) => {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState('');
    const fetching = async (...args) => {
        try {
            setIsFetching(true);
            await callback(...args);
        } catch (e) {
            if (e.message === 'cancelToken') {
                setError('')
            } else setError(e.message);
        } finally {
            setIsFetching(false);
        }
    }
    return [fetching, isFetching, error]
}