import React , {Component} from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios'

class Users extends Component{
    state = {
        usersList : [],
        isLoading: false
    }

     columns = [
        {
          name: 'Email',
          selector: 'email',
        },
        {
          name: 'First Name',
          selector: 'first_name',
        },
        {
            name: 'Last Name',
            selector: 'last_name',
          },
         
      ];
    pageChange = (event,totalRows)=>{
        
        axios.get('https://reqres.in/api/users',{params:{page:event}}).
        then((res)=>{
            console.log(event)
            const tempState={...this.state}
            let newArray=res.data.data
            console.log(newArray)
            this.setState({usersList:newArray})
        })
    }
    componentDidMount(){
        axios.get('https://reqres.in/api/users').
        then((res)=>{
            const tempState={...this.state}
            let newArray=tempState.usersList.concat(res.data.data)
            this.setState({usersList:newArray})
            
        })


    }
    rowClicked = (event)=>{
        this.props.history.push({pathname : '/users/'+event.id})

    }
    render(){
    
        return (
            <DataTable 
            pointerOnHover ={true}
            onRowClicked = {this.rowClicked}
            onChangePage = {this.pageChange}
            title="Dash Board"
            data = {this.state.usersList}
            columns={this.columns}
            paginationServer = {true}
            highlightOnHover = {true}
            pagination = {true}
            theme="solarized"
            paginationDefaultPage = {1}
            paginationPerPage = {5}
            paginationRowsPerPageOptions = {[6]}
          />
        )
    }
    
}

export default Users