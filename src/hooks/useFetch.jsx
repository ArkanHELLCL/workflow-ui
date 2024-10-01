/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [controller, setController] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        const fetchData = async () => {
            try {
                await fetch(url, options, { signal: abortController.signal })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setData(data);                        
                    })
                    .catch(error => {
                        if(error.name === 'AbortError') {
                            console.log('Request was cancelled');
                        }else
                            setError(error)
                    })
                    .finally(() => setLoading(false));
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };        
        fetchData();
        return () => abortController.abort();       //return : funcion de limpieza que se ejecuta cuando el componente se desmonta
    }, []);

    const handleCancelRequest = () => {
        if(controller) {            
            controller.abort();
            setError('Request cancelled');
        }        
    }

    return {
        data: data,
        error: error,
        loading: loading,
        handleCancelRequest
    }
}