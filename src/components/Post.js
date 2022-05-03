
// @Author: Brett Evans

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import Like from "../hooks/Like";
import Change from "./Change";
import Delete from "./Delete";
import GGReply from "./GGReply";
import CreatePost from "./CreatePost";



import '../css/App.css';
import '../css/like.css';
import '../css/post.css';


export default function Post(props) {

    const readyPostList = []
    const [rawPostList, setRawPostList] = useState([])
    const [rawUserList, setRawUserList] = useState([])
    
    useEffect(() => {
        if (rawPostList.length === 0) {
            fetch("http://54.196.107.3:8081/post").then(resp => resp.json()).then(data => setRawPostList(data))
        }
        
    }, [rawPostList])

    useEffect(() => {
        if (rawUserList.length === 0) {
            fetch("http://54.196.107.3:8000/users").then(resp => resp.json()).then(data => setRawUserList(data))
        }
        
    }, []) 

    const getCommentsByParentId = (id) => {
        const commentList = []
        rawPostList.forEach(element => {
            if (element.parentid == id) {
                let username = ""
                for (let j = 0; j < rawUserList.length; j++) {
                    if (rawUserList[j].id == element.userid) {
                        username = rawUserList[j].username
                        break;
                    }
                }
                commentList.push(
                    <li key={element.id}>
                        <article  className="comment" >
                            <div id={"comment" + element.id} >
                                <div className="flex-container post-header">
                                    <h4>{username}</h4>
                                    <h4>{element.post_time}</h4>
                                </div>
                                <p>{element.contents}</p>
                                <div className="flex-container">
                                    <Delete post = {element} auth = {props.currentUserId}></Delete>
                                    <Like likeToChild={element.likes} postIdToChild={element.id} contentToChild={element.contents} userIdToChild={props.currentUserId} postUserIdToChild={element.userid}/>
                                    <Popup trigger={<button>Reply</button>} modal nested>
                                        <GGReply userid ={props.currentUserId} post = {element}/>
                                    </Popup>
                                    <Popup trigger={<button>Edit</button>} modal nested>
                                        <Change post = {element}/>
                                    </Popup>
                                </div>
                            </div>
                        </article>    
                        <ul>{getCommentsByParentId(element.id)}</ul>
                    </li>
                )
            }
        });
        //console.log(commentList)
        return commentList
    }

    const displayPosts = (rawPostList) => {
        for (let i = 0; i < rawPostList.length; i++) {
            try {
                if (rawPostList[i].parentid === 0) {
                    let username = ""
                    for (let j = 0; j < rawUserList.length; j++) {
                        if (rawUserList[j].id == rawPostList[i].userid) {
                            username = rawUserList[j].username
                            break;
                        }
                    }
                    readyPostList.push(
                        <article  key={rawPostList[i].id}>
                            <div className="post" id={"post" + rawPostList[i].id} >
                                <div className="flex-container post-header">
                                    <h4>{username}</h4>
                                    <h4>{rawPostList[i].post_time}</h4>
                                </div>
                                    <p><pre>{rawPostList[i].contents}</pre></p>
                                <div className="flex-container">
                                    <Like likeToChild={rawPostList[i].likes} postIdToChild={rawPostList[i].id} contentToChild={rawPostList[i].contents} userIdToChild={props.currentUserId} postUserIdToChild={rawPostList[i].userid}/>
                                    <Delete post = {rawPostList[i]} auth = {props.currentUserId}></Delete>
                                    <Popup trigger={<button>Reply</button>} modal nested>
                                        <GGReply userid ={props.currentUserId} post = {rawPostList[i]}/>
                                    </Popup>
                                    <Popup trigger={<button>Edit</button>} modal nested>
                                        <Change post = {rawPostList[i]}/>
                                    </Popup>
                                </div>    
                            </div>
                            
                            <ul>{getCommentsByParentId(rawPostList[i].id)}</ul>
                        </article>
                        
                    )
                }
            } catch (e) {
                readyPostList.push(
                    <article id="defaultPost" className="post" key={0}>
                        <h6></h6>
                        <h6></h6>
                        <p></p>
                    </article>
                )
            }
        }
    }
    
    if (rawPostList.length !== 0 && readyPostList == 0) {
        displayPosts(rawPostList)
        //console.log(rawPostList)
    }

    

    return props.currentUserId>0 ?(
        <section id="post-container" className="flex-container">
             <CreatePost username ={props.user} userid={props.currentUserId}/>
            {readyPostList}
        </section>
    )  :( <Navigate to ="/login" /> );
}





// const rawPostList = [
//     {
//         "post_id": "1",
//         "author_username": "user-1",
//         "parent_post_id": "0",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time": '2022-03-03 20:43:21'
//     },

//     {
//         "post_id": "2",
//         "author_username": "user-2",
//         "parent_post_id": "1",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time": '2022-03-03 20:44:02'
//     },
//     {
//         "post_id": "3",
//         "author_username": "user-3",
//         "parent_post_id": "2",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },
//     {
//         "post_id": "4",
//         "author_username": "user-4",
//         "parent_post_id": "3",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },
//     {
//         "post_id": "5",
//         "author_username": "user-5",
//         "parent_post_id": "4",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },

//     {
//         "post_id": "6",
//         "author_username": "user-6",
//         "parent_post_id": "1",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time": '2022-03-03 20:44:02'
//     },
//     {
//         "post_id": "7",
//         "author_username": "user-7",
//         "parent_post_id": "6",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },
//     {
//         "post_id": "8",
//         "author_username": "user-8",
//         "parent_post_id": "6",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },
//     {
//         "post_id": "9",
//         "author_username": "user-9",
//         "parent_post_id": "8",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },
//     {
//         "post_id": "10",
//         "author_username": "user-1",
//         "parent_post_id": "0",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time": '2022-03-03 20:43:21'
//     },

//     {
//         "post_id": "20",
//         "author_username": "user-2",
//         "parent_post_id": "10",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time": '2022-03-03 20:44:02'
//     },
//     {
//         "post_id": "30",
//         "author_username": "user-3",
//         "parent_post_id": "20",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },
//     {
//         "post_id": "40",
//         "author_username": "user-4",
//         "parent_post_id": "30",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },
//     {
//         "post_id": "50",
//         "author_username": "user-5",
//         "parent_post_id": "40",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },

//     {
//         "post_id": "60",
//         "author_username": "user-6",
//         "parent_post_id": "10",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time": '2022-03-03 20:44:02'
//     },
//     {
//         "post_id": "70",
//         "author_username": "user-7",
//         "parent_post_id": "60",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },
//     {
//         "post_id": "80",
//         "author_username": "user-8",
//         "parent_post_id": "60",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     },
//     {
//         "post_id": "90",
//         "author_username": "user-9",
//         "parent_post_id": "80",
//         "like_count": "0",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "post_time":'2022-03-03 20:44:20'
//     }
// ]
