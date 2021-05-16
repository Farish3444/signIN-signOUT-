import React, { Component } from 'react';
import mainLogo from './iron-box.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
<<<<<<< HEAD
import { Link,Redirect,useHistory } from 'react-router-dom';
=======
import { Link,Redirect } from 'react-router-dom';
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de
import Login1 from './Login1';


class NewUserLogin extends Component {
    state = {
        details:{
            name:'',
            phonenumber:'',
            password:'',
            confirmpassword:''
        }
     }


    onChange=e=>{
        const details ={...this.state.details}
        details[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ details });
        console.log(this.state.details)
<<<<<<< HEAD
        this.ValidationName(false);
=======
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de
    } 


    onSubmti=e=>{
        e.preventDefault();
    }
<<<<<<< HEAD
     
    
    handleHistory(){
    this.props.history.push('/dashBoard');
    }



    onClick(e){
       this.onChange(e);
        this.handleHistory();
    }

    ValidationName(e){
        if (!this.state.details.name){
            return(
            <p style={{color:'red'}}>Enter Username </p>)
        }

    }

=======
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de


    render() { 
        return ( 
            <div>

        <h2 style={{color:'red',marginLeft:'40%'}}>New User Sign In page--2</h2>
        <div className='newlogo'>
         <img  src={mainLogo} style={{width:'8%',marginLeft:300,position:'relative'}}/>
        </div>
        <div className='form'>

        <form onSubmit={this.onChange}>
            <TextField 
                type='text'
                id='name'
                placeholder='Enter your Name'
                name='name'
                value={this.state.details.name}
                onChange={this.onChange}
            />
<<<<<<< HEAD
            
            
=======
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de

            <TextField 
                type='password'
                id='password'
                placeholder='Enter your Password'
                name='password'
                value={this.state.details.password}
                onChange={this.onChange}
                style={{left:40}}
            />
            <br/>
            <TextField 
                type='text'
                id='phonenumber'
                placeholder='Enter Your Phone Number'
                name='phonenumber'
                value={this.state.details.phonenumber}
                onChange={this.onChange}
                style={{margin:35,left:-34}}
            />
            <TextField 
                type='password'
                id='confirmpassword'
                placeholder='Confirm Password'
                name='confirmpassword'
                value={this.state.details.confirmpassword}
                onChange={this.onChange}
                style={{margin:35,left:-65}}
            />


        <Link to="/dashBoard">
            <Button variant='contained' color='primary' style={{margin:50,left:-377,bottom:-69}} onClick={this.onChange}>SIGN-IN</Button>
        </Link>
        </form>

            

        
        </div>
        </div>
         );
    }
}


export default NewUserLogin;