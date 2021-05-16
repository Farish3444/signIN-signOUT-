import React, { Component } from 'react';
import mainLogo from './iron-box.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import moduleName from 'material-ui/styles/MuiThemeProvider';
<<<<<<< HEAD
import { Link,Redirect,Route, useHistory } from 'react-router-dom';
import notFound from './notFound';
import NewUserLogin from './newUserLogin';
import ReUseInput from './ReUse';
import Joi from 'joi-browser';
=======
import { Link,Redirect,Route } from 'react-router-dom';
import notFound from './notFound';
import NewUserLogin from './newUserLogin';
import ReUseInput from './ReUse';
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de

// Styling Area
const Form = {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:0,
          marginBottom:0,
          margin:3    
}

const Inputs = {
          display:'flex',
          justifyContent: "center",
          alignItems: "center",
          marginTop:0,
          marginBottom:0           
}

const Alert = {
    fontSize:'10',
    color:'red',
    textAlign:'center'
}


class Login1 extends Component {
    state = {
        account:{
        email:"",
        password:""
        },
        errors:{}
      }

<<<<<<< HEAD
      schema = {
          username:Joi.string().required(),
          password:Joi.string().required()
      }

      validate = () =>{

        const result = Joi.validate(this.state.account,this.schema, {abortEarly:false});
        console.log(result);


=======
      validate = () =>{
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de
        const errors={};
      const { account } = this.state;
      
      if (account.email.trim()=== "")
      errors.email = 'Email Id required';

      if(account.password.trim()==="")
      errors.password = 'password is required bruh';

      return Object.keys(errors).length === 0 ? null : errors;

    };


    validateProperty=(input)=>{
        if(input.name === 'username'){
            if (input.value.trim()==='') return 'username is required';
        }

        if (input.name === 'password'){
            if (input.value.trim() === '') return 'password is required';
        }
    }

      handleChange=({ currentTarget : input }) => {

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

         const account = {...this.state.account}
         account[input.name] = input.value;
         this.setState({ account, errors });
      }

      handleSubmit=e=>{
          e.preventDefault();        
          const errors = this.validate();
          this.setState({ errors: errors || {} });
          if (errors) return;
          console.log('submitted form')
      }

<<<<<<< HEAD
      handleHistory=()=>{
          if (this.validate === true) { return this.props.history.push('/dashboard')}
      }

=======
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de
    render() {
        const {account, errors } = this.state;
        return ( 
            <div>

            <h1 style={Form}>Login component -- 1</h1>
             <img  src={mainLogo} style={{backgroundColor:'lightcoral',width:'8%'}}/>
           
{/* RESUABLE INPUTS */}
    <form onSubmit={this.handleSubmit}>

            <ReUseInput 
                type='text'
                name='email'
                placeholder='enter email'
                style={Inputs}
                value={account.email}
                error={errors.email}
                onChange={this.handleChange}
            />
            {/* <div style={Alert}>{this.state.emailError}</div> */}
            <br/>
            <ReUseInput 
                type='password'
                name='password'
                placeholder='enter ur  password'
                style={Inputs}
                value={account.password}
                error={errors.password}
                onChange={this.handleChange}
            />
            {/* <div style={Alert}>{this.state.passwordError}</div> */}

<br/>

{/* <Link to="/dashBoard"> */}
<<<<<<< HEAD
<Button variant='contained' color='secondary' type='submit' style={Form} onClick={()=>{this.props.history.push('/dashBoard')}} >
=======
<Button variant='contained' color='secondary' type='submit' style={Form}>
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de
                    Sign In 
                    </Button>
{/* // </Link> */}
                
    </form>


           {/* Route to the forms */}       
                <Link to="/ForgotPassword" >
                 <a  style={Form}>Forgot Password ?</a>
                </Link>
                    <br/>
                    <br/>
                    <Link to="/new-User">
                    <a  style={Form}>New Users SIGN-UP here?</a>
                    </Link>
                    <br/>
         
            </div>
         );
    }
}
 
export default Login1;



// handleChange = event => {
//       const isCheckbox = event.target.type === "checkbox";
//       this.setState({
//         [event.target.name]: isCheckbox
//           ? event.target.checked
//           : event.target.value
//       });
//     };
  

//     validate = () => {
//       let nameError = "";
//       let emailError = "";
//       // let passwordError = "";
  
//       if (!this.state.name) {
//         nameError = "name cannot be blank";
//       }
      
      
//       if (!this.state.email.includes("@")) {
//         emailError = "invalid email";
//       }
      
      
      
//       if (emailError){
//         this.setState({emailError})
//         return false;
//       }

      
//       
      
      
//       return true;
//     };
  
//     handleSubmit = event => {
//       event.preventDefault();
//       const isValid = this.validate();
//       if (isValid) {
//         console.log(this.state);
//         // clear form
//         this.setState(initialState);
//       }
//     };
<<<<<<< HEAD
=======
{/* <TextField     
                            type='text'
                            id='email'
                            placeholder='Enter Email ID'
                            style={{width:'110%',marginBottom:'-20%',margin:5,}}
                            value={this.state.details.email}
                            onChange={this.onChange}
                            name='email'
                        /> */}
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de
