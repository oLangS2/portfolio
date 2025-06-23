import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import noteData from "../../data/note";
import NotionSlide from '../notionSlide/NotionSlide';

const notion = () => {
  return (
    <div id="notion">
        <div className="notion_wrap">
          <div className="title">
            📝<br />
            업무에 필요한 팁과 문제해결 과정을 기록하고 공유합니다.
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            spaceBetween={20}
            slidesPerView={3.5}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              769: {
                slidesPerView: 3.5,
              },
            }}
            loop={false}
            grabCursor={true}
            simulateTouch={true}
            allowTouchMove={true}
          >
            {noteData.map((p)=> (
                <SwiperSlide key={p.id}>
                  <NotionSlide data={p} />
                </SwiperSlide>
            ))}
            {/* 커스텀 버튼 */}
            <div className="navigation_wrap flex gap-10">
              <div className="custom-prev swiper-button-prev">
                <AiOutlineLeft size={16}/>
              </div>
              <div className="custom-next swiper-button-next">
                <AiOutlineRight size={16}/>
              </div>
            </div>
          </Swiper>

        </div>
    </div>
  )
}

export default notion