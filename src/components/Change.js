import '../css/fonts.css';
import '../css/change.css';


const Change = (props) => {

    return (
        <>
            <div className="blur"></div>

            <section className="changeScreen">
                <h1>Change Message</h1>

                <form action="http://localhost:8081/post" method ="put">

                    <input hidden id="id" name="id" value ={props.id}></input>
                    <input hidden id="userid" name="userid" value ={props.userid}></input>
                    <input hidden id="parent_post" name="parent_post" value ={props.parent_post}></input>

                    <textarea required id="contents" name="contents" rows="5" cols="80" placeholder="revise text"></textarea>
                    <br></br><br></br>
                    <input type="submit" value="Save"></input>
                    
                </form>

            </section>
        </>
    );
}

export default Change;