import { useState } from "react"

//хук для индикации состояния загрузки
export const useFetching = (callback) => {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState('');
    const fetching = async () => {
        try {
            setIsFetching(true);
            await callback();
        } catch (e) {
            setError(e.message);
        } finally {
            setIsFetching(false);
        }
    }
    return [fetching, isFetching, error]
}