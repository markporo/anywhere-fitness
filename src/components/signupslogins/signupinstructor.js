//2. User can create/register as an instructor 
//by entering an additional Auth Code during signup, 
//and can login with the registered credentials.

//TOBI

import userEvent from "@testing-library/user-event";
import react from "react";
import "../App.css"


export default function SignupInstructor() {

    return (
        <div>
            <h1>Signup Form For Instructor</h1>
        </div>
    )
}

// this component lives in signup form depending on
//state of userEvent...either client or instructor