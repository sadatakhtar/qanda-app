import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login'
import ReplyPage from '../pages/ReplyPage/ReplyPage';



export default () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/replypage" component={ReplyPage} />
            </BrowserRouter>
        </div>
    )
}