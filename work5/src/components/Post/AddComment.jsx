import React, { Component } from "react";
import PropTypes from "prop-types";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }

  clearInput = () => {
    this.setState({
      comment: "",
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { comment } = this.state;
    const { onAddComment } = this.props;

    if (!comment.trim()) {
      return;
    }
    onAddComment(comment);
    this.clearInput();
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  render() {
    const { commentInput } = this.props;
    const { comment } = this.state;

    const isDisabled = !comment.trim();
    return (
      <form className="flex p-4" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="comment..."
          name="comment"
          className="w-full mr-4 px-4 py-2 text-grey-400 text-sm"
          ref={commentInput}
          onChange={this.handleCommentChange}
          value={comment}
        />
        <button
          type="submit"
          className={`text-sm text-blue-500 font-bold ${
            isDisabled ? "opacity-25" : ""
          }`}
          disabled={isDisabled}
        >
          Submit
        </button>
      </form>
    );
  }
}

AddComment.propTypes = {
  commentInput: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  onAddComment: PropTypes.func.isRequired,
};

export default AddComment;
