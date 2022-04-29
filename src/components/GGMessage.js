import '../css/fonts.css';
import React from 'react';

const GGMessage = (props) => {

    

    return( 
        <div className='ggMessage'>
            <h4>{props.usr}</h4>

            <p>Post:{props.contents}
                <br></br><br></br>
               Time: {props.time}</p>

            <a href="#">Review Comments</a>
        </div>     
    )
}

export default GGMessage;