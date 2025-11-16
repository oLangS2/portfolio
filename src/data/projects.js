
const projectData = [
  {
    id: 0,
    people:"PB 4",
    link:"https://www.hddfs.com/shop/dm/main.do?NaPm=ct%3Dmi1a0dtc%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3Dnull%7Chk%3D0bf643dc3d08fa27fd946d9d55e4adff20915caa",
    title: "현대면세점 UX개선 및 이벤트 페이지 제작",
    company: "현대면세점",
    period: "25.08 - ",
    account:"현대면세점 웹/앱 서비스의 UX 개선 및 유지보수를 담당하였으며, 기획·디자인팀과 협업하여 이벤트 페이지 퍼블리싱을 수행",
    features: [
        {
          title: "웹/앱 서비스의 UX 개선",
          descriptions: [
            "로그인 페이지 UX 개선을 통해 사용성 향상 및 이탈률 감소",
            "사용자 흐름 분석을 바탕으로 불필요한 요소 제거 및 인터페이스 최적화"
          ]
        },
        {
          title:"이벤트 페이지 퍼블리싱",
          descriptions: [
            "이벤트 정보(기간, 사은품, 조건 등)에 맞는 스크립트 아이디어 제안 및 구현",
            "디자인 템플릿 기반 퍼블리싱 가이드 제작으로 작업 효율 및 일관성 향상",
          ]
        },
        {
          title:"GA4 이벤트 태깅 적용",
          descriptions: [
            "주요 UI요소에 GA4 이벤트 태깅을 적용하고, 옴니버그(Omnibug)를 통해 정상 수집 여부를 확인"
          ]
        },
    ],
    tech: ["Eclipse", "Bitbuket", "Bamboo", "Figma", "CSS"],
  },
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
            "비회원 접근 차단 및 로그인 유도 팝업 구현",
            "권한 가능한 회원만 조회 가능, 관리자만 등록/수정 가능하도록 권한 처리", 
            "이미지 업로드 및 수정 시, 샵바이의 임시 이미지 업로드 API를 통해 임시 URL을 획득하고, 게시글 등록 시 해당 URL을 JSON 데이터로 전달하여 영구 URL로 변환하는 구조를 구현",
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
    ],
    trouble:[
      {
        title: "복합 쿠폰 적용 로직 처리 및 조건 분기 최적화 이슈",
        descriptions: [
          "<strong>[문제점]</strong> 주문 페이지에서 상품 쿠폰과 장바구니 쿠폰의 적용 조건이 상이하고, 특정 상품에 쿠폰이 적용 불가능할 경우 전체 쿠폰 적용 흐름에 영향을 주는 복잡한 로직이 존재함. 특히 상품 쿠폰은 개별 적용, 장바구니 쿠폰은 전체 적용 방식이 혼합되어 있어 예외 처리 및 충돌이 빈번히 발생함.",
          "<strong>[해결]</strong> 쿠폰 적용 대상(상품/장바구니)을 기준으로 쿠폰 데이터를 분리하고, 상품별 조건/쿠폰불가 플래그 등을 기준으로 사전에 필터링하는 로직을 추가하여 적용 가능한 쿠폰만 사용자에게 표시되도록 개선함.",
          "<strong>[회고]</strong> 조건 분기 로직은 한눈에 보이도록 설계하고, 유스케이스별 테스트 케이스 작성 필요성을 느낌"
        ]
      },
      {
        title: "장바구니 수량 변경 시 UI는 반영되지만 서버에는 반영되지 않는 현상",
        descriptions: [
          "<strong>[문제점]</strong> 장바구니에서 수량을 변경했을 때 UI에서는 정상적으로 수량이 바뀌었지만, 서버 요청에는 변경된 수량이 반영되지 않아 DB에 저장되지 않는 문제 발생",
          "<strong>[디버깅]</strong> console.log를 활용해 변경된 수량 상태(state)와 실제 API 요청 시점의 데이터를 비교하면서 확인한 결과, 상태가 아직 업데이트되기 전의 값이 API에 전달되고 있었음",
          "<strong>[해결]</strong> setState가 비동기적으로 처리된다는 점을 인지하고, useEffect 또는 이벤트 핸들러 내부에서 최신 상태를 보장하도록 구조 수정",
          "<strong>[회고]</strong> 상태 변화 이후 바로 API 호출이 필요한 경우, useEffect 또는 상태 콜백을 통해 시점을 명확히 분리해야 함을 체감"
        ]
      },
      {
        title: "Git 브랜치 관리 및 충돌 해결 과정에서의 협업 이슈",
        descriptions: [
          "<strong>[문제점]</strong> 다수 개발자가 동시에 동일 파일을 수정하며 빈번한 Git 충돌 발생",
          "<strong>[해결]</strong> Git Flow 전략 도입 충돌 최소화, 코드 리뷰 프로세스 정립",
          "<strong>[회고]</strong> 체계적인 브랜치 관리와 커뮤니케이션이 협업 효율성을 크게 향상시킴을 경험"
        ]
      }
    ],
    tech: ["React", "Shopby", "Axios", "Figma", "SCSS"],
  },
  {
    id: 2,
    people:"FE 3, BE 2",
    link:"",
    title: "닥터포헤어 쇼핑몰 & BO 구축",
    company: "닥터포헤어",
    period: "25.01 - 25.03",
    account: "카페24 기반 쇼핑몰 구축 및 백엔드 API 연동을 통해 관리자 로그인, 상담사 등록/수정/조회 기능이 포함된 BO 게시판을 구축",
    features: [
      {
        title: "BO 게시판 내 로그인 및 상담사 관리 기능 구축",
        descriptions: [
          "프론트엔드 4인 협업으로 공통 코드 스타일을 정립하고 기능 단위로 모듈화",
          "관리자 로그인 페이지 구현 및 Enter 키 입력 시 로그인 동작 처리로 UX 개선",
          "상담사 등록/수정/조회 기능 구현 — 필수 입력값 검증 및 등록 후 로그인 연동 처리",
          "등록·수정 폼을 공통 컴포넌트로 구성하고 URL 파라미터 기반 분기 처리",
          "이미지 업로드 시 base64 변환 방식을 적용하여 백엔드와 협의한 포맷으로 전송"
        ]
      },
      {
        title: "카페24 쇼핑몰 퍼블리싱",
        descriptions: [
          "디자인팀에서 제공한 Figma 시안을 기반으로 전체 페이지 퍼블리싱 작업 진행",
          "기획팀과의 협업을 통해 기능 동작 방식에 대한 세부 조건 정의 및 구현"
        ]
      },
    ],
    trouble: [
      {
        title: "이미지 업로드 방식 결정 과정에서의 연동 및 기획 이슈",
        descriptions: [
          "<strong>[문제점]</strong> 초기에는 파일 용량과 안정성 등을 고려해 FormData 방식으로 구현을 계획했으나, 프론트 구현과 디버깅 과정에서 복잡도가 높아졌고, 백엔드 연동 시 포맷 오류가 반복 발생",
          "<strong>[해결]</strong> 기획팀과 협의하여 이미지가 저용량 1건 제한이라는 점을 고려해 base64 방식으로 전환, 백엔드와 포맷 합의 후 안정적으로 업로드 처리 완료",
          "<strong>[회고]</strong> 기술 선택은 상황에 따라 유연하게 접근해야 하며, 기획/백엔드와의 소통을 통해 목적에 맞는 최적의 방식으로 조정하는 것이 중요함을 경험함"
        ]
      },
      {
        title: "디자인 시안과 플랫폼 구조 간 불일치로 인한 퍼블리싱 충돌 이슈",
        descriptions: [
          "<strong>[문제점]</strong> Figma 디자인 시안과 카페24 기본 구조(템플릿/모듈)의 마크업 구조가 상이하여 퍼블리싱 요소가 깨지는 문제 발생",
          "<strong>[해결]</strong> 예전 카페24 모듈을 참고하여 만든 디자인 시안임을 파악한 뒤, 디자인팀에게 플랫폼의 고정 레이아웃의 구조 전달하여 디자인 재요청하여 최대한 시안과 유사하게 구현",
          "<strong>[회고]</strong> CMS 기반 플랫폼 개발에서는 디자인 재현도와 플랫폼 제약 사이에서 균형을 맞추는 UI 전략이 필요하다는 것을 체감함"
        ]
      }
    ],
    tech: ["React", "Axios", "Cafe24", "JavaScript", "Figma", "SCSS"],
  },
  {
    id: 3,
    people:"FE 4, BE 3",
    link:"https://m.nongshimmall.com/nongshimTV?mainCategoryId=%EC%88%8F%ED%8F%BC&subCategoryId=%EC%A0%84%EC%B2%B4&layout=G",
    title: "농심몰 이벤트 페이지 / ㅋㅋㅋTV & ㅋㅋㅋTV BO 구축",
    company: "농심",
    period: "24.06 - 25.02",
    account: "게임형 이벤트 페이지를 월 1회 정기 제작, 숏츠 형식의 영상 콘텐츠 플랫폼 'ㅋㅋㅋTV'와 BO를 API 기반으로 구축",
    features: [
      {
        title: "농심몰 이벤트 페이지 월간 운영 퍼블리싱",
        descriptions: [
          "백엔드 API와 연동하여 이벤트 당첨 결과에 따라 동작하는 뽑기 게임 페이지 퍼블리싱",
          "매월 1회 정기적으로 기획/디자인 변경 사항을 반영하여 안정적 운영"
        ]
      },
      {
        title: "ㅋㅋㅋTV 리스트 페이지 구축 및 무한 스크롤 구현",
        descriptions: [
          "대/중/소 분류 API를 통해 카테고리 트리 구성 및 선택된 카테고리에 따른 비디오 목록 출력",
          "리스트 영역은 무한 스크롤 방식으로 구현하여 15개 단위로 콘텐츠 로딩",
          "로딩 시 Skeleton UI 적용으로 사용자 경험 강화"
        ]
      },
      {
        title: "QA 대응 및 협업 프로세스 경험",
        descriptions: [
          "사내 1~3차 QA 프로세스 동안 클라이언트 피드백 및 중복 이슈 제거 중심으로 반복 개선",
          "디자인, 기획, QA 부서와 유기적 협업을 통해 일정 내 고품질 결과물 전달"
        ]
      }
    ],
    trouble: [
      {
      title: "ㅋㅋㅋTV URL 설계 및 보안 넘버 가독성 이슈로 인하여 URL 구조를 직접 설계",
      descriptions: [
        "<strong>[문제점]</strong> 백엔드에서 제공한 카테고리 식별값이 보안상 영문/숫자 혼합 형태여서 클라이언트 요청과 달리 직관적인 URL 구조 제공이 어려움",
        "<strong>[해결]</strong> 프론트에서 한글 카테고리명을 slug 형태로 변환하고, 해당 값을 라우터 경로에 매핑하여 사용자 친화적 URL 구현",
        "<strong>[회고]</strong> 보안과 사용성 사이에서 균형 잡힌 접근이 필요하며, 프론트에서 URL 구조를 전략적으로 설계해야 함을 경험함"
        ]
      }
    ],  
    tech: ["React", "Axios","Cafe24", "SCSS", "JavaScript","Ps"],
  },
  {
    id: 4,
    people:"FE 4, BE 2",
    link:"",
    title: "에스원다이렉트몰 프론트 분기 처리",
    company: "에스원",
    period: "24.12 - 24.12",
    account: "카페24 기반 쇼핑몰에서 기존 정기권 중심 구조에 일반 배송 상품이 추가되며, 백엔드 상품 데이터를 기반으로 마이페이지 UI의 조건 분기 처리를 담당",
    features: [
      {
        title: "정기권/배송상품 UI 분기 처리",
        descriptions: [
          "기존 정기권 전용 구조에 배송 상품이 추가됨에 따라 상품 타입별 UI 분기 로직 구현",
          "마이페이지의 주문내역, 반품신청 등 주요 화면에서 백엔드 API의 상품 속성 값에 따라 레이아웃 및 기능 조건 처리"
        ]
      }
    ],
    trouble:"",
    tech: ["Cafe24", "Axios", "JavaScript", "Css", "Figma"],
  },
  {
    id: 5,
    people:"FE 1",
    link:"https://foodismall.com/",
    title: "후디스몰 UI개선 및 유지보수",
    company: "후디스",
    period: "상시 업무",
    account: "후디스몰의 주요 화면(UI)의 개선 및 유지보수 작업을 담당하였으며, 시즌성 프로모션 배너 교체 작업을 포함한 퍼블리싱 작업을 기획팀과 협업하여 수행",
    features: [
      {
        title: "UI 개선 및 유지보수 퍼블리싱",
        descriptions: [
          "후디스몰의 베스트 상품 페이지, 브랜드관, 헤더 등 주요 화면의 UI 개선 퍼블리싱 작업",
          "디자인팀에서 제공한 Figma 시안 기반으로 마크업 구조 개선 및 스타일링 작업 수행",
          "시즌별 프로모션에 맞춰 배너 디자인 교체 및 반응형 대응 퍼블리싱 반복 수행"
        ]
      },
    ],
    trouble:"",
    tech: ["Cafe24", "SCSS", "JavaScript","Ps"],
  },
  {
    id: 6,
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
    tech: ["Cafe24", "JavaScript", "Css", "Figma"],
  },
  {
    id: 7,
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
    tech: ["Cafe24", "JavaScript", "Css", "Ps"],
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
    tech: ["Jqeury", "JavaScript", "Css", "Illustrator"],
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
    title: "해양 아웃도어 쇼핑몰 UI/UX 퍼블리싱",
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
    tech: ["Cafe24", "Jqeury", "JavaScript", "Css", "Illustrator"],
  },
];

export default projectData;