import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login'
import ReplyPage from '../pages/ReplyPage/ReplyPage';
import SelectedQuestionPage from '../pages/selectedQuestionPage/SelectedQuestionPage';
import AllQuestions from '../pages/allquestions/AllQuestions';
import Answered from '../pages/answered/Answered';
import UnAnswered from '../pages/unanswered/UnAnswered';
import AskQuestion from '../pages/askquestion/AskQuestion'


export default () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/replypage" component={ReplyPage} />
                <Route path="/selectedquestionpage" component={SelectedQuestionPage} />
                <Route path="/allquestions" component={AllQuestions} />
                <Route path="/answered" component={Answered} />
                <Route path="/unAnswered" component={UnAnswered} />
                <Route path="/askquestion" component={AskQuestion} />
            </BrowserRouter>
        </div>
    )
}