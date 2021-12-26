import React, { Component } from "react";
import Post from "./components/Post";
import img from "./pictures/fog.jpg";
import userImg from "./pictures/fog.jpg";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = {
      src: img,
      caption: "description",
      username: "username",
      userpics: userImg,
      likes: 11,
      comments: [
        { text: "text comment", username: "comment" },
        { text: "text comment2", username: "comment2" },
        { text: "text comment3", username: "comment3" },
        { text: "text comment4", username: "comment4" },
        { text: "text comment5", username: "comment5" },
        { text: "text comment6", username: "comment6" },
        { text: "text comment7", username: "comment7" },
        { text: "text comment8", username: "comment8" },
        { text: "text comment9", username: "comment9" },
      ],
    };
    return (
      <div className="grid grid-cols-3 mx-auto max-w-screen-md">
        <Post post={post} />
      </div>
    );
  }
}

export default App;
