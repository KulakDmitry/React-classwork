import React, { Component } from "react";
import AddComment from "./AddComment";
import PropTypes from "prop-types";

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
    const { comments, commentInput, onAddComment, currentUser } = this.props;
    const { commentSlice } = this.state;

    const [currentUserComments, otherComments] = comments.reduce(
      (result, currentComment) => {
        if (currentComment.username === currentUser.username) {
          result[0].push(currentComment);
        } else {
          result[1].push(currentComment);
        }
        return result;
      },
      [[], []]
    );

    const sortedComments = [...currentUserComments.reverse(), ...otherComments];

    return (
      <div className="px-4 pt-0">
        {sortedComments.slice(0, commentSlice).map((com, idx) => (
          <p key={idx} className="mb-1">
            <a href="#">
              <span className="font-bold mr-1">{com.username}</span>
            </a>

            <span>{com.text}</span>
          </p>
        ))}
        {sortedComments.length > 3 && commentSlice < sortedComments.length && (
          <button
            onClick={this.handleViewMoreComments}
            type="button"
            className="cursor-pointer text-gray-400"
          >
            View more comments
          </button>
        )}
        <AddComment commentInput={commentInput} onAddComment={onAddComment} />
      </div>
    );
  }
}

Comments.propTypes = {
  commentInput: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddComment: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comments;
