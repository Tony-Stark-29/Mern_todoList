import { useState } from "react";
import { useAuthenticationContext } from "./useAuthenticationContex";



export const useSignUp=()=>{

    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(null);
    const {dispatch}=useAuthenticationContext();

    const signup=async(email,password)=>{

        setIsLoading(true);
        setError(null);

        const res=await fetch('https://mytodo-mernapp-10m1.onrender.com/api/user/signup',{

            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
            
        })

        const json =await res.json();

        if(!res.ok)
        {
            setIsLoading(false);
            setError(json.err)
        }

        if(res.ok)
        {
            localStorage.setItem('user',JSON.stringify(json));

            dispatch({type:'LOGIN',payload:json});
            setIsLoading(false);
        }



    }

    return {signup,isLoading,error}
}