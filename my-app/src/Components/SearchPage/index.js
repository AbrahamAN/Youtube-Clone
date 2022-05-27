import React from "react";
import { TuneOutlined } from "@mui/icons-material";
import "./SearchPage.css";
import { VideoRow } from "../../Utils/VideoRow/index";
import { ChannelRow } from "../../Utils/ChannelRow/index";

function SearchPage() {
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
        subs="660k"
        noOfVideos={382}
        description="you can find awesome programming lessons here !Also ,
        expect programming tips and tricks that will
        take your coding skills  to the..."
      />
      <hr />
      <h3 className="searchPage__Subtitle">Latest from Clever Programmer </h3>
      <VideoRow
        description=" Do you want a FREE one hour training, just LIKED the video :D"
        subs="659k"
        views="1.4M"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lest Build a Youtube Clone  With React JS for Beginners "
        image="	https://i.ytimg.com/vi/CG__N4SS1Fc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBi98gxuTQYjuKoKSuKaPf9Z5piWg"
      />
      <VideoRow
        description=" Today is the moment"
        subs="3 M"
        views="2.5M"
        timestamp="2 days"
        channel="Simon Petty"
        title="15 REASONS FOR LEARN REACT "
        image="https://i.ytimg.com/vi/2SO0RclVBuQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCMsA1hhIec2V3bFrhF4UyVDmj97A"
      />
      <VideoRow
        description=" Disney please STOP"
        subs="5M"
        views="1M"
        timestamp="10 days ago"
        channel="Clever Programmer"
        title="Disney are you crazy ? "
        image="https://i.ytimg.com/vi/R_OERlafbmw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBGQYM8yNmkykRdZWXGn_dx9usTOg"
      />
      <VideoRow
        description=" Are you Hungry ? Just Open uber eats"
        subs="100K"
        views="60K"
        timestamp="1 Hour ago"
        channel="Leonardo Dicaprio"
        title="Uber Eats or Rappi Who is better "
        image="https://i.ytimg.com/vi/jmvbhuJXFow/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA9nfYS_tFQFI6y2z7piXOatJYMnA"
      />
      <VideoRow
        description=" Trading all the time with binance"
        subs="355K"
        views="2K"
        timestamp="50 minutes ago"
        channel="Leonardo Dicaprio"
        title="Do you want to learn how to trade? 12k Ez "
        image="https://i.ytimg.com/vi/urtrRYC3vI4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBl_C9X9HS6zHxFfW7biCXP6DBVnQ"
      />
      <VideoRow
        description=" AMAZON is insane more that i thought"
        subs="6k"
        views="5M"
        timestamp="1 minute ago"
        channel="Clever Programmer"
        title="Builds Amazon Clone INSANE... "
        image="	https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAQhP-fa4hpoVZvk3TgJ4G3cWDWTg"
      />
      <VideoRow
        description=" Do you want a FREE one hour training, just LIKED the video :D"
        subs="3M"
        views="1.3M"
        timestamp="30 seconds ago"
        channel="Clever Programmer"
        title="Lest Build a LinkedIn Clone  With React JS  "
        image="https://i.ytimg.com/vi/xP3cxbDUtrc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB3iLEtMXzcZY4sLqmhpT1G4H-iPQ"
      />
      <VideoRow
        description=" Do you want a FREE one hour training, just LIKED the video :D"
        subs="600 K"
        views="3 M"
        timestamp="56 seconds ago"
        channel="Clever Programmer"
        title="Learn JS with 8 hours with this course LEST GOOO  "
        image="	https://i.ytimg.com/vi/Qqx_wzMmFeA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAZL9Ldmue5DGEbP8XFu-dqWljy8g"
      />
      <VideoRow
        description=" Do you want a FREE one hour training, just LIKED the video :D"
        subs="10M"
        views="10 M"
        timestamp="3 hours"
        channel="Clever Programmer"
        title="One day like a PROGRAMMER "
        image="https://i.ytimg.com/vi/QjMJsQx_O7o/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDqJgP5o08crC3dAm4lQONVOkSspg"
      />
      <VideoRow
        description=" Do you want a FREE one hour training, just LIKED the video :D"
        subs="100M"
        views="1.4M"
        timestamp="10  Days ago"
        channel="Clever Programmer"
        title="Wanna know how to get a JOB ? come  "
        image="	https://i.ytimg.com/vi/PB_fVx_wgDo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBBDl7IFlLofzqHYu_UTTRoJn1t1g"
      />
      <VideoRow
        subs="700K"
        description=" Do you want a FREE one hour training, just LIKED the video :D"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        views="1.4M"
        title="140 k For year , Come to see the changelle "
        image="https://i.ytimg.com/vi/uZ8SMkRf3s4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCldmHW79i8JjXuji89hwv_kffI0A"
      />
    </div>
  );
}

export { SearchPage };
