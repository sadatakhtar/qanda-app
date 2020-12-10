import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login'



export default () => {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
            </BrowserRouter>
        </div>
    )
}