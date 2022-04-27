import { useEffect, useState } from "react";
import UpdateAboutMe from "./UpdateAboutMe";

function Profile(props) {
    const FAKE_CURRENTUSER_ID = 1;
    const API_URL = "http://localhost:8000";
    const [data, setData] = useState();

    function getProfileInfo() {
        fetch(`${API_URL}/users/${FAKE_CURRENTUSER_ID}`)
        .then((response) => response.json())
        .then((response) => {
            setData(response);
            console.log(response)
        })
        .catch((error) => console.log(error))
    }

    return (
        <>
        {data == null ? getProfileInfo() : <h1>{data.username}'s profile </h1>}

        {data != null && data.id == FAKE_CURRENTUSER_ID ? <UpdateAboutMe FAKE_CURRENTUSER_ID={FAKE_CURRENTUSER_ID} /> : null
        }

        <a href={`/person/${FAKE_CURRENTUSER_ID}`}>Test profile 1</a>
        <a href={`/person/${2}`}>Test profile 2</a>
        </>
    );

}

export default Profile;