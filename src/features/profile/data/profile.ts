export const profileSummary = {
  name: "이정민",
  englishName: "Evan Lee",
  role: "Frontend Engineer",
  location: "Seoul, Korea",
  email: "jm.lee.frontend@gmail.com",
  github: "https://github.com/93jm",
  headline: "제품의 흐름과 사용자 경험을 함께 보는 프론트엔드 개발자입니다.",
  introduction:
    "QA 경험을 바탕으로 요구사항, 사용성, 운영 품질을 함께 확인하며 React와 Next.js 기반의 제품을 만듭니다.",
} as const;

export const aboutPrinciples = [
  {
    title: "문제부터 정리합니다",
    description:
      "구현을 시작하기 전에 사용자가 통과해야 하는 흐름, 제품이 기대하는 결과, 운영 중 생길 수 있는 예외를 먼저 확인합니다.",
  },
  {
    title: "읽히는 코드를 선호합니다",
    description:
      "새로운 동료와 미래의 내가 빠르게 이해할 수 있도록 명확한 이름, 좁은 책임, 예측 가능한 구조를 중요하게 봅니다.",
  },
  {
    title: "품질을 뒤로 미루지 않습니다",
    description:
      "SEO, 접근성, 성능, 에러 상태, 빈 상태를 마무리 단계의 보완이 아니라 설계와 구현의 기본 조건으로 둡니다.",
  },
] as const;

export const resumeHighlights = [
  "Next.js, React, TypeScript 기반 제품 프론트엔드 개발",
  "QA 경력을 바탕으로 요구사항과 품질 리스크를 함께 검토",
  "B2C, B2B, Admin, WebView, Partner Center 등 다양한 제품 표면 경험",
  "SEO, Lighthouse, A/B 테스트, 지표 개선 프로젝트 참여",
] as const;

export const coreSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "React Query",
  "GraphQL",
  "Zustand",
  "React Hook Form",
  "Storybook",
  "Vanilla Extract",
  "MSW",
] as const;

export const workExperiences = [
  {
    company: "N__BT",
    role: "Frontend Engineer",
    period: "2024.07 - Present",
    summary: "애디슨 오퍼월 제품군의 파트너센터, 광고 관리, 광고 웹뷰 프론트엔드를 개발합니다.",
    projects: [
      {
        title: "애디슨 오퍼월 국내 파트너센터",
        period: "2024.07 - Present",
        description: "국내 고객사가 오퍼월을 직접 연동하고 리포트를 확인하는 셀프서비스형 제품",
        contributions: [
          "재사용 가능한 UI 컴포넌트와 Storybook 문서화로 제품 전반의 일관성 확보",
          "MSW 기반 API mocking으로 백엔드 의존도를 낮추고 예외 상황 테스트 흐름 개선",
          "셀프 연동과 리포트 화면의 프론트엔드 설계 및 구현",
        ],
        skills: ["Next.js", "React", "TypeScript", "Zod", "React Hook Form", "Zustand", "MSW"],
        link: "https://partner-center.adison.co/account/sign-in",
      },
      {
        title: "애디슨 오퍼월 글로벌 광고 관리",
        period: "2024.07 - Present",
        description: "글로벌 고객사의 광고 운영과 리포팅을 제공하는 관리 제품",
        contributions: [
          "Nuxt 기반 프로젝트를 Next.js 기반으로 마이그레이션",
          "RJSF와 JSON Schema 기반 폼 처리 구조 구현",
          "Handsontable 기반 리포팅 테이블과 광고 관리 기능 개발",
        ],
        skills: ["Next.js", "React", "TypeScript", "tRPC", "Material UI", "RJSF"],
      },
      {
        title: "애디슨 오퍼월 광고 웹뷰",
        period: "2024.07 - Present",
        description: "국내외 사용자의 광고 적립, FAQ, 문의 흐름을 제공하는 웹뷰 제품",
        contributions: [
          "Nuxt 기반 웹뷰를 Next.js 기반으로 마이그레이션",
          "매체사별 광고 페이지와 재사용 가능한 UI 컴포넌트 개발",
          "광고 적립부터 문의까지 이어지는 주요 사용자 흐름 구현",
        ],
        skills: ["Next.js", "React", "TypeScript", "React Query", "Storybook", "SCSS"],
      },
    ],
  },
  {
    company: "위허들링",
    role: "Frontend Engineer",
    period: "2024.04 - 2024.07",
    summary: "점심 구독 서비스 위잇 B2C 제품의 프론트엔드 개선과 운영 개발을 담당했습니다.",
    projects: [
      {
        title: "위잇 B2C",
        period: "2024.04 - 2024.07",
        description: "도시락과 샐러드 등 점심 구독 경험을 제공하는 B2C 서비스",
        contributions: ["메뉴 옵션 상품 설계 및 개발", "랜딩 페이지 개편", "Lighthouse 개선"],
        skills: ["React", "TypeScript", "Styled Components", "React Hook Form", "Redux"],
        link: "https://delight.weeat.kr",
      },
    ],
  },
  {
    company: "마이프랜차이즈",
    role: "Frontend Engineer",
    period: "2021.07 - 2023.11",
    summary:
      "예비 창업자 B2C, 파트너 B2B, 사내 Admin 제품을 개발하며 SEO, 지표 개선, 운영 화면을 다뤘습니다.",
    projects: [
      {
        title: "예비창업자 서비스 B2C",
        period: "2022.09 - 2023.11",
        description: "브랜드 탐색, 비교, 양도양수, 지도 상권 분석을 제공하는 예비 창업자 대상 제품",
        contributions: [
          "React 기반 서비스를 Next.js 12로 전환해 랜딩 속도와 SEO 개선에 참여",
          "브랜드 상세 페이지 개편으로 창업 문의 전환 개선",
          "지도 상권 분석과 주요 서비스 기능 개발 및 유지보수",
        ],
        results: ["브랜드 상세 페이지 개선 후 조회 세션 대비 창업 문의 수 3배 이상 증가"],
        skills: ["Next.js", "React", "TypeScript", "Emotion", "Recoil", "GraphQL", "Apollo Client"],
        link: "/projects/myfranchise-b2c",
      },
      {
        title: "파트너 서비스 B2B",
        period: "2021.07 - 2022.01",
        description: "브랜드 관리, 매물 관리, 상권 분석을 제공하는 파트너 대상 월 정액 서비스",
        contributions: [
          "서비스 소개 페이지 개편",
          "매물 관리 페이지와 지도 연동 개발",
          "파트너 권한 및 사용자 관리 비즈니스 로직 구현",
        ],
        results: ["매물 관리 데이터가 이후 부동산 관련 서비스의 기초 데이터로 활용"],
        skills: ["React", "TypeScript", "Recoil", "Jotai", "GraphQL", "Apollo Client", "React Query"],
        link: "/projects/myfranchise-b2b",
      },
      {
        title: "마이프랜차이즈 Admin",
        period: "2022.01 - 2023.11",
        description: "B2C와 B2B 서비스를 관리하는 사내 관리자 제품",
        contributions: [
          "브랜드, 광고, 매거진 관리 기능 개발",
          "푸시 알림과 세그먼트 필터 기능 개발",
          "통계 페이지와 사내 결제 세금계산서 연동 개발",
        ],
        results: ["B2C와 B2B 운영을 위한 Admin 프론트엔드를 1인 개발 및 관리"],
        skills: ["React", "TypeScript", "Ant Design", "Recoil", "GraphQL", "Apollo Client"],
        link: "/projects/myfranchise-admin",
      },
      {
        title: "B1000",
        period: "2022.11 - 2023.07",
        description: "B2C 서비스의 pain point를 분석하고 기획부터 개발까지 참여한 지표 개선 프로젝트",
        contributions: [
          "GA와 내부 데이터를 바탕으로 전환 흐름의 문제 지점 분석",
          "브랜드 상세 개선 방향을 제품에 반영하고 배포 후 지표 확인",
        ],
        results: ["배포 후 이전 지표 대비 창업 문의 수 3배 이상 증가"],
        skills: ["Google Analytics", "Google Optimize", "Microsoft Clarity"],
        link: "/projects/b1000",
      },
      {
        title: "그로스해킹 TF",
        period: "2022.09 - 2022.11",
        description: "사내 지표 분석과 A/B 테스트 도입을 위한 크로스펑셔널 프로젝트",
        contributions: [
          "GA tracking과 사용자 행동 데이터를 기반으로 실험 가설 수립",
          "A/B 테스트 결과를 제품 개선안으로 연결",
        ],
        results: ["진행한 A/B 테스트 중 일부를 실제 B2C 서비스 개선에 반영"],
        skills: ["Google Analytics", "Google Optimize", "Microsoft Clarity"],
        link: "/projects/growth-hacking-tf",
      },
    ],
  },
] as const;

export const earlierExperiences = [
  "NexCloud Frontend Intern · 2021.03 - 2021.04",
  "Wecode Frontend Boot Camp · 2021.01 - 2021.04",
  "MSTC Software QA · 2019.01 - 2020.11",
  "Autosoft Software QA · 2018.04 - 2018.12",
] as const;

export const credentials = [
  "ISTQB Foundation Level",
  "정보처리 산업기사",
  "리눅스마스터 2급",
  "네트워크관리사 2급",
] as const;
