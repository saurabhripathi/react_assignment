import Login from '../../components/login/login'
import React , {Component} from 'react'
import axios from 'axios'
 
import Aux from '../../hoc/Aux'
import  Users from '../../components/Users/Users'
import {Route} from 'react-router-dom'

class Wrapper extends Component{
    state={
        password: '',
        userName: '',
        userLists: []
    }

    buttonDisabledCheck = ()=>{
        let flag =true
        const tempState = {...this.state}
        for(let x of Object.keys(this.state)){
            if(tempState.x===''){
                flag =false
            }

        }
        return flag
        

    }

    passwordChangedFn = (event)=>{
        event.stopPropagation();
        this.setState({password:event.target.value})
    }

    userNameChangedFn =(event)=>{
        this.setState({userName:event.target.value})
        console.log(this.state)
    }

    clickOnLogin = ()=>{
        const cloneState = {...this.state}
        const obj ={
            username: cloneState.userName,
            password : cloneState.password
        }
        axios.get('https://reqres.in/api/login').
        then((response)=>{
            this.setState({userLists:response.data})
            this.props.history.push('/users')
            console.log(this.props)
        })
            }

    render(){
        return (<div>

{ <Login  click = {this.clickOnLogin} disable = {this.buttonDisabledCheck}
 passwordChanged= {this.passwordChangedFn}
       userNameChanged = {this.userNameChangedFn}
 >  
</Login> }
{/* <Users/> */}
        </div>)
    }

  
    

}

export default Wrapper