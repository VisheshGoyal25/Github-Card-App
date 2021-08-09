import React,{useState} from "react"
import User from './User.js'
import axios from 'axios';
import './App.css'
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
toast.configure()
function App() {
  const [data,setData]= useState([])
  const [count,setCount]= useState(0)
  const [usernames,setUsers]= useState([""])
  function checkmatch(user) {
    return user===document.getElementById("name").value;
  }
 const fetch_data=async(e)=>{
  e.preventDefault()
  const user=document.getElementById("name").value;
 const check= usernames.findIndex(checkmatch);
  if(check!==-1)  
  { 
    
    toast.info('The user already exists!',{  
      position: toast.POSITION.BOTTOM_RIGHT})   
          return 
  }  
  setUsers([user,...usernames])
  try{
      const api=await axios.get(`https://api.github.com/users/${user}`)
    const d=api.data
      const repo =await axios.get(d.repos_url)         
      const arr=data;
      const temp={
        id:count,
        dp:d.avatar_url,
        name:d.name,
        followers:d.followers,
        following: d.following,
        username:d.login,
        repos:repo.data,
      }
      arr.unshift(temp)
      setData(arr)
      setCount(count+1)

    }
    catch(error){      
      toast.error('User doesnot exit or Api limit exceded',{  
        position: toast.POSITION.BOTTOM_RIGHT})
     }
    }
  return (
    <div> 
        <nav className="navbar navbar-light cyan-color">
          <div className="container-fluid">
            <a className="navbar-brand head">Github-Card-App</a>
            <form className="d-flex " onSubmit={fetch_data} >
              <input className="form-control me-2 form"  type="text" placeholder="Search Github User" aria-label="Search" id="name" required></input>
              <button className="btn btn-outline-success btn-color" type="Submit" onSubmit={fetch_data} id="type">Fetch</button>
            </form>
          </div>
        </nav>
        {data.length!==0?data.map((d)=><User data={d} key={d.id}/>):<div className="no-user">No User Searched Yet</div>}

    </div>
  );
}

export default App;
