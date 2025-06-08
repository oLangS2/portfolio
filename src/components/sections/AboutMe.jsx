import React from 'react'

const AboutMe = () => {
  return (
    <div className="section" id="about">
      <div className="section_wrap about_wrap">
        <span className="title">
          👩‍💻<br />
          일관된 가치로 개발하고 있습니다.
        </span>
        <section className="flex justify-start gap-30">
          <div className="box">
            <span>Modern Frontend</span>
            <strong>모던 프론트엔드 개발</strong>
            <p>
              React와 Vite 기반의 프론트엔드 개발 경험을 보유하고 있으며, JavaScript에 능숙합니다.
              TypeScript, Vue, Next.js 등 다양한 기술을 도입하며 지속적으로 성장하고 있습니다.
            </p>
          </div>
          <div className="box">
            <span>User-Centered</span>
            <strong>사용자 중심의 관점</strong>
            <p>
              '시용자'에게 꼭 필요한 것인지 고민하여 직관적인 UI를 설계하고, 웹 성능 분석 도구를 활용한 개선 작업을 병행합니다.
            </p>
          </div>
          <div className="box">
            <span>Teamwork</span>
            <strong>유연한 팀워크</strong>
            <p>
              Github 이용한 협업 경험이 있으며, Slack, Notion, Figma 등의 협업 도구 사용 경험도 있습니다.
              협업의 흐름 속에서, 완성도 높은 결과를 만듭니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutMe