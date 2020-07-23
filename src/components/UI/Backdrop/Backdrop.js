import React from 'react';


const backdrop = (props)=>{
    let projection = (<div></div>)
    if(props.show){

        projection = (<div onClick = {props.click}
            onChange = {props.change}
            style = {{'width': '100%',
               'position': 'fixed',
               zIndex: 12,
               'height': '100%',
               'opacity' :'0.5',
               'background-color':'black'
            }}> gggg</div>)
    }

    
    return(  
        projection
    )

}

export default backdrop