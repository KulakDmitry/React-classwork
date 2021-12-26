import React, { Component } from "react";

const COMMENTS_MIN_COUNT = 3;

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentSlice: COMMENTS_MIN_COUNT,
    };
  }

  handleViewMoreComments = () => {
    const { commentSlice } = this.state;
    this.setState({
      commentSlice: commentSlice + COMMENTS_MIN_COUNT,
    });
  };
  render() {
    const { comments } = this.props;
    const { commentSlice } = this.state;
    return (
      <div className="p-4 pt-0">
        {comments.slice(0, commentSlice).map((com) => (
          <p key={com.username} className="mb-1">
            <a href="#">
              <span className="font-bold mr-1">{com.username}</span>
            </a>

            <span>{com.text}</span>
          </p>
        ))}
        {comments.length > 3 && commentSlice < comments.length && (
          <button
            onClick={this.handleViewMoreComments}
            type="button"
            className="cursor-pointer text-gray-400"
          >
            View more comments
          </button>
        )}
      </div>
    );
  }
}

export default Comments;
