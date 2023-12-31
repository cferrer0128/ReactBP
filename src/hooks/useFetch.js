import { useState, useEffect } from "react";
import apiService from "../services/apiService";

function useFetch(url,options){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const result = await apiService.fetchUsers();           
            setData(result);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false); }
    }; fetchData();
    },[url,options]);
    return { data, error, isLoading };
}
export default useFetch;
