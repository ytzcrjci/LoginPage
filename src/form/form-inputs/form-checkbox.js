import React from 'react';
import { useField } from 'formik';

import './form-inputs.scss';

import { Checkbox } from '@mui/material';
import ErrorMark from '../form-error-message/error-message';

const FormCheckbox = (props) => {
 useField(props);

 return (
  <div style={{ position: 'relative' }}>
   <label>
    <div>
     <div>
      <Checkbox
       {...props}
       required
       defaultChecked
       name="toggle"
       type="checkbox"
       sx={{ '& .MuiSvgIcon-root': { fontSize: 17 } }}
       style={{
        color: '#7F265B',
        padding: 0,
        margin: '0 8px 0 0',
        boxSizing: 'border-box',
       }}
      />
      <span>{props.title}</span>
     </div>
     <ErrorMark name="toggle"></ErrorMark>
    </div>
   </label>
  </div>
 );
};

export default FormCheckbox;
