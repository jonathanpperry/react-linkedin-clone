import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>Sonny Sangha</h2>
          <p>Description here</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Like" color="gray" />
        <InputOption Icon={SendOutlined} title="Like" color="gray" />
      </div>
    </div>
  );
}

export default Post;
