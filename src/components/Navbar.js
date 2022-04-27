import {Link} from 'react-router-dom';


export default function Navbar()
{

    // Conditional render whether to show Login/Register or My Profile/Posts
    return(
        <>
        <div>
            <h3>Navbar Title</h3>

            {/* 'Link' to the different tab/page/component 'Route' */}
            <Link to='/'>Component 1</Link>
            <Link to='/'>Component 2</Link>

        </div>
        </>
    );
}