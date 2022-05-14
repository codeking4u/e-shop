import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import "./navigation.styles.scss";

const Navigation = () =>{
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div><CrownLogo className="logo"/></div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/">Home</Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/sign-in">Sign In</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;