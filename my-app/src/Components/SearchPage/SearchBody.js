import React, { useEffect, useState } from "react";
import { TuneOutlined } from "@mui/icons-material";
import "./SearchPage.css";
import { VideoRow } from "../../Utils/VideoRow/index";
import { ChannelRow } from "../../Utils/ChannelRow/index";

const humanize = () => {
  return Intl.NumberFormat("en", { notation: "compact" }).format(
    Math.floor(Math.random() * (10000000 - 10000) + 10000)
  );
};

const dateHumanize = () => {
  return Intl.NumberFormat("en", { notation: "compact" }).format(
    Math.floor(Math.random() * (10 - 1) + 1)
  );
};

function SearchBody(props) {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs={humanize()}
        noOfVideos={382}
        description="you can find awesome programming lessons here !Also ,
        expect programming tips and tricks that will
        take your coding skills  to the..."
      />
      <hr />
      <h3 className="searchPage__Subtitle">Latest from Clever Programmer </h3>
      {console.log(props.searchVideos)}
      {props.searchVideos.map((searchVideo) => {
        return (
          <VideoRow
            key={searchVideo.id.videoId}
            description={searchVideo.snippet.description}
            subs={humanize()}
            views={humanize()}
            timestamp={dateHumanize() + "days a ago"}
            channel={searchVideo.snippet.channelTitle}
            title={searchVideo.snippet.title}
            image={searchVideo.snippet.thumbnails.medium.url}
          />
        );
      })}
    </div>
  );
}

export { SearchBody };
