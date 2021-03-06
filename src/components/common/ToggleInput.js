import React from 'react';
import { DropdownList } from 'react-widgets';


//As Yes/No dropdown
const ToggleInput = ({ name, onChange, placeholder, data,  value, error,valueField, textField}) => { 
    return (
        <DropdownList             
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={onChange}
        />
    );
};

export default ToggleInput;