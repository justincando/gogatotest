import React from "react";
import blankLike from './../images/BlankLikeGGs.png'
import { useState } from "react";
import blankDislike from './../images/BlankDislikeGGs.png'
import filledDislike from './../images/FilledDislikeGGs.png'
import filledLike from './../images/FilledLikeGGs.png'



export default function Like(likeToChild){
    const [on, setOn] = useState('');
    const [off, setOff] = useState('');
    const[like, setLike] = useState(likeToChild.likeToChild);
    const[dImage, setDImage] = useState(blankDislike)
    const[lImage, setLImage] = useState(blankLike)
    // const[postId, setPostId] = useState(likeToChild.postIdToChild);
    
        function submitLike(likes){
            const post ={
                likeCount : likes,
            };
            const postJSON =JSON.stringify(post);
        

            const response= fetch(`http://192.168.1.126:8080/post/${likeToChild.postIdToChild}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:postJSON,
            });
            if(response.status == 200){
                alert("submitted")
            }
        }

    
    
    const parentToChild = (likes) =>{
            if(on){
            likes--;
            setLike(likes);
            setOn(false);
            setLImage(blankLike);
            submitLike(likes)
            }else{
                likes++;
                setLike(likes);
                setOn(true); 
                setLImage(filledLike);
                submitLike(likes);
                if(off){
                    parentToMinusChild(likes);
                }      
            }    
        }
    const parentToMinusChild = (likes) =>{
        if(off){
            likes++;
            setLike(likes);
            setOff(false);
            setDImage(blankDislike);
            submitLike(likes);
            
            }else{
                likes--;
                setDImage(filledDislike);
                setOff(true);
                setLike(likes);    
                submitLike(likes);  
                if(on){
                    parentToChild(likes);
                }
            }   
    }
    return(
        <>
            <span >
                <img src = {dImage} id = "images" onClick = {() => parentToMinusChild(like)}></img>
                <img src ={lImage} id = "images" onClick = {() => parentToChild(like)}></img> 
                {like}  
            </span>
        </>
    );
}