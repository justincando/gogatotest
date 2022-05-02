import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import '../css/HomePage.css';

/**
 * Displays a series of posts for the main page that a user sees when first logging in.
 * @author William Gaines
 */

function HomePage() {
    return (
        <>
            <h1 class="title">Home</h1>
            <div class="parent">
                <div class="lastpost fixedleft">
                    <div class="minoritem">latest post</div>
                </div>
                <div class="box">
                    <div class="item item-1">Post One</div>
                    <div class="item item-2">Post Two</div>
                    <div class="item item-3">Post Three</div>
                </div>
                <div class="stats fixedright">
                    <div class="minoritem">follower count</div>
                </div>
            </div>
        </>
    )
}

export default HomePage;