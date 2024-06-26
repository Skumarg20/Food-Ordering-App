// import React, { useCallback, useEffect, useState } from 'react'
// async function sendHttpRequest(url,config){
//     const res=await fetch(url,config);
//     const resData=await res.json();
//     if(!res.ok){
//         throw new Error(
//             resData.message || 'Something went wrong,failed to send request.'
//         );

//     }
//     return resData;
// }
// export default function useHttp(url,config,initialData) {
//     const [data,setData]=useState(initialData);
//     const [isLoading,setIsLoading]=useState(false);
//    const [error,setError]= useState();
//  const sendRequest=useCallback( async function sendRequest(){
//        try {
//         const resData=await sendHttpRequest(url,config);
//         setData(resData);
//        } catch (error) {
//         setError(error.message || 'Something went wrong!');
//        } 
//        setIsLoading(false);
//     },[url,config]
// );
//     useEffect(()=>{
//         if(config && (config.method==='GET' || config.method) || !config){
//              sendRequest();
//         }
       
//     },[sendRequest,config]);
//   return {
//     data,
//     isLoading,
//     error,
//     sendRequest
   
//   }
// }

import React, { useCallback, useEffect, useState } from 'react';

async function sendHttpRequest(url, config) {
    const res = await fetch(url, config);
    const resData = await res.json();
    if (!res.ok) {
        throw new Error(
            resData.message || 'Something went wrong, failed to send request.'
        );
    }
    return resData;
}

export default function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const resData = await sendHttpRequest(url, config);
            setData(resData);
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [url, config]);

    useEffect(() => {
        if ((config && (config.method === 'GET' || config.method)) || !config) {
            sendRequest();
        }
    }, [sendRequest, config]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
    };
}
