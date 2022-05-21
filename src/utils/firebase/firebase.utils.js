import { initializeApp } from 'firebase/app'
import { getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect,
    createUserWithEmailAndPassword
} from 'firebase/auth'

import { getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

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

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db,'users', userAuth.uid);
    console.log(userDocRef)

    /* create snapshot, required to create doc */
    const snapShot = await getDoc(userDocRef);
    console.log(snapShot.exists())

    /* check if document exist */
    if(!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            const createDoc = await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.error(`Error creating user ${error.message}`);
        }
    }
}


export const createAuthWithEmailAndPassword = async(email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}