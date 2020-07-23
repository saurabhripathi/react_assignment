import React  from 'react'
import classes from '../login/login.css'

const login = (props)=>{
    console.log(props)

    return(
        <div className = {classes.Container}>
            <div style={{margin:'auto',
         display:'block'}}>
            <label>
                Username:
            </label>
            <input  onChange= {props.userNameChanged} className = {classes.Input}
             type= "text">
            </input>
            </div>
            <div style={{margin:'auto',
            display:'block',
            marginTop:'10px'
        }}>
          <label>
                Password:
            </label>
            <input className = {classes.Input}
            onChange= {(event)=>{return props.passwordChanged(event)}}   type= "password">
            </input>
          </div>
            
            <button 
             onClick = {props.click} className = {classes.Button}>
                Login
            </button>

        </div>
    )
    


}

export default login