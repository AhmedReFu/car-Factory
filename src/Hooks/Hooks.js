import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Car Factory`
    },[title])
};


export default useTitle;