import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
const user = (props) => {
    let details = null
    const [state, stateFn] = useState({ userObj: null })
    console.log(props)
    const id = parseInt(props.match.params.id)
    useEffect(() => {
        axios.get('https://reqres.in/api/users/' + id).then((res) => {
            console.log(res)
            details = res.data.data
            stateFn({ userObj: details })

        })

    }, [])


    let temp = (<div style={{width:'100%',
    textAlign:'center',
    margin:'auto',
    fontSize:'800'
}}>Loading...</div>)
    if (state.userObj) {
      
        temp = <div style = {{border:'1px solid #80808087',
        margin:'auto',
        width:'30%',
        marginTop:'51px',
        borderRadius:'5px'}}>
            <div style={{ display: 'flex',flexDirection:'column' ,
            height:'50vh',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#87ceeb47'}}>
                <div>
                    <img src={state.userObj.avatar} style= {{borderRadius:'62px'}}></img>
                </div>
                <div>
                    Mr. {state.userObj.first_name} {state.userObj.last_name}
                </div>
                <div>
            Email:    {state.userObj.email}
                </div>


            </div>
            
        </div>

    }

    return (
        temp


    )

}

export default user 