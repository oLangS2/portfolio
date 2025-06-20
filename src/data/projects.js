
const projectData = [
  {
    id: 1,
    people:"FE 3",
    link:"https://www.jinrotonic.com/",
    title: "진로토닉몰 쇼핑몰 구축 및 고도화",
    company: "하이트진로",
    period: "24.06 - 25.03",
    account:"Shopby 헤드리스 API를 활용하여 주요 기능을 개발하고 배포까지 작업완료 후, 월 1회 정기적 고도화 작업 진행",
    features: [
        {
          title: "핵심 사용자 흐름 기능 개발",
          descriptions: [
            "메인, 상품 상세, 장바구니, 주문, 마이페이지 등 주요 페이지 전반 구현",
            "카카오/네이버 간편 로그인 API 연동 및 사용자 인증 처리"
          ]
        },
        {
          title:"관리자 게시판의 CRUD 기능 구현",
          descriptions: [
            "게시글 조회, 등록, 수정, 삭제 기능을 React 기반으로 구현",
            "비동기 요청 중 에러 처리 및 로딩 상태 관리 경험",
            "이미지 업로드/수정 기능을 통해 FormData와 파일 서버 연동 처리 경험"
          ]
        },
        {
          title: "초기 로딩 UX 향상을 위한 스플래시 및 스피너 도입",
          descriptions: [
            "스플래시 화면은 세션 스토리지를 이용해 같은 세션 내 중복 표시 방지 처리",
            "API 응답 지연 시 스피너 적용으로 사용자 대기 인식 가능하도록 구현",
          ]
        },
        {
          title: "핫딜 상품 실시간 카운트다운 기능 구현",
          descriptions: [
            "종료 시각을 기반으로 한 실시간 타이머 구현",
            "타이머 종료 시 상품 자동 제거 처리로 사용자 혼란 방지"
          ]
        },
        {
          title: "회원 권한별 접근 제한된 게시판 구현",
          descriptions: [
            "비회원 접근 차단 및 로그인 유도 팝업 구현",
            "권한 가능한 회원만 조회 가능, 관리자만 등록/수정 가능하도록 권한 처리",           
          ]
        },
    ],
    trouble:[
      {
        title: "복합 쿠폰 적용 로직 처리 및 조건 분기 최적화 이슈",
        descriptions: [
          "[문제점] 주문 페이지에서 상품 쿠폰과 장바구니 쿠폰의 적용 조건이 상이하고, 특정 상품에 쿠폰이 적용 불가능할 경우 전체 쿠폰 적용 흐름에 영향을 주는 복잡한 로직이 존재함. 특히 상품 쿠폰은 개별 적용, 장바구니 쿠폰은 전체 적용 방식이 혼합되어 있어 예외 처리 및 충돌이 빈번히 발생함.",
          "[해결] 쿠폰 적용 대상(상품/장바구니)을 기준으로 쿠폰 데이터를 분리하고, 상품별 조건/쿠폰불가 플래그 등을 기준으로 사전에 필터링하는 로직을 추가하여 적용 가능한 쿠폰만 사용자에게 표시되도록 개선함.",
          "[회고] 조건 분기 로직은 한눈에 보이도록 설계하고, 유스케이스별 테스트 케이스 작성 필요성을 느낌"
        ]
      },
      {
        title: "장바구니 수량 변경 시 UI는 반영되지만 서버에는 반영되지 않는 현상",
        descriptions: [
          "[문제점] 장바구니에서 수량을 변경했을 때 UI에서는 정상적으로 수량이 바뀌었지만, 서버 요청에는 변경된 수량이 반영되지 않아 DB에 저장되지 않는 문제 발생",
          "[디버깅] console.log를 활용해 변경된 수량 상태(state)와 실제 API 요청 시점의 데이터를 비교하면서 확인한 결과, 상태가 아직 업데이트되기 전의 값이 API에 전달되고 있었음",
          "[해결] setState가 비동기적으로 처리된다는 점을 인지하고, useEffect 또는 이벤트 핸들러 내부에서 최신 상태를 보장하도록 구조 수정",
          "[회고] 상태 변화 이후 바로 API 호출이 필요한 경우, useEffect 또는 상태 콜백을 통해 시점을 명확히 분리해야 함을 체감"
        ]
      },
      {
        title: "Git 브랜치 관리 및 충돌 해결 과정에서의 협업 이슈",
        descriptions: [
          "[문제점] 다수 개발자가 동시에 동일 파일을 수정하며 빈번한 Git 충돌 발생",
          "[해결] Git Flow 전략 도입 충돌 최소화, 코드 리뷰 프로세스 정립",
          "[회고] 체계적인 브랜치 관리와 커뮤니케이션이 협업 효율성을 크게 향상시킴을 경험"
        ]
      }
    ],
    tech: ["React", "Shopby", "API", "SCSS"],
  },
  {
    id: 2,
    people:"FE 3, BE 2",
    link:"",
    title: "닥터포헤어 쇼핑몰 & BO 구축",
    company: "닥터포헤어",
    period: "25.01 - 25.03",
    account: "카페24 기반 쇼핑몰을 구축하고 게시판에서 백엔드 API를 통해 CRUD 기능을 구현",
    features: [
      {
        title: "카페24 관리 페이지 및 사용자 UI 유지보수",
        descriptions: [
          "",
        ]
      },
    ],
    trouble:"",
    tech: ["React","Cafe24", "JavaScript", "API", "SCSS"],
  },
  {
    id: 3,
    people:"FE 4, BE 3",
    link:"",
    title: "농심몰 이벤트 페이지 / 농심몰 TV & 농심몰 TV BO 구축",
    company: "농심",
    period: "상시 업무",
    account: " API를 활용하여 게임 이벤트 페이지를 제작하고, 농심몰 TV와 이를 관리하기 위한 백오피스를 개발",
    features: [
      {
        title: "카페24 관리 페이지 및 사용자 UI 유지보수",
        descriptions: [
          "",
        ]
      },
    ],
    trouble:"",
    tech: ["React", "API", "SCSS", "JavaScript"],
  },
  {
    id: 4,
    people:"FE 1",
    link:"",
    title: "후디스몰 UI 개선",
    company: "후디스",
    period: "상시 업무",
    account: "후디스몰 UI 개발",
    features: [
      {
        title: "카페24 관리 페이지 및 사용자 UI 유지보수",
        descriptions: [
          "",
        ]
      },
    ],
    trouble:"",
    tech: ["Cafe24", "SCSS", "JavaScript"],
  },
  {
    id: 5,
    people:"FE 1",
    link:"https://ayunche.com/index.html",
    title: "아윤채몰 & 아윤채 프로몰 카페24 쇼핑몰의 유지보수",
    company: "아윤채",
    period: "24.06 - 25.03",
    account: "카페24 기반 쇼핑몰의 기능 및 콘텐츠 유지보수 작업을 담당하며 상품/디자인/UI 관련 요청을 지속적으로 반영",
    features: [
      {
        title: "상품 상세페이지 이미지 교체 및 콘텐츠 수정",
        descriptions: [
          "신규 프로모션 및 시즌별 제품에 맞춰 상세페이지 이미지 교체",
          "제품 정보 및 가격, 문구 등 상세 콘텐츠 주기적 업데이트"
        ]
      },
      {
        title: "카페24 관리 페이지 및 사용자 UI 유지보수",
        descriptions: [
          "카페24 모듈을 활용한 상품 옵션, 분류, 배너 수정 작업",
          "디자인 수정 요청에 따른 HTML/CSS 및 이미지 요소 커스터마이징"
        ]
      },
    ],
    trouble:"",
    tech: ["Cafe24", "JavaScript", "Css"],
  },
  {
    id: 6,
    people:"FE 1",
    link:"",
    title: "샹프리몰(다국어) 카페24 쇼핑몰 유지보수 및 UI 개선",
    company: "샹프리",
    period: "24.06 - 25.03",
    account: "샹프리몰(KO, EN, JA)의 UI 개선 및 유지보수 작업을 통해 각 언어권 사용자 경험 최적화",
    features: [
      {
        title: "다국어 사이트별 콘텐츠 수정 및 이미지 교체",
        descriptions: [
          "국문/영문/일문 각각의 콘텐츠를 별도로 관리하며 텍스트 및 이미지 교체 진행",
          "언어별 정렬/문맥 차이에 따른 UI 미세 조정 경험"
        ]
      },
    ],
    trouble:"",
    tech: ["Cafe24", "JavaScript", "Css"],
  },
  {
    id: 7,
    people:"FE 4, BE 2",
    link:"",
    title: "에스원 UI 개선",
    company: "에스원",
    period: "24.12 - 24.12",
    account: "에스원",
    features: [
      {
        title: "",
        descriptions: [
          "",
          ""
        ]
      },
    ],
    trouble:"",
    tech: ["Cafe24", "API", "JavaScript", "Css"],
  },
  {
    id: 8,
    people:"PB 1",
    link:"https://www.myelite.co.kr/",
    title: "학생복 사이트 개선 및 유지보수",
    company: "엘리트 학생복",
    period: "23.05 - 24.06",
    account: "엘리트 학생복 사이트의 기존 서비스 안정화 및 개선 담당",
    features: [
      {
        title: "메인 페이지 디자인 리뉴얼 및 퍼블리싱",
        descriptions: [
          "UI/UX 개선을 반영한 메인 페이지 전면 재구성 및 구현"
        ]
      },
      {
        title: "체육복 안내 페이지 디자인 및 개발",
        descriptions: [
          "직접 디자인한 체육복 안내 페이지를 적응형으로 퍼블리싱"
        ]
      }
    ],
    trouble:"",
    tech: ["Jqeury", "JavaScript", "Css","Illustrator"],
  },
  {
    id: 9,
    people:"PB 1",
    link:"http://hrank.co.kr/",
    title: "광고 에이전시의 랜딩페이지 디자인 및 구현",
    company: "하이어랭크",
    period: "23.05 - 24.01",
    account: "광고 에이전시의 원페이지 회사 소개 사이트를 직접 디자인 및 구현",
    features: [
      {
        title: "원페이지 레이아웃 설계 및 반응형 퍼블리싱",
        descriptions: [
          "브랜드 아이덴티티에 맞춘 시각적 디자인 작업",
          "PC, 태블릿, 모바일에 최적화된 반응형 웹 구현"
        ]
      },
      {
        title: "애니메이션 및 인터랙티브 효과 적용",
        descriptions: [
          "스크롤에 따른 섹션 전환 애니메이션 개발",
          "사용자 경험 향상을 위한 부드러운 인터랙션 구현"
        ]
      },
    ],
    trouble:"",
    tech: ["Jqeury", "JavaScript", "Css", "Illustrator"],
  },
  {
    id: 10,
    people:"PB 1",
    link:"https://sailracing.kr/",
    title: "해양 아웃도어 쇼핑몰 브랜딩 및 UI/UX 퍼블리싱 총괄",
    company: "세일레이싱",
    period: "23.10 - 24.04",
    account: "클라이언트와 직접 소통하며 브랜드 이미지를 강화, 차별화된 브랜드 스토리를 효과적으로 전달하는 UI/UX 개발을 수행",
    features: [
      {
        title: "카페24 플랫폼 모듈 활용 및 커스터마이징",
        descriptions: [
          "카페24 쇼핑몰 플랫폼에 최적화된 기능 모듈을 적극 활용하여 개발 효율 극대화",
          "플랫폼 구조와 API 이해도를 높여 맞춤형 UI/UX 구현에 기여"
        ]
      },
      {
        title: "브랜드 아이덴티티 반영한 디자인 및 반응형 퍼블리싱",
        descriptions: [
          "해양 아웃도어 특성을 살린 시각적 요소와 사용자 친화적 인터페이스 개발",
          "다양한 디바이스에서 원활히 작동하는 반응형 웹 구축"
        ]
      },
      {
        title: "사용자 경험 개선 및 퍼포먼스 최적화",
        descriptions: [
          "쇼핑몰 내 주요 사용자 흐름을 분석하고 UI 개선으로 전환율 향상 도모",
        ]
      }
    ],
    trouble:"",
    tech: ["Cafe24","Jqeury", "JavaScript", "Css", "Illustrator"],
  },
];

export default projectData;