import React, { Component } from 'react';
// import React from 'react';
import mainLogo from './iron-box.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
<<<<<<< HEAD
import {Link,useHistory} from 'react-router-dom'
=======
import {Link} from 'react-router-dom'
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de




class ForgotPassword extends Component {
    state = { 
      details:{
        email:'',
        phonenumber:''
      }
    }

    onChange=e=>{
      const details = {...this.state.details}
      details[e.currentTarget.name] = e.currentTarget.value;
      this.setState({ details });
      console.log(this.state)
    }


    

    render() { 
        return (
          
          
 <React.Fragment>


<h1 style={{color:'red',textAlign:'center'}}>Forgot Password Component -- 3</h1>
<img  src={mainLogo} style={{width:'8%',position:'relative',}}/>
<div className='radio'>

<FormControlLabel value="female" control={<Radio />} label="Email Address"/>
<FormControlLabel value="female" control={<Radio />} label="Phone Number" />

</div>

<div style={{textAlign:'center',margin:30}}>

<TextField 
  type='text'
  placeholder='Enter Email'
  id='email'
  value={this.state.details.email}
  onChange={this.onChange}
  name='email'
  style={{width:'20%'}}
/>
</div>

<div className='ForgotButton'>

<<<<<<< HEAD
{/* <Link to="/OtpConfirm"> */}
<Button variant='contained' color='secondary' onClick={()=>{this.props.history.push('/OtpConfirm')}}>
  Sumbit Form
</Button>
 {/* </Link> */}
=======
<Link to="/OtpConfirm">
<Button variant='contained' color='secondary'>
  Sumbit Form
</Button>
</Link>
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de

</div>  

</React.Fragment>

         );
    }
}
 
export default ForgotPassword;