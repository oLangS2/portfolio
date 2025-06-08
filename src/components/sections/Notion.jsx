import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { IoIosArrowForward } from "react-icons/io";
import { CgChevronRightO, CgChevronLeftO } from "react-icons/cg";

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
            slidesPerView={4.5}
            loop={false}
          >
            <SwiperSlide>
              <a className="box" href='https://infrequent-accordion-3ab.notion.site/CSS-1fc049798a358026a165f3f9ac5022a0' target='_blank'>
                <p>Shopby 사전 검토 및 파일럿 테스트</p>
                <span>2025.01.27</span>
                <div className="icon">
                  해당 글로 이동<IoIosArrowForward />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
            <a className="box" href='https://infrequent-accordion-3ab.notion.site/CSS-1fc049798a358026a165f3f9ac5022a0' target='_blank'>
                <p>Shopby 사전 검토 및 파일럿 테스트</p>
                <span>2025.01.27</span>
                <div className="icon">
                  해당 글로 이동<IoIosArrowForward />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
            <a className="box" href='https://infrequent-accordion-3ab.notion.site/CSS-1fc049798a358026a165f3f9ac5022a0' target='_blank'>
                <p>Shopby 사전 검토 및 파일럿 테스트</p>
                <span>2025.01.27</span>
                <div className="icon">
                  해당 글로 이동 <IoIosArrowForward />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
            <a className="box" href='https://infrequent-accordion-3ab.notion.site/CSS-1fc049798a358026a165f3f9ac5022a0' target='_blank'>
                <p>Shopby 사전 검토 및 파일럿 테스트</p>
                <span>2025.01.27</span>
                <div className="icon">
                  해당 글로 이동<IoIosArrowForward />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
            <a className="box" href='https://infrequent-accordion-3ab.notion.site/CSS-1fc049798a358026a165f3f9ac5022a0' target='_blank'>
                <p>Shopby 사전 검토 및 파일럿 테스트</p>
                <span>2025.01.27</span>
                <div className="icon">
                  해당 글로 이동<IoIosArrowForward />
                </div>
              </a>
            </SwiperSlide>
            {/* 커스텀 버튼 */}
            <div className="navigation_wrap flex gap-10">
              <div className="custom-prev swiper-button-prev">
                <CgChevronLeftO size={50}/>
              </div>
              <div className="custom-next swiper-button-next">
                <CgChevronRightO size={50}/>
              </div>
            </div>
          </Swiper>

        </div>
    </div>
  )
}

export default notion