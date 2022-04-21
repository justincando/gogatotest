import { useState } from "react";

const UpdateProfile = props => {

    const API_URL = "http://localhost:8000";
    const FAKE_CURRENTUSER_ID = 1;

    const [bioText, setBioText] = useState("");

    /**
     * Change bioText on keystroke
     * @param {*} e 
     */
    function handleChange(e) {
        setBioText(e.target.value);
    }

    /**
     * Submit the updated bio (about me) information
     */
    async function submitBio() {
        console.log(bioText);

        //  Replace with props.currentUser in production
        await fetch(`${API_URL}/users/profile/${FAKE_CURRENTUSER_ID}`,
            {
                method: 'PUT',
                headers: { "Content-Type": "text/html" },
                body: bioText
            }).then(response => console.log(response.json()));
    }


    return (
        <div className="update-profile-area">
            <label htmlFor="bioText">About Me (150 characters max):</label><br></br>
            <textarea type="text" id="bioText" name="bioText" minLength="0" maxLength="150" rows="5" cols="50" onChange={handleChange}></textarea><br></br>
            <button value="submit" id="submitButton" onClick={submitBio}>Submit</button>
        </div>
    );
}

export default UpdateProfile;
