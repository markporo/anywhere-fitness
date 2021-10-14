// MARK
import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Logout = () => {
    console.log('log out');

    axiosWithAuth().post('/logout')
        .then(res => {
            localStorage.removeItem('token')
            window.location.pathname = '/login'
        })
        .catch(err => console.log(err))

    return (<div></div>);
}

export default Logout;