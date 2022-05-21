import {signinWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    const logGoogleUser = async () => {
       const {user} = await signinWithGooglePopup();
       
       const userDocRef = await createUserDocumentFromAuth(user)
    }
        
    return(
        <div> THis is sign in page
            <button onClick= {logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    );
}


export  default SignIn;