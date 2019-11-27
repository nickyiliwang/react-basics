import React, { Component } from "react";
// import RenderSinglePost from "./RenderSinglePost";

export default class RenderPosts extends Component {
  render() {
    return (
      <div>
        {this.props.posts === null
          ? console.log('nothing')
          : console.log(this.props.posts)}
      </div>
    );
  }
}

// return <div>
// {this.props.posts === null ?  : {this.props.posts.forEach(post => {
//   return <RenderSinglePost />;
