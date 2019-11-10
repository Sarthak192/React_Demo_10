import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts : [],
        clickPostId: null,
        error: false
    }

    componentDidMount(){
        axios.get("/posts").then(response=>{
            const posts = response.data.slice(0,4)
            const updatedPosts = posts.map(post=>{
                return {
                    ...post,
                    author: 'Max'
                }

            })
            this.setState({posts: updatedPosts})
        }).catch(error=>{
            this.setState({error: true})
        })
        
    }

    clickPostHandler = (id)=>{
        this.setState({clickPostId: id})
    }
    
    render () {
        let posts = <p style = {{textAlign: 'center'}}>Something Went Wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(post=>{
                return <Post 
                        clicked = {()=> this.clickPostHandler(post.id)} 
                        author = {post.author} 
                        key = {post.id} 
                        title = {post.title}/>
            })
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id = {this.state.clickPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;