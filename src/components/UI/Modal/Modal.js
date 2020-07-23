import {Dialog} from 'primereact/dialog';
import React,{useState,useEffect,Component} from 'react';
import classes  from './Modal.css';

class Modal extends Component{
    constructor(props){
        super(props)
        this.state ={
            visible :this.props.show,
            click : false       }



    

    }
   

    // static getDerivedStateFromProps(props, state){
    //     console.log(props)
    //     console.log(state)
    //     this.setState({visible:this.props.show})
    //     return state
    // }

    componentDidMount(){
        console.log("inside")

    }

    componentDidUpdate(prevProps, prevState, snapshot){
    

        if((this.props.show!==this.state.visible) && this.state.click===false ) {
            this.setState({visible:this.props.show})

        }
        else if(this.state.click){

            this.setState({visible:false})



        }


        

    }


    click = ()=>{
        console.log("123")
        this.setState({click:true})


    }

    render(){
        if(this.state.visible){
            // let render =  <div>asd</div>++
            // if(this.state.visible===true){
            //     render = <div>asd</div>
            // }
            console.log(this.props)
            console.log(this.state.visible)
            return( 
                [
                  
                <div className = {classes.Modal}>
                    {this.props.children}
                </div>
                ]
                  
           
         
        )
            
        }

        else{
            return( 
                <div></div>
    
                // <Dialog  modal = {true}
                // closable={true} header="Godfather I" visible={this.state.visible} style={{width: '50vw'}}  onHide={this.props.hide}>
            // </Dialog>
         
        )

        }

        }
       
}


export default Modal