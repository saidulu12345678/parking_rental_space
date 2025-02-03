import { useState } from "react";

const Login = ()=>{
    const [state,setState] = useState({
        username : "",
        password:"",

    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(username,password)
    }
    const handleChange = (e)=>{
        const {name,value} = e.target 
        // console.log("User name is",value);
        
        setState(
            (prevState)=>
            ({
                ...prevState,
                [name] : value
                
            })
        )
        // console.log("state after updating the value is ",username,password)
    }
    
    const {username,password} = state;
    return(
        
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" >UserName</label>
                <input type="text" placeholder="UserName" id="username" name="username" value={username} onChange={handleChange}/>
                <label htmlFor="password"></label>
                <input type="text" placeholder="Password" id="password" name="password" value={password} onChange={handleChange}/>
                <input type="submit" value="submit" />

            </form>
        </>
    )
}

export default Login;