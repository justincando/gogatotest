import React, {useState} from 'react'

const CreatePost = (props) => {

   // id - automatically generated
   // contents - what user generates
   // likes - start off with 0
   // timestamp - automatically generated in db
   // userid - user who generates post
   // parentid - if post is comment

   const [postContent, setPostContent] = useState("");

   const handleSubmit = e => {
      e.preventDefault();
      //console.log("submit handled")
      // fetch is happening here

         fetch(`http://localhost:8081/post/create`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ contents: postContent, likes: 0,  userid: props.userid, parentid: 0}),
            headers: {
               "Content-type": "application/json"
            },
         })
         .then(res => res.json())
         .then(window.location.reload())
      }  

   const handleChange = e => {
      setPostContent(e.target.value)
   }


   return (
      <>
         <form onSubmit={handleSubmit} className="center">
            <p><label htmlFor="post input"><h3>What would you like to share? 📝</h3></label></p>
            <p><input className="center" type="textarea" name={postContent} onChange={handleChange} autoFocus ></input></p>
            <p><input type="submit" name="Create Post" ></input></p>
         </form>
      </>
   )
}

export default CreatePost