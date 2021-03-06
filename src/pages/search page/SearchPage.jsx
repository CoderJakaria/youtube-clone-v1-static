import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../../components/channelRow/ChannelRow";
import VideoRow from "../../components/videoRow/VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon className="searchPage__filterIcon" />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
        channelName="Clever Programmer"
        verified
        subscribers="938k"
        numberOfVideo={572}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />
      <hr />

      <VideoRow
        views="274k"
        subscribers="938k"
        description="Here is the best free React JS programming course on the planet. Made with lots of โค๏ธ. Take your web development skills to the next level by building the Top Technology Websites on the planet ๐ฅ๐."
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBObe1ZE-8f36y5DRc6Dhwol-QOxg"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"
      />
      <VideoRow
        views="379k"
        subscribers="938k"
        description="๐ฅ In this Exclusive React VIDEO training, we will be covering...โ Learn how to build the FULL Amazon website with FULL E-Commerce Functionality ๐1๏ธโฃ Accounts and Login Page ๐จโ๐จโ๐งโ๐ฆ2๏ธโฃ Products Page ๐ฆ3๏ธโฃ Cart and Checkout Page  ๐4๏ธโฃ Real Payments ๐ณ5๏ธโฃ Order History Page ๐๐ ๏ธ And the tools & technologies you need to succeed as a Modern React JS developer... All of this Using React JS ๐ฅ"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
      />
      <VideoRow
        views="274k"
        subscribers="938k"
        description="Here is the best free React JS programming course on the planet. Made with lots of โค๏ธ. Take your web development skills to the next level by building the Top Technology Websites on the planet ๐ฅ๐."
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBObe1ZE-8f36y5DRc6Dhwol-QOxg"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"
      />
      <VideoRow
        views="379k"
        subscribers="938k"
        description="๐ฅ In this Exclusive React VIDEO training, we will be covering...โ Learn how to build the FULL Amazon website with FULL E-Commerce Functionality ๐1๏ธโฃ Accounts and Login Page ๐จโ๐จโ๐งโ๐ฆ2๏ธโฃ Products Page ๐ฆ3๏ธโฃ Cart and Checkout Page  ๐4๏ธโฃ Real Payments ๐ณ5๏ธโฃ Order History Page ๐๐ ๏ธ And the tools & technologies you need to succeed as a Modern React JS developer... All of this Using React JS ๐ฅ"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
      />
      <VideoRow
        views="274k"
        subscribers="938k"
        description="Here is the best free React JS programming course on the planet. Made with lots of โค๏ธ. Take your web development skills to the next level by building the Top Technology Websites on the planet ๐ฅ๐."
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBObe1ZE-8f36y5DRc6Dhwol-QOxg"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"
      />
      <VideoRow
        views="379k"
        subscribers="938k"
        description="๐ฅ In this Exclusive React VIDEO training, we will be covering...โ Learn how to build the FULL Amazon website with FULL E-Commerce Functionality ๐1๏ธโฃ Accounts and Login Page ๐จโ๐จโ๐งโ๐ฆ2๏ธโฃ Products Page ๐ฆ3๏ธโฃ Cart and Checkout Page  ๐4๏ธโฃ Real Payments ๐ณ5๏ธโฃ Order History Page ๐๐ ๏ธ And the tools & technologies you need to succeed as a Modern React JS developer... All of this Using React JS ๐ฅ"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
      />
      <VideoRow
        views="274k"
        subscribers="938k"
        description="Here is the best free React JS programming course on the planet. Made with lots of โค๏ธ. Take your web development skills to the next level by building the Top Technology Websites on the planet ๐ฅ๐."
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBObe1ZE-8f36y5DRc6Dhwol-QOxg"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"
      />
      <VideoRow
        views="379k"
        subscribers="938k"
        description="๐ฅ In this Exclusive React VIDEO training, we will be covering...โ Learn how to build the FULL Amazon website with FULL E-Commerce Functionality ๐1๏ธโฃ Accounts and Login Page ๐จโ๐จโ๐งโ๐ฆ2๏ธโฃ Products Page ๐ฆ3๏ธโฃ Cart and Checkout Page  ๐4๏ธโฃ Real Payments ๐ณ5๏ธโฃ Order History Page ๐๐ ๏ธ And the tools & technologies you need to succeed as a Modern React JS developer... All of this Using React JS ๐ฅ"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
      />
      <VideoRow
        views="274k"
        subscribers="938k"
        description="Here is the best free React JS programming course on the planet. Made with lots of โค๏ธ. Take your web development skills to the next level by building the Top Technology Websites on the planet ๐ฅ๐."
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBObe1ZE-8f36y5DRc6Dhwol-QOxg"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"
      />
      <VideoRow
        views="379k"
        subscribers="938k"
        description="๐ฅ In this Exclusive React VIDEO training, we will be covering...โ Learn how to build the FULL Amazon website with FULL E-Commerce Functionality ๐1๏ธโฃ Accounts and Login Page ๐จโ๐จโ๐งโ๐ฆ2๏ธโฃ Products Page ๐ฆ3๏ธโฃ Cart and Checkout Page  ๐4๏ธโฃ Real Payments ๐ณ5๏ธโฃ Order History Page ๐๐ ๏ธ And the tools & technologies you need to succeed as a Modern React JS developer... All of this Using React JS ๐ฅ"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
      />
      <VideoRow
        views="274k"
        subscribers="938k"
        description="Here is the best free React JS programming course on the planet. Made with lots of โค๏ธ. Take your web development skills to the next level by building the Top Technology Websites on the planet ๐ฅ๐."
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBObe1ZE-8f36y5DRc6Dhwol-QOxg"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"
      />
      <VideoRow
        views="379k"
        subscribers="938k"
        description="๐ฅ In this Exclusive React VIDEO training, we will be covering...โ Learn how to build the FULL Amazon website with FULL E-Commerce Functionality ๐1๏ธโฃ Accounts and Login Page ๐จโ๐จโ๐งโ๐ฆ2๏ธโฃ Products Page ๐ฆ3๏ธโฃ Cart and Checkout Page  ๐4๏ธโฃ Real Payments ๐ณ5๏ธโฃ Order History Page ๐๐ ๏ธ And the tools & technologies you need to succeed as a Modern React JS developer... All of this Using React JS ๐ฅ"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
        timestamp="6 months ago"
        channelName="Clever Programmer"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
      />
    </div>
  );
};

export default SearchPage;
