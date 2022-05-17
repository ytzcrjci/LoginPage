import './form-inputs.scss';
import { CircularProgress } from '@mui/material';

const FormButton = (props) => {
 return (
  <div>
   <button
    onClick={props.onClick}
    disabled={props.submittedd}
    type="submit"
    className={props.classname}
   >
    {props.submitted ? (
     <div>
      <CircularProgress size="20px" color="inherit" className="progress" />
      {props.loginTitle}
     </div>
    ) : (
     props.title
    )}
   </button>
  </div>
 );
};
export default FormButton;
