import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import mainLogo from './iron-box.png';
<<<<<<< HEAD
import {Link,useHistory} from 'react-router-dom'
=======
import {Link} from 'react-router-dom'
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de


class OtpConfirm extends Component {
    state = {  }
    render() { 
        return (
            <div className='Otp' style={{justifyContent:'center',textAlign:'center'}}>
            <div className='img' style={{marginTop:'5',position:'absolute'}}>
      <img src={mainLogo} style={{width:'18%',marginLeft:'-35%',marginRight:'-100%'}}/>  
            </div>
        <h2 style={{color:'red'}}>OTP VERIFICATION</h2>
        <form>
        <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined" style={{width:'80%'}}>ENTER EMAIL OTP</InputLabel>
        <OutlinedInput id="component-outlined"  label="ENTER EMAIL OTP" />
      </FormControl>
        </form>
<<<<<<< HEAD
        {/* <Link to="/dashBoard"> */}
        <Button variant='contained' color='secondary' style={{margin:20}} onClick={()=>{this.props.history.push('/dashBoard')}}>
            Submit
        </Button>
        {/* </Link> */}
=======
        <Link to="/dashBoard">
        <Button variant='contained' color='secondary' style={{margin:20}}>
            Submit
        </Button>
        </Link>
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de

            </div>
          );
    }
}
 
export default OtpConfirm;