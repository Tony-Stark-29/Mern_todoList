import React, { useState } from 'react';
import { useSignUp } from '../hooks/useSignUp';


export const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {signup,isLoading,error}=useSignUp();
  
    const handleSubmit=async (e)=>{

        e.preventDefault();

        await signup(email,password);

    }
    return (
      <form   className="login_form" onSubmit={handleSubmit}>
        <input 
        type="email" 
        placeholder="Email Id" 
        onChange={(e)=>setEmail(e.target.value)}/>
        <input 
        type="password" 
        placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)}/>
        <button disabled={isLoading} type="submit">SignUp</button>
        {error && <div>{error}</div> }
      </form>
    );
}

export default SignUp