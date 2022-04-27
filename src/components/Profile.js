import { useEffect } from "react";
import UpdateAboutMe from "./UpdateAboutMe";

function Profile(props) {
    const FAKE_CURRENTUSER_ID = 1;
    const FAKE_CURRENTUSER_UN = "Sonic";

    useEffect(() => getProfileInfo());


    function getProfileInfo() {
        console.log("I am getProfileInfo");
    }

    return (
        <>
            <h1>{FAKE_CURRENTUSER_UN}'s profile </h1>
            <UpdateAboutMe FAKE_CURRENTUSER_ID={FAKE_CURRENTUSER_ID} />
        </>
    );

}

export default Profile;