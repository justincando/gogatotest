import { useState } from "react";

/**
 * A component that updates the user's about me section.
 * Primary Contact: ASHETON
 * @param {*} props 
 * @returns 
 */
const UpdateProfile = props => {

    const API_URL = "http://localhost:8000";
    const FAKE_CURRENTUSER_ID = 1;

    const [aboutMeText, setaboutMeText] = useState("");

    /**
     * Change aboutMeText on keystroke
     * @param {*} e 
     */
    function handleChange(e) {
        setaboutMeText(e.target.value);
    }

    /**
     * Submit the updated bio (about me) information
     */
    async function submitUpdatedAboutMe() {
        console.log(aboutMeText);

        const newAboutMe = {
            "aboutMe": aboutMeText
        }

        //  Replace with props.currentUser in production
        await fetch(`${API_URL}/users/profile/${FAKE_CURRENTUSER_ID}`,
            {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newAboutMe)
            })
            
    }


    return (
        <div className="update-aboutMe-area">
            <label htmlFor="aboutMeText">About Me (150 characters max):</label><br></br>
            <textarea type="text" id="aboutMeText" name="aboutMeText" minLength="0" maxLength="150" rows="5" cols="50" onChange={handleChange}></textarea><br></br>
            <button value="submit" id="submitButton" onClick={submitUpdatedAboutMe}>Submit</button>
        </div>
    );
}

export default UpdateProfile;
