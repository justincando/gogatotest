import '../css/fonts.css';
import '../css/change.css';

import { useParams,Navigate } from "react-router-dom";
import React, { Component } from "react";
import GGPosts from "./GGPosts";



class PContainer extends Component{
    constructor(){
        super();
        this.state = {post: []};
    }

    componentDidMount(){

        var API_URL = "http://localhost:8081";
        API_URL = API_URL + "/post/userid/" + this.props.currentUserId;

        console.log(this.props.user);

        fetch(API_URL,{
        method: "get",
        })

        .then(response => {

            if(!response.ok){throw Error("Error fetching all user array");}
            return response.json()

            .then(json => {this.setState({ post: json});})

            .catch(err => {throw Error(err.message)});
        });

    }

    render() {
        return this.props.currentUserId>0 ? (
            <section>
                <GGPosts username ={this.props.user} post={this.state.post}/>
            </section>
        ) :( <Navigate to ="/login" /> );
    }
}

export default PContainer;