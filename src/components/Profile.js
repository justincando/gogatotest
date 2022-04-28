import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateAboutMe from "./UpdateAboutMe";

/**
 * Displays a user's profile. If the profile id matches the id of the currentUser (passed in via props.currentUser), the edit components will display.
 * @author Asheton
 */
function Profile(props) {
    let { id } = useParams();
    const API_URL = "http://localhost:8000";
    const [data, setData] = useState();
    const [showHideEdit, toggleEditDisplay] = useState(false);

    /**
     * Gets user data based on the profile ID (passed in from useParams as the number from the url)
     * @author Asheton
     */
    function getProfileInfo() {
        fetch(`${API_URL}/users/${id}`)
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                console.log(response)
            })
            .catch((error) => console.log(error))
    }

    function showHide() {
        toggleEditDisplay(!showHideEdit);
    }

    return (
        <>
        <div id="profile-page">

            {data == null ? getProfileInfo() :
                <div id="profile-data">

                    <h1>{data.username}'s profile </h1>
                    <h3>About Me: {data.aboutMe}</h3>
                    <h3>Followers: {data.followerCount}</h3>
                    <h3>Points: {data.points}</h3>
                    <h3>First Name: {data.firstName}</h3>
                    <h3>Last Name: {data.lastName}</h3>
                    <h3>Email: {data.email}</h3>

                </div>}

            {data != null && data.id == props.currentUser ? 
            <div id="profile-edit-options">
                <button onClick={showHide}>Edit</button>
                {showHideEdit && <UpdateAboutMe id={id} />}
            </div>
             : null}

            <a href={`/profile/${1}`}>Test profile 1</a><br></br>
            <a href={`/profile/${2}`}>Test profile 2</a>
        </div>
        </>
    );

}

export default Profile;