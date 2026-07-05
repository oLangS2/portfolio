import jinro1 from '../assets/images/jinro_1.png';
import jinro2 from '../assets/images/jinro_2.png';
import jinro3 from '../assets/images/jinro_3.png';
import jinro4 from '../assets/images/jinro_4.png';
import ns1 from '../assets/images/ns_1.png';
import ns2 from '../assets/images/ns_2.png';
import hddf1 from '../assets/images/hddf_8.png';
import hddf2 from '../assets/images/hddf_2.png';
import hddf3 from '../assets/images/hddf_11.png';
import hddf4 from '../assets/images/hddf_12.png';
import dr1 from '../assets/images/dr_1.png';
import dr2 from '../assets/images/dr_2.png';
import ac1 from '../assets/images/ac_1.png';
import ac2 from '../assets/images/ac_2.png';
import fd1 from '../assets/images/fd_1.png';
import fd2 from '../assets/images/fd_2.png';

export const PROJECTS = [
    {
      id: 'jinro',
      kicker: 'React Full-cycle · ShopBy API',
      title: '진로토닉몰',
      desc: 'ShopBy 헤드리스 API 기반 React 쇼핑몰 · 컴포넌트 설계·개발·배포 80% 단독 수행',
      gradient: 'linear-gradient(140deg, #0A50EA, #6366F1)',
      badge: 'React Full-cycle',
      num: '01',
      metrics: [
        { val: '80%', lbl: '단독 개발' },
        { val: '6M',  lbl: '설계 → 배포' },
        { val: '20+', lbl: '컴포넌트'  },
      ],
      tags: ['React', 'ShopBy API', 'SCSS'],
      screenshots: [
        { src: jinro1, label: '메인 · 상품 화면'  },
        { src: jinro2, label: '장바구니 · 주문'   },
        { src: jinro3, label: '마이페이지'        },
        { src: jinro4, label: '모바일 반응형'     },
      ],
      star: {
        s: 'ShopBy 플랫폼 기반으로 신규 쇼핑몰을 구축하게 됐는데, 외부 API 스펙을 문서만 보고 처음부터 직접 파악해야 하는 상황이었습니다',
        t: '컴포넌트 설계부터 배포까지 전 과정을 혼자 주도해야 했습니다',
        a: '메인, 상품상세, 장바구니, 마이페이지 등 주요 페이지를 재사용 가능한 컴포넌트 단위로 설계하고 개발했습니다',
        r: '일정 내에 런칭을 완료했고, 재사용 컴포넌트 구조 덕분에 이후 유지보수 공수도 줄일 수 있었습니다',
      },
      troubleshooting: [
        {
          tag: '로직',
          q: '복합 쿠폰 조건 분기 이슈',
          p: '[문제] 상품 쿠폰이랑 장바구니 쿠폰의 적용 조건이 달라서, 쿠폰 불가 상품이 섞여 있으면 전체 쿠폰 흐름이 꼬이는 문제가 생겼습니다',
          d: '[원인] 쿠폰 적용 시점 데이터를 console.log로 확인 → 쿠폰 불가 상품에도 쿠폰이 노출되는 구조였습니다',
          s: '[해결] 쿠폰 대상 기준으로 데이터를 먼저 분리하고, 불가 플래그로 사전 필터링해서 유효한 쿠폰만 보이도록 수정했습니다',
          r: '[회고] 조건 분기가 복잡할수록 유스케이스별 테스트 케이스를 미리 정리해두는 게 중요하다는 걸 느꼈습니다',
        },
        {
          tag: '비동기',
          q: '수량 변경 시 서버에 이전 값이 전달되는 문제',
          p: '[문제] 장바구니 수량을 바꾸면 화면엔 반영되는데, 서버엔 변경 전 값이 그대로 넘어가고 있었습니다',
          d: '[원인] console.log로 state랑 API 요청 시점을 비교해보니 setState가 끝나기 전에 API가 먼저 호출되고 있었습니다',
          s: '[해결] useEffect로 API 호출 시점을 상태 업데이트 이후로 분리해서 해결했습니다',
          r: '[회고] 상태 변경 직후 API 호출이 필요한 경우엔 useEffect로 시점을 명확히 나눠야 한다는 걸 직접 체감했습니다',
        },
      ],
      links: {
        live:   'https://www.jinrotonic.com/',
      },
    },
    {
      id: 'hddf',
      kicker: 'E-commerce UX & Publishing',
      title: '현대면세점',
      desc: '주요 서비스 리뉴얼 · 운영 퍼블리싱 · 공통 템플릿 구축',
      gradient: 'linear-gradient(140deg, #7C3AED, #A855F7)',
      badge: '대형 이커머스 고도화',
      num: '02',
      metrics: [
        { val: '8+', lbl: '리뉴얼 프로젝트'},
        { val: '40+',  lbl: '이벤트 페이지' },
        { val: '30%', lbl: '일정 단축'  },
      ],
      tags: ['JavaScript','CSS','GA4'],
      screenshots: [
        { src: hddf1, label: '메인 · 상품 화면'  },
        { src: hddf2, label: '장바구니 · 주문'   },
        { src: hddf3, label: '메인 · 상품 화면'  },
        { src: hddf4, label: '장바구니 · 주문'   },
      ],
      star: {
        s: '주요 서비스 리뉴얼을 단독으로 담당하면서, 이벤트 페이지마다 코드 스타일이 제각각이라 유지보수가 어려운 상황이었습니다',
        t: '퍼블리싱 품질은 유지하면서, 반복 작업을 줄이고 팀 전체 운영 효율을 높일 수 있는 구조를 만들어야 했습니다',
        a: '명품관·브랜드관·로그인·웰니스관 리뉴얼을 단독으로 수행했고, 주요 요소에 GA4 이벤트 태깅과 Omnibug 검증으로 데이터 정확성을 확보했습니다 이벤트 페이지는 공통 템플릿과 스니펫으로 정리해서 팀에 공유했습니다',
        r: '리뉴얼을 일정 내 완수했고, 공통 템플릿 덕분에 이벤트 제작 속도랑 코드 일관성이 올라가서 유지보수랑 협업 효율도 같이 개선됐습니다',
      },
      troubleshooting: [
      ],
      links: {
        live:   'https://www.hddfs.com/shop/dm/main.do',
      },
    },
    {
      id: 'ns',
      kicker: 'Cafe24 쇼핑몰 운영 · 게임형 이벤트 제작 · React 백오피스 개발',
      title: '농심몰',
      desc: '게임형 이벤트 제작부터 React 기반 운영 도구 개발까지 담당',
      gradient: 'linear-gradient(140deg, #DD1E25, #EC4899)',
      badge: '운영 고도화 · React BO 개발',
      num: '03',
      metrics: [
        { val: '30%', lbl: '운영 공수 절감' },
        { val: '10+', lbl: '게임형 이벤트' },
        { val: '1',  lbl: 'React BO 구축' },
      ],
      tags: ['React','Axios', 'SCSS','Cafe24',],
      screenshots: [
        { src: ns1,   label: '메인 · 상품 화면'  },
        { src: ns2,   label: '장바구니 · 주문'   },
      ],
      star: {
        s: 'Cafe24 기반 쇼핑몰을 운영하면서, 신규 숏폼 페이지 구축이랑 백오피스 개발이 동시에 필요한 상황이었습니다',
        t: '게임형 이벤트 월 1회 정기 제작, 숏폼 페이지 구축, React 백오피스 설계 및 API 연동을 담당했습니다',
        a: 'CSS·JavaScript로 게임형 이벤트를 구현하고, React로 백오피스를 직접 설계해서 Cafe24 와 연동했습니다 콘텐츠 등록·관리 기능까지 직접 구현했습니다',
        r: '쇼핑몰 운영과 신규 페이지 구축을 일정 내 완수했으며, 운영자가 직접 관리 가능한 운영 환경을 완성해 운영 공수를 30% 절감할 수 있었습니다',
      },
      troubleshooting: [
        {
          tag: 'Routing',
          q: '보안 식별값을 노출하지 않으면서 직관적인 URL 구조 만들기',
          p: '[문제점] 백엔드에서 받은 카테고리 식별값이 보안상 영문·숫자 혼합 형태라, 클라이언트가 원하는 직관적인 URL 구조를 그대로 제공하기가 어려웠습니다',
          s: '[해결] 프론트에서 한글 카테고리명을 slug 형태로 변환하고, 라우터 경로에 매핑해서 사용자 친화적인 URL로 구현했습니다',
          r: '[회고] 보안이랑 사용성 사이에서 균형을 잡는 게 중요하고, URL 구조도 프론트에서 전략적으로 설계해야 한다는 걸 경험했습니다',
        },
        {
          tag: 'Infinite Scroll',
          q: 'ㅋㅋㅋTV 리스트 페이지의 무한 스크롤 구현',
          p: '[문제점] 추가 데이터를 불러오는 동안 화면이 비어 보여서, 사용자가 로딩 중인지 알기 어려운 상태였습니다',
          s: '[해결] 결	Skeleton UI를 적용해서 로딩 상태를 시각적으로 표현하고, 콘텐츠가 자연스럽게 이어지도록 구현했습니다',
          r: '[결과] 로딩 중 빈 화면 대신 Skeleton을 쓰면 사용자 입장에서 훨씬 자연스러운 탐색 경험을 줄 수 있다는 걸 느꼈습니다',
        },
      ],
      links: {
        live:   'https://www.nongshimmall.com',
      },
    },
    {
      id: 'dr',
      kicker: 'Cafe24 쇼핑몰 구축 · React 백오피스 개발',
      title: '닥터포헤어',
      desc: '쇼핑몰 구축부터 React 기반 운영 도구 개발까지 담당',
      gradient: 'linear-gradient(140deg, #EA580C, #F59E0B)',
      badge: '신규 구축 · React BO 개발',
      num: '04',
      metrics: [
        { val: '50%', lbl: '구축 참여' },
        { val: '1',  lbl: 'React BO 구축' },
        { val: 'API', lbl: '연동 구현'  },
      ],
      tags: ['React', 'Axios', 'SCSS', 'Cafe24'],
      screenshots: [
        { src: dr2,   label: '메인 · 상품 화면'  },
        { src: dr1,   label: '장바구니 · 주문'   },
      ],
      star: {
        s: '신규 Cafe24 쇼핑몰 구축과 운영을 위한 React 백오피스 개발이 동시에 필요한 프로젝트였습니다',
        t: '쇼핑몰과 백오피스를 안정적으로 구축하고, React 백오피스 설계 및 API 연동을 담당했습니다',
        a: '쇼핑몰 퍼블리싱을 진행하는 동시에 React 기반 백오피스를 직접 설계했습니다 API 연동을 통해 콘텐츠 등록·수정 기능을 구현하고 쇼핑몰과 데이터를 연계하는 운영 구조를 구축했습니다',
        r: '신규 쇼핑몰과 백오피스를 모두 성공적으로 구축했으며, 운영자가 직접 관리 가능한 운영 환경을 완성했습니다',
      },
      troubleshooting: [
        {
          tag: 'Image Upload',
          q: 'BO - 이미지 업로드 방식 결정 과정에서의 연동 및 기획 이슈',
          p: '[문제점] 초기에 FormData 방식으로 구현을 계획했는데, 프론트 구현과 디버깅 과정에서 복잡도가 높아졌고 백엔드 연동 시 포맷 오류가 반복 발생했습니다',
          s: '[해결] 기획팀과 협의해 이미지가 저용량 1건 제한이라는 점을 고려해 base64 방식으로 전환했고, 백엔드와 포맷을 합의한 뒤 안정적으로 업로드 처리를 완료했습니다',
          r: '[회고] 기술 선택은 상황에 따라 유연하게 접근해야 하며, 기획·백엔드와의 소통을 통해 목적에 맞는 최적의 방식으로 조정하는 것이 중요하다는 걸 경험했습니다',
        },
        {
          tag: 'Cafe24 UI',
          q: '디자인 시안과 플랫폼 구조 불일치',
          p: '[문제점] Figma 시안과 Cafe24 기본 모듈 구조가 달라 UI 구현 충돌이 발생했습니다',
          s: '[해결] 플랫폼 제약사항을 디자인팀과 공유하고, 구조에 맞게 시안을 조정해서 퍼블리싱을 진행했습니다',
          r: '[회고] 플랫폼 구조를 유지하면서도 디자인 의도를 최대한 반영한 UI를 구현할 수 있었습니다',
        },
      ],
      links: {
        live:   'https://www.drforhair.co.kr/',
      },
    },
    {
      id: 'ac',
      kicker: 'Cafe24 쇼핑몰 운영',
      title: '아윤채몰',
      desc: '프로모션에 따른 UI·콘텐츠 유지보수 및 Cafe24 쇼핑몰 운영',
      gradient: 'linear-gradient(140deg, #059669, #14B8A6)',
      badge: 'Cafe24 쇼핑몰 운영',
      num: '05',
      metrics: [
      ],
      tags: ['Axios', 'JavaScript', 'CSS','Cafe24',],
      screenshots: [
        { src: ac1,   label: '메인 · 상품 화면'  },
        { src: ac2,   label: '장바구니 · 주문'   },
      ],
      star: {
        s: '프로모션 및 시즌별 콘텐츠 변경이 빈번한 Cafe24 쇼핑몰 운영을 담당했습니다',
        t: '운영 일정에 맞춰 UI 및 콘텐츠를 안정적으로 반영해야 했습니다',
        a: '상품 상세페이지, 메인 화면, 프로모션 영역의 UI 및 콘텐츠를 수정하고, Cafe24 관리자 기능을 활용해 운영을 지원했습니다',
        r: '운영 일정에 맞춰 콘텐츠를 안정적으로 반영하고 쇼핑몰 품질을 유지했습니다',
      },
      troubleshooting: [
        
      ],
      links: {
        live:   'https://ayunche.com/index.html',
      },
    },
    {
      id: 'fd',
      kicker: 'UI 개선 · Cafe24 쇼핑몰 운영',
      title: '후디스몰',
      desc: '주요 화면 리뉴얼 및 Cafe24 쇼핑몰 운영',
      gradient: 'linear-gradient(140deg, #334155, #64748B)',
      badge: 'Cafe24 쇼핑몰 운영',
      num: '06',
      metrics: [
      ],
      tags: ['Cafe24', 'JavaScript', 'CSS'],
      screenshots: [
        { src: fd2,   label: '메인 · 상품 화면'  },
        { src: fd1,   label: '장바구니 · 주문'   },
      ],
      star: {
        s: 'Cafe24 기반 쇼핑몰의 주요 화면 개선 및 운영 퍼블리싱이 필요한 상황이었습니다',
        t: '사용성과 디자인 일관성을 고려한 UI 개선 및 프로모션 반영을 담당했습니다',
        a: '베스트 상품, 브랜드관, 헤더 등 주요 화면을 퍼블리싱하고, Figma 시안 기반으로 마크업 및 스타일을 개선했습니다 반응형 UI도 함께 적용했습니다',
        r: '프로모션 일정에 맞춰 안정적으로 운영을 지원했고, 사용자 경험을 향상시켰습니다',
      },
      troubleshooting: [
      ],
      links: {
        live:   'https://foodismall.com/',
      },
    },
  ]