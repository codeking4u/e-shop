import { initializeApp } from 'firebase/app'
import { getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOyrepSrOG1_LqQ24sTtgFw6r74fDlZz4",
    authDomain: "crown-clothing-db-f91c7.firebaseapp.com",
    projectId: "crown-clothing-db-f91c7",
    storageBucket: "crown-clothing-db-f91c7.appspot.com",
    messagingSenderId: "489046726615",
    appId: "1:489046726615:web:aed6f715a33a65ca075d92"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.getCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signinWithGooglePopup =  () => signInWithPopup(auth, provider);