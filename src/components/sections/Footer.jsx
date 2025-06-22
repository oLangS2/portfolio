import React from 'react';

const footer = () => {
  return (
    <div id="footer">
        <div className="footer_wrap">
          <div className="box">
            <div className="title">
              봐주셔서 감사합니다 :)<br />
            </div>
            <p>
              {/* 낯선 기술에도 두려움 없이 도전하며 끊임없이 성장하겠습니다. <br /> */}
              효율적인 사용자 경험을 만들어내는 프론트엔드 개발자가 되어 <br />
              회사와 팀에 실질적인 가치를 더하겠습니다.
            </p>
            <a href="https://infrequent-accordion-3ab.notion.site/Front-End-1b3049798a358099bfefe87eb8f8d2bb?pvs=74" target="_blank" rel="noopener noreferrer" className='notion_link'>
              Notion
            </a>
            <a href="https://github.com/oLangS2" target="_blank" rel="noopener noreferrer" className='git_link'>
              Github
            </a>
          </div>
        </div>
    </div>
  )
}

export default footer