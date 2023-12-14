import React,{useState} from "react";
import { Link } from "react-router-dom";

export const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit=async (e)=>{

      e.preventDefault();

      console.log(email,password);

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
      <button type="submit">Login</button>
    </form>
  );
};
