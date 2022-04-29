
// @Author: Brett Evans

import { render } from "@testing-library/react"
import { useEffect, useState } from "react"
import Popup from 'reactjs-popup'
import Like from "../hooks/Like"
import GGCreate from "./GGCreate"
import Change from "./Change"

export default function Post() {


    const readyPostList = []
    const [rawPostList, setRawPostList] = useState([])
    const [editing,setEditState] = useState(false)
    
    useEffect(() => {
        if (rawPostList.length === 0) {
            fetch("http://localhost:8081/post").then(resp => resp.json()).then(data => setRawPostList(data))
        }
        
    }, [rawPostList])

    const editContent = () => {
        (<Change/>)
    }

    const getCommentsByParentId = (id) => {
        const commentList = []
        rawPostList.forEach(element => {
            if (element.parentid == id) {
                console.log(element)
                commentList.push(
                    <li key={element.id}>
                        <article  className="comment" >
                            <div id={"comment" + element.id} >
                                <div className="flex-container post-header">
                                    <h5>{element.userid}</h5>
                                    <h5>{element.post_time}</h5>
                                </div>
                                <p>{element.content}</p>
                                <div className="flex-container">
                                    <Like />
                                    <Popup trigger={<button>Edit</button>} modal nested>
                                        <Change/>
                                    </Popup>
                                </div>
                            </div>
                        </article>    
                        <ul>{getCommentsByParentId(element.id)}</ul>
                    </li>
                )
            }
        });
        console.log(commentList)
        return commentList
    }

    const displayPosts = (rawPostList) => {
        for (let i = 0; i < rawPostList.length; i++) {
            try {
                if (rawPostList[i].parentid === 0) {
                    readyPostList.push(
                        <article  key={rawPostList[i].id}>
                            <div className="post" id={"post" + rawPostList[i].id} >
                                <div className="flex-container post-header">
                                    <h4>{rawPostList[i].userid}</h4>
                                    <h4>{rawPostList[i].post_time}</h4>
                                </div>
                                    <p>{rawPostList[i].contents}</p>
                                <div className="flex-container">
                                    <Like />
                                    <Popup trigger={<button>Edit</button>} modal nested>
                                        <Change/>
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
        console.log(rawPostList)
    }

    

    return (
        <section id="post-container" className="flex-container">
            <GGCreate/>
            {readyPostList}
        </section>
    ) 
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
