import React, { Component } from "react";

import Image from "./image";
import Header from "./Header";
import Actions from "./Actions";
import Caption from "./Caption";
import Comments from "./Comments";
class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="border rounded border-black col-span-3">
        <Header username={post.username} userpics={post.userpics} />
        <Image src={post.src} caption={post.caption} />
        <Actions likes={post.likes} />
        <Caption username={post.username} caption={post.caption} />
        <Comments comments={post.comments} />
      </div>
    );
  }
}

export default Post;
