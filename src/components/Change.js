import '../css/fonts.css';
import '../css/change.css';
import { useState } from "react"

const Change = (props) => {

    console.log("we made it this far");


/**
    const [content, setContent] = useState(props.content);

    

    async function onPress(){

        const post = {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({ 
                id: props.id,
                userid: props.userid,
                content: props.content,
                parent_post: props.parent_post,
            })
        };

        await fetch('http://localhost:8081/post/', post);
        //const response = 
        //const data = await response.json();
        //console.log(data);
    }**/

    return (
        <>
            <div className="blur"></div>

            <section className="changeScreen">
                <h1>Change Message</h1>

                <form action="http://localhost:8081/post" method ="put" target='_blank'>

                    <input hidden id="id" name="id" value ={props.post.id}></input>
                    <input hidden id="userid" name="userid" value ={props.post.userid}></input>
                    <input hidden id="parent_post" name="parent_post" value ={props.post.parent_post}></input>

                    <textarea required id="contents" name="contents" rows="5" cols="80" placeholder="revise text"></textarea>
                    <br></br><br></br>
                    <button type="submit" value="Save">Save</button>
                </form>

            </section>
        </>
    );
}

export default Change;