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
      <form  className="container form_shadow col-10  col-lg-4 login_form   py-5 px-3 my-5"  onSubmit={handleSubmit}>
        <h3>Signup</h3>
        <input 
        className="form-control my-3"
        type="email" 
        placeholder="Email Id" 
        onChange={(e)=>setEmail(e.target.value)}/>
        <input 
        className="form-control my-3"
        type="password" 
        placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)}/>
        <button className={isLoading ? "btn btn-success disabled" :"btn btn-success "} disabled={isLoading} type="submit">SignUp</button>
        {error && <div className='text-danger'>{error}</div> }
      </form>
    );
}

 