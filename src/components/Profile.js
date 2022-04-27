import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateAboutMe from "./UpdateAboutMe";

function Profile(props) {
    let { id } = useParams();
    const API_URL = "http://localhost:8000";
    const [data, setData] = useState();

    function getProfileInfo() {
        fetch(`${API_URL}/users/${id}`)
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

            {data != null && data.id == props.currentUser ? <UpdateAboutMe id={id} /> : null
            }

            <a href={`/profile/${1}`}>Test profile 1</a>
            <a href={`/profile/${2}`}>Test profile 2</a>
        </>
    );

}

export default Profile;