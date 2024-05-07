import { useState, useEffect } from 'react';
const useFetchData = (url, cb) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const result = res.json();
            if (cb) {
                setData(cb(result));
            } else {
                setData(result);
            }
            setError('');
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(true);
        }
    }
    return {
        data, 
        loading,
        error
    }
}
export default useFetchData;