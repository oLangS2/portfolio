import React from 'react'

const AboutMe = () => {
  return (
    <div className="section" id="about">
      <div className="about_wrap">
        <span className="title">핵심 역량</span>
        <div className="flex justify-start gap-10">
          <div className="box">
            <strong>모던 프론트엔드 개발</strong>
            <p>
              React와 Vite 기반의 프론트엔드 개발 경험을 보유하고 있으며, JavaScript에 능숙합니다.
              TypeScript, Vue, Next.js 등 다양한 기술을 도입하며 지속적으로 성장하고 있습니다.
            </p>
          </div>
          <div className="box">
            <strong>사용자 중심 개발 추구</strong>
            <p>
              다양한 사용자들이 편리하게 이용할 수 있도록 직관적이고 친숙한 UI 제공과 함께
              Chrome Lighthouse을 활용해 웹사이트의 성능을 측정하고 개선합니다.
            </p>
          </div>
          <div className="box">
            <strong>커뮤니케이션 및 협업</strong>
            <p>
              Github 이용한 협업 경험이 있으며, Slack, Notion 등의 협업 도구 사용 경험도 있습니다.
              기획, 디자인, 총무 등 다양한 직무 경험을 기반으로 다른 직군과 원활한 커뮤니케이션이 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe