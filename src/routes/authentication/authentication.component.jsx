import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div>
      {" "}
      THis is sign in page
      <div className="authentication-wrapper">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
