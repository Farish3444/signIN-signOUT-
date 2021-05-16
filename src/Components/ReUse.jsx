import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 


const ReUseInput = ({name, onChange, style, value, placeholder,error,type }) => {
    return ( 
        <div>
    <TextField     
             placeholder={placeholder}
             style={style}
             value={value}
             onChange={onChange}
             name={name}
             type={type}
               /> 
              {error && <div style={{color:'red'}}>{error}</div>}
        </div>
    );
}

export default ReUseInput;