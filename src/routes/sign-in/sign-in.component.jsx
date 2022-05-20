import {signinWithGooglePopup} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
       const response = await signinWithGooglePopup();
       console.log(response)
    }
        
    return(
        <div> THis is sign in page
            <button onClick= {logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
}


export  default SignIn;