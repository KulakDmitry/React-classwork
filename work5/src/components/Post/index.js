import React, { Component } from "react";

import Image from "./image";
import Header from "./Header";
import Actions from "./Actions";
import Caption from "./Caption";
import Comments from "./Comments";
import PropTypes from "prop-types";

class Post extends Component {
  constructor(props) {
    super(props);
    this.commentInputRef = React.createRef();
  }

  handleCommentClick = () => {
    this.commentInputRef.current.focus();
  };
  render() {
    const { post, onAddComment, currentUser } = this.props;

    return (
      <div className="border rounded border-black col-span-3">
        <Header username={post.username} userpics={post.userpics} />
        <Image src={post.src} caption={post.caption} />
        <Actions likes={post.likes} onCommentClick={this.handleCommentClick} />
        <Caption username={post.username} caption={post.caption} />
        <Comments
          comments={post.comments}
          commentInput={this.commentInputRef}
          onAddComment={onAddComment}
          currentUser={currentUser}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    userpics: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onAddComment: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
