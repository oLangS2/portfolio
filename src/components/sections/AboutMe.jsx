import React, { useState } from 'react'
import about01 from "../../assets/images/about_1.png"
import about02 from "../../assets/images/about_2.jpg"
import about03 from "../../assets/images/about_3.png"

const aboutData = [
  {
    sub: "Modern Frontend",
    title: "모던 프론트엔드 개발",
    desc: "React와 Vite 기반의 프론트엔드 개발 경험을 보유하고 있으며, JavaScript에 능숙합니다. 프로젝트 외에 TypeScript, Vue, Next.js 등 다양한 기술을 실습하며 지속적으로 성장하고 있습니다.",
    img: about01,
  },
  {
    sub: "User-Centered",
    title: "사용자 중심의 관점",
    desc: "'사용자'에게 꼭 필요한 것인지 고민하여 직관적인 UI를 설계하고, 웹 성능 분석 도구를 활용한 개선 작업을 병행합니다.",
    img: about02,
  },
  {
    sub: "Teamwork",
    title: "유연한 팀워크",
    desc: "Github 이용한 협업 경험이 있으며, Slack, Notion, Figma 등의 협업 도구 사용 경험도 있습니다. 협업의 흐름 속에서, 완성도 높은 결과를 만듭니다.",
    img: about03,
  },
];

const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState([false, false, false]); // more_btn 상태값

  const handleToggle = (index) => {
    setActiveIndex((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };
  
  console.log(activeIndex)

  return (
    <div className="section" id="about" data-aos="fade-up"> 
      <div className="section_wrap about_wrap">
          <header>
            <h3 className='title'>About</h3>
            <p>일관된 가치로 개발하고 있습니다.</p>
          </header>
          {aboutData.map((item, i) => (
            <article className="flex" key={i} onClick={() => handleToggle(i)}>
              <span className="sub_tt">{item.sub}</span>

              <div className={`desc flex ${activeIndex[i] ? "active" : ""}`}>
                <div className="left">
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
                <img src={item.img} alt="" />
              </div>

              <button
                type="button"
                className={`more_btn ${activeIndex[i] ? "active" : ""}`}
              />
            </article>
          ))}

      </div>
    </div>
  )
}

export default AboutMe