import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";

const VideoCard = ({
  image,
  title,
  channelName,
  views,
  timestamp,
  channelLogo,
}) => {
  return (
    <div className="videoCard">
      <img
        className="videoCard__thumbnail"
        src={image}
        alt={`${channelName}'s thumbnail`}
      />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channelName}
          src={channelLogo}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views}•{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
