import React from 'react'
import './ReplyPage.css';
import SidebarComponent from '../../components/sidebarComponent/SidebarComponent'
import TitleComponent from '../../components/titleComponent/TitleComponent'


function ReplyPage() {
    return (
        <div className="reply_container">
            <div className="reply_sidebar">
              <SidebarComponent />
            </div>
            <div className="reply_body">
                <div className="reply_titleandbtn_container">
                <div className="reply_title">
                    <h2>Add Reply</h2>
                </div>
                <div className="reply_btn">
                    <button>Logout</button>
                </div>

                </div>
                <div className="reply_textarea_container">
                    <div>
                         <form>
                             <div className="reply_form_label">
                             <label for="reply">Title of the question</label>
                             </div>
                               
                             <textarea name="reply" id="reply" rows="10" cols="50">

                             </textarea>
                             <div className="signup_form_btn">
                                <button type="submit">Submit</button>
                             </div>
                        </form>

                    </div>
                    
                </div>
               
                
            </div>
        </div>
    )
}

export default ReplyPage
