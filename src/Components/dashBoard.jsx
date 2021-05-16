import React, { Component } from 'react';
<<<<<<< HEAD
import ReUseInput from './ReUse';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';


class dashBoard extends Component {
    state = { 
        name:'',
     }

     handleChange=e=>{
         const details = {...this.state.name}
     }

    
    render() { 
        return (
            <React.Fragment>

            <div className="dashBoard">
        <h1>WELCOME TO DASHBOARD</h1>
        <br/>
        </div>
        <ReUseInput 
            placeholder='Enter your User-Id'
            style={{marginLeft:'40%',width:'22%'}}
            name='name'
        />
        <br/>
        <label style={{marginLeft:'40%'}}>Select your Dress for cleaning</label>
        <br/>
        <select style={{width:'10%',textAlign:'center',justifyContent:'center',marginLeft:'40%'}}>
        <option>Shirt</option>
        <option>Pant</option>
        <option>other</option>
        </select>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <br/>
        <button style={{marginLeft:'42%'}} onClick={()=>{this.props.history.push('/')}}>back to Home</button>
            </React.Fragment>
=======


class dashBoard extends Component {
    state = {  }
    render() { 
        return (
            <div className="dashBoard">
        <h1>WELCOME TO DASHBOARD</h1>
            </div>
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de
          );
    }
}



export default dashBoard;


// new Feature - the dashboard
