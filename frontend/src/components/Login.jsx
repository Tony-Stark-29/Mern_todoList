import React,{useState} from "react";
 
 
import { useLogin } from "../hooks/useLogin";

export const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {login,isLoading,error}=useLogin();
  
  const handleSubmit=async (e)=>{

       e.preventDefault();

       await login(email,password);

  }
  return (
    <form   className="container form_shadow col-10  col-lg-4 login_form   py-5 px-3 my-5" onSubmit={handleSubmit}>
      <h3>Login</h3>
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
      <button className="btn btn-success" type="submit" disabled={isLoading}>Login</button>
      {error && <div className="text-danger my-2">{error}</div> }
    </form>
  );
};
