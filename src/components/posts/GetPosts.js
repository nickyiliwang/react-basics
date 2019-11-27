import React, { Component } from "react";
import axios from "axios";
import RenderPosts from './RenderPosts'

export default class GetPosts extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <RenderPosts posts={this.state.posts} />
      </div>
    );
  }
}
