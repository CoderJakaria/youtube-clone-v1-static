import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChannelRow.css";
import VerifiedIcon from "@material-ui/icons/CheckCircle";

const ChannelRow = ({
  image,
  channelName,
  verified,
  subscribers,
  numberOfVideo,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channelName} />
      <div className="channelRow__text">
        <h4>
          {channelName} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subscribers} subscribers • {numberOfVideo} videos
        </p>
        <p className="channelRow__description">{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
