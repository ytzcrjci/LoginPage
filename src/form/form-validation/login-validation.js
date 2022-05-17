import * as Yup from 'yup';
import { string, boolean } from 'yup';

export const loginValidation = Yup.object().shape({
 loginemail: string().email('Invalid email').required('This field is required'),
 loginpassword: string().required('This field is required'),
 toggle: boolean().required('Must agree').isTrue('Must agree'),
});
