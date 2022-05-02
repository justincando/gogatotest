import '../css/fonts.css';

const Delete = (props) => {

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

    return (<button onClick={onPress}>Delete</button>);
}

export default Delete;