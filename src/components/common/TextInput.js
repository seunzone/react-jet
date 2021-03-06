import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';


const TextInput = ({ name, onChange, placeholder, value, error }) => {
   
    return (
         <Input type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} invalid={error}/>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,    
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    error: PropTypes.bool
};

export default TextInput;
