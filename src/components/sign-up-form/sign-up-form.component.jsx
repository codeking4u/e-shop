import { useState } from 'react';

const defaultFieldValues = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFieldValues);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields)
    const onChangeHandler = event => {
        const { name, value } = event.target;
        /* spread operator */
        setFormFields({ ...formFields, [name]: value});
    }

    return(
        <div>
            <h1>Sign up with your email and password.</h1>
            <form onSubmit={()=>{}}>
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