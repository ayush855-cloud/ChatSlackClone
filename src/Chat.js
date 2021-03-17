import React, { useState, useEffect } from 'react'
import './Chat.css';
import { db } from './firebase';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { useParams } from 'react-router-dom';
import { InfoOutlined } from '@material-ui/icons';
import Message from './Message';
import ChatInput from './ChatInput';


function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => {
                setRoomDetails(snapshot.data());
                // console.log(snapshot.data().name);

            })
            
        }
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot((snp) => {
            setRoomMessages(snp.docs.map(doc => doc.data()))
        })
       
    }, [roomId]);
    
    
    return (
        <div className="chat">
            {/* <h2>you are in {roomId} room</h2> */}
            <div className="chat__header">
                <div className="chat__headerleft">
                    <h4 className="chat__channelName">
                    {/* if roomDetails exist then roomDetails.name will print */}
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerright">
                    <p><InfoOutlined />Details</p>
                </div>

            </div>
            <div className="chat__messages">
                {roomMessages.map((msg) => {
                    return <Message 
                        message={msg.message}
                        user={msg.user}
                        timestamp={msg.timestamp}
                        userImage={msg.userImage} />
                })}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat
