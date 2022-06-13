import React from "react";
import "./Sidebar.css";
import { SidebarRow } from "../../Utils/SidebarRow";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title=" Watch Later" />
      <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
      <hr />
    </div>
  );
}

export { Sidebar };
