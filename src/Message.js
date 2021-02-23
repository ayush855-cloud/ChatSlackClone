import React from 'react'
import './Message.css';


function Message({message,user,timestamp,userImage}) {
    return (
        <div className="messages">
            <img src={userImage} alt={user} />
            <div className="messages__info">
                <h4>{user} <span className="messages__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
