import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import notion_bg_1 from "../../assets/images/notion_bg_1.jpg"
import notion_bg_2 from "../../assets/images/notion_bg_2.jpg"
import notion_bg_3 from "../../assets/images/notion_bg_3.jpg"
import notion_bg_4 from "../../assets/images/notion_bg_4.jpg"
import notion_bg_5 from "../../assets/images/notion_bg_5.jpg"
import notion_bg_6 from "../../assets/images/notion_bg_6.jpg"

const NotionSlide = ({ data }) => {
  const imageMap = {
    notion_bg_1,
    notion_bg_2,
    notion_bg_3,
    notion_bg_4,
    notion_bg_5,
    notion_bg_6,
  };

  const bgImage = imageMap[data.image];

  const backgroundImage = {
    backgroundImage: `url(${bgImage})`,
  };


  return (
    <>
      <a className="box" href={data.link} target='_blank' >
        <p>{data.title}</p>
        <span>{data.date}</span>
        <div className="icon">
          해당 글로 이동<IoIosArrowForward />
        </div>
        <div className="bg" style={backgroundImage}></div>
      </a>
    </>
  )
}

export default NotionSlide;