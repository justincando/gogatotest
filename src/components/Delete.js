import '../css/fonts.css';

const Delete = (props) => {

    // console.log(props.auth);
    // console.log(props.post.userid);

    function onPress(){
        const post = {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({ 
                id: props.post.id,
                userid: props.post.userid,
                contents: "[ Deleted ]",
                parent_post: props.post.parent_post
            })
        };

        fetch('http://localhost:8081/post', post);
        window.location.reload();
    }

    if (props.auth == props.post.userid) return (<button onClick={onPress}>Delete</button>);
    return (<></>);
}

export default Delete;