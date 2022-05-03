import { useEffect, useState } from "react";
import { useParams,Navigate } from "react-router-dom";
import UpdateAboutMe from "./UpdateAboutMe";
import UpdateName from "./UpdateName";
import '../css/profile.css';

/**
 * Displays a user's profile. If the profile id matches the id of the currentUser (passed in via props.currentUser), the edit components will display.
 * @author Asheton
 */
function Profile(props) {
    let { id } = useParams();
    const API_URL = "http://54.196.107.3:8000";
    const [data, setData] = useState();
    const [doNotUpdate, toggleDoNotUpdate] = useState(false);
    const [showHideEdit, toggleEditDisplay] = useState(false);

    /**
     * Gets user data based on the profile ID (passed in from useParams as the number from the url)
     * @author Asheton
     */
    function getProfileInfo() {
        if (!doNotUpdate) {
            toggleDoNotUpdate(true);
            fetch(`${API_URL}/users/${id}`)
                .then((response) => response.json())
                .then((response) => {
                    setData(response);
                    //console.log(response)
                })
                .catch((error) => console.log(error))
        }
    }

    function showHide() {
        toggleEditDisplay(!showHideEdit);
    }


    useEffect(() => {
        if (!doNotUpdate) {
            getProfileInfo();
            //console.log('data has been fetched');
        }
    }, []);

    return props.currentUser>0 ?  (
        <>
            <div id="profile-page">

                {data != null ?
                    <div id="profile-data">

                        <h1>{data.username}'s profile </h1>
                        <h3>About Me: {data.aboutMe}</h3>
                        <h3>Followers: {data.followerCount}</h3>
                        <h3>Points: {data.points}</h3>
                        <h3>First Name: {data.firstName}</h3>
                        <h3>Last Name: {data.lastName}</h3>
                        <h3>Email: {data.email}</h3>

                    </div> : null}

                {data != null && data.id == props.currentUser ?
                    <div id="profile-edit-options">
                        <button onClick={showHide}>Edit</button>
                        {showHideEdit &&
                            <div id = "update-parent">
                        
                                <UpdateAboutMe id={id} />
                                <UpdateName id={id} />
                            </div>
                        }
                    </div>
                    : null}
            </div>
        </>
    ) :( <Navigate to ="/login" /> );

}

export default Profile;