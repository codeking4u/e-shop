import {signinWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
       const {user} = await signinWithGooglePopup();
       
       const userDocRef = await createUserDocumentFromAuth(user)
    }
        
    return(
        <div> THis is sign in page
            <button onClick= {logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
}


export  default SignIn;