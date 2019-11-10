import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPostContent: null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPostContent || (this.state.loadedPostContent && this.state.loadedPostContent.id !== this.props.id)){
                axios.get("/posts/" + this.props.id).then(response=>{
                this.setState({loadedPostContent: response.data})
            })
        }
        }   
    }
    deletePosthandler = ()=> {
        axios.delete("/posts/" + this.props.id).then(response=>{
            console.log(response)
        })
    }
    render () {
        let post = <p style = {{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style = {{textAlign: 'center'}}>Loading....</p>;
        }
        if(this.state.loadedPostContent){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPostContent.title}</h1>
                    <p>{this.state.loadedPostContent.body}</p>
                    <div className="Edit">
                        <button onClick = {this.deletePosthandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;