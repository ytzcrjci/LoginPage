import React from 'react';
import { Field } from 'formik';
import ErrorMark from '../form-error-message/error-message';

export default function InputsForm(props) {
 return (
  <div>
   <label>
    <div className="title-input">{props.title}</div>
    <div className="form-input">
     <Field
      className={props.className}
      className="form-input-label"
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      type={props.type}
     ></Field>
    </div>
   </label>
   <ErrorMark name={props.name}></ErrorMark>
  </div>
 );
}
