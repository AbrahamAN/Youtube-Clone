import React from "react";
import "./ChannelRow.css";
import Avatar from "@mui/material/Avatar";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import VerifiedIcon from "@mui/icons-material/Verified";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {" "}
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} Subscribers • {noOfVideos} Videos
        </p>
        <p>{description}</p>
      </div>
      <div className="channelRow__Activity">
        <button className="channelRow__Sub">SUBSCRIBE</button>
        <AddAlertIcon className="channelRow__Alert" />
      </div>
    </div>
  );
}

export { ChannelRow };
