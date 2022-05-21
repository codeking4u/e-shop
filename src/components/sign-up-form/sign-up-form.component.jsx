import { useState } from 'react';
import { createAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFieldValues = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFieldValues);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);

    const onChangeHandler = event => {
        const { name, value } = event.target;
        /* spread operator */
        setFormFields({ ...formFields, [name]: value});
    }

    const resetForm = () =>{
        setFormFields(defaultFieldValues);
    }

    const submitHandler = async (event) =>{
        event.preventDefault();
        if(password != confirmPassword ) {
            alert('Passwords do not match!')
            return;
        }

        try{
            const { user } = await createAuthWithEmailAndPassword(email, password);
            const response = await createUserDocumentFromAuth(user, {displayName});
            resetForm();
        }catch(error){
            if(error.code=="auth/email-already-in-use")
            alert('User already exist!'); 
            else
            console.error(`User creation encountered an error: ${error}`);
        }
    }

    return(
        <div>
            <h1>Sign up with your email and password.</h1>
            <form onSubmit={submitHandler}>
                <label >Display Name</label>
                <input type="text" required name="displayName" value={displayName} onChange = { onChangeHandler } />
                <label >Email Id</label>
                <input type="email" required name="email" value={email} onChange = { onChangeHandler } />
                <label >Password</label>
                <input type="password" required name="password" value={ password } onChange = { onChangeHandler } />
                <label >Confirm Password</label>
                <input type="password" required name="confirmPassword" value={ confirmPassword } onChange = { onChangeHandler } />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;