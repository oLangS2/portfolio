import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const NotionSlide = ({ data }) => {
  return (
    <a className="box" href={data.link} target='_blank'>
        <p>{data.title}</p>
        <span>{data.date}</span>
        <div className="icon">
        해당 글로 이동<IoIosArrowForward />
        </div>
    </a>
  )
}

export default NotionSlide;