import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import React, {useEffect,useState} from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import AppsIcon from '@material-ui/icons/Apps';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import AddIcon from '@material-ui/icons/Add';
import {db} from './firebase';
import {useStateValue} from './StateProvider';

function Sidebar() {
    const [{user}]=useStateValue();
    const [channels,setChannel] =useState([]);
    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot)=>
            setChannel(snapshot.docs.map((doc)=>({
                   id:doc.id,
                   name:doc.data().name,
            })
                
            )
            )
        )
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar_info">
                    <h2>Bharati Vidyapeeth</h2>
                    <h3><FiberManualRecord className="dot" />{user?.displayName}</h3>
                </div>
                <CreateIcon />
            </div>
           
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions and reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People and user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
            {channels.map((channel)=>{
                return <SidebarOption title={channel.name}s id={channel.id} />
            })}
        </div>
    )
}

export default Sidebar;
