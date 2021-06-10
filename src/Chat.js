import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Chat.css'
import db from './firebase'

function Chat(){

    const [input, setInput] = useState("")
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {

        if(!roomId) return

        db.collection('rooms')
            .doc(roomId)
            .onSnapshot(snapShot => (
                setRoomName(snapShot.data().name)
        ))

    }, [roomId])

    const sendMessage = e => {
        e.preventDefault();
        console.log(`Youve typed >>> ${input}`)
        setInput("")
    }

    return(
        <div className="Chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last Seen At ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Matheus Leitão</span>
                    Hey Guys
                    <span className="chat__timestamp">
                        15:32
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon/>
                </IconButton>
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}></button>
                </form>
                <IconButton>
                    <Mic></Mic>
                </IconButton>

            </div>
        </div>
    )
}

export default Chat