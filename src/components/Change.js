import '../css/fonts.css';
import '../css/change.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Change = (props) => {

    const [inputFields, setInputFields] = useState({
        contents: props.post.contents,
      });

    function getInput(event){
        setInputFields({
            ...inputFields,
            [event.target.name]: event.target.value,
        })
    }

    function onPress(e){

        e.preventDefault();

        const post = {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({ 
                id: props.post.id,
                userid: props.post.userid,
                contents: inputFields.contents,
                parent_post: props.post.parent_post
            })
        };

        fetch('http://localhost:8081/post', post);

        window.location.reload();
        return (<Navigate to = "/timeline"/>);
    }

    return (
        <>
            <div className="blur"></div>

            <section className="changeScreen">
                <h1>Change Message</h1>

                <form>

                    <input hidden id="id" name="id" value ={props.post.id}></input>
                    <input hidden id="userid" name="userid" value ={props.post.userid}></input>
                    <input hidden id="parent_post" name="parent_post" value ={props.parent_post}></input>

                    <textarea required id="contents" name="contents" 
                    rows="5" cols="80" placeholder="revise text" 
                    onChange={getInput} value ={inputFields.contents}></textarea>

                    <br></br><br></br>
                    <button type="submit" value="Save" onClick={onPress}>Save</button>
                </form>

            </section>
        </>
    );
}

export default Change;