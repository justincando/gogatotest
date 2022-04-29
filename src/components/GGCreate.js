import '../css/fonts.css';
import '../css/change.css';


const GGCreate = (props) => {

    return (
        <>
            <section className="">
                <h1>Create Message</h1>

                <form id='createPostForm' className='flex-container' action="/post" method ="post">

                    <input hidden id="likes" name="likes" value = "1"></input>
                    <input hidden id="parentid" name="parentid" value ="0"></input>

                    <textarea required id="contents" name="contents" rows="3" cols="120" placeholder="What on your mind?"></textarea>
                    {/* <br></br><br></br> */}
                    <input type="submit" value="Post"></input>
                    
                </form>

            </section>
        </>
    );
}

export default GGCreate;

// <input hidden id="userid" name="userid" value = {window.user.userid}></input> //places this on line 14 when window user object is created.