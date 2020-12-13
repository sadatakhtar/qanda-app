import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login'
import ReplyPage from '../pages/ReplyPage/ReplyPage';
import SelectedQuestionPage from '../pages/selectedQuestionPage/SelectedQuestionPage';

export default () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/replypage" component={ReplyPage} />
                <Route path="/selectedquestionpage" component={SelectedQuestionPage} />
            </BrowserRouter>
        </div>
    )
}