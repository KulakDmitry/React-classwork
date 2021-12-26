import React, { Component } from "react";

import { ReactComponent as LikeIcon } from "../../icons/instagram-like.svg";
import { ReactComponent as ShareIcon } from "../../icons/instagram-share.svg";
import { ReactComponent as CommentIcon } from "../../icons/instagram-comment.svg";

class Actions extends Component {
  render() {
    const { likes } = this.props;
    return (
      <div className="p-4">
        <div className="flex">
          <LikeIcon className="w-8 h-8 cursor-pointer mr-4" />
          <ShareIcon className="w-8 h-8 cursor-pointer mr-4" />
          <CommentIcon className="w-8 h-8 cursor-pointer" />
        </div>
        <p className="font-bold mt-2">
          {likes === 1 ? `${likes} like` : `${likes} likes`}
        </p>
      </div>
    );
  }
}

export default Actions;
