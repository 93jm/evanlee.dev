import { ExperienceProps, OtherExperienceProps } from "@/types/resume";

export const ExperienceData: ExperienceProps[] = [
  {
    companyName: "N__BT",
    companyPeriod: "(2024.07 ~ )",
    projects: [
      {
        title: "애디슨 오퍼월 국내 파트너센터",
        period: "2024.07 ~ ",
        link: "https://partner-center.adison.co/account/sign-in",
        skills: [
          "Nextjs v15",
          "React v19",
          "TypeScript",
          "Zod",
          "React Hook Form",
          "Zustand",
          "MSW",
          "Storybook",
          "Vanila-extract",
        ],
        description:
          "국내 고객사들이 직접 오퍼월을 연동할 수 있도록 돕고 리포팅을 제공하는 셀프서비스형 프로젝트",
        contents: [
          "재사용 가능한 UI 컴포넌트 설계 및 스토리북을 활용하여 컴포넌트를 문서화하고 서비스 전반의 일관성 확보",
          "MSW 활용으로 백엔드에 의존없이 API 모킹을 통해 프론트 개발 생산성 증가 및 예외 상황 테스트 처리",
          "그 외에 셀프 연동 서비스 및 리포트 설계와 개발",
        ],
        results: [],
      },
      {
        title: "애디슨 오퍼월 글로벌 광고 관리",
        period: "2024.07 ~ ",
        link: "",
        skills: [
          "Nextjs v14",
          "React v18",
          "TypeScript",
          "tRPC",
          "Yup",
          "React Hook Form - MUI",
          "Material UI",
          "Casl js",
          "Rjsf",
          "HandsonTable",
        ],
        description: "글로벌 고객사의 광고 관리 및 리포팅 제공 서비스",
        contents: [
          "nuxt로 되어있는 기존 프로젝트를 next로 마이그레이션 (완료)",
          "Rjsf를 이용하여 json schema로 폼 핸들링 처리",
          "HandsonTable을 사용하여 고객사 리포팅 테이블 개발",
          "그 외에 모든 오퍼월 광고 관리, 리포팅 기능에 대한 프론트 설계 및 개발",
        ],
        results: [],
      },
      {
        title: "애디슨 오퍼월 국내,글로벌 광고 웹뷰",
        period: "2024.07 ~ ",
        link: "",
        skills: [
          "Nextjs v15",
          "React v19",
          "TypeScript",
          "React Query",
          "Storybook",
          "Scss",
        ],
        description:
          "글로벌 및 국내 대상의 광고 적립 및 FAQ, 문의 기능등을 제공하는 웹뷰 프로젝트",
        contents: [
          "nuxt로 되어있는 기존 프로젝트를 next로 마이그레이션 (완료)",
          "매체사에 맞는 광고 페이지 제공과 스토리북을 활용한 재사용 가능한 UI 컴포넌트 개발 및 문서화",
          "웹뷰 프로젝트 설계 및 광고 적립부터 문의까지 FE 전체 기능 개발",
        ],
        results: [],
      },
    ],
  },
  {
    companyName: "위허들링",
    companyPeriod: "(2024.04 ~ 2024.07)",
    projects: [
      {
        title: "위잇 (B2C)",
        period: "2024.04 ~ 2024.07",
        link: "https://delight.weeat.kr",
        skills: [
          "React v17",
          "TypeScript",
          "Style Component",
          "React Hook Form",
          "Redux",
          "Redux Thunk",
        ],
        description:
          "도시락 및 샐러드 등의 점심 구독 서비스를 제공하는 B2C 프로젝트",
        contents: [
          "메뉴 옵션 상품 설계 및 개발",
          "랜딩 페이지 재개편",
          "Lighthouse 개선",
        ],
        results: [],
      },
    ],
  },
  {
    companyName: "마이프랜차이즈",
    companyPeriod: "(2021.07 ~ 2023.11)",
    projects: [
      {
        title: "예비창업자 서비스(B2C)",
        period: "2022.09 ~ 2023.11",
        link: "https://myfranchise.kr",
        skills: [
          "Nextjs v12",
          "React v17",
          "TypeScript",
          "Emotion",
          "Recoil",
          "GraphQL",
          "Apollo Client",
        ],
        description:
          "B2C 고객(예비창업자) 대상으로 브랜드 찾기와 비교, 양도양수, 지도 상권 분석 서비스 제공을 하며 APP 서비스까지 제공",
        contents: [
          "React 프로젝트를 Next12로 리뉴얼 진행 (서비스 랜딩 속도 및 SEO 개선)",
          "Lighthouse 성능 개선",
          "브랜드 상세 페이지 리뉴얼 개편으로 창업문의 수 3배 이상 증가 - B1000 프로젝트",
          "사이드프로젝트로 그로스해킹을 통해 A/B 테스트 도입",
          "지도 상권분석 기능 외에 사이트 기능 개발 및 유지보수",
        ],
        results: [
          "기존 CRA로 구성되어 있던 서비스를 Next 전환 도입에 참여 후 서비스 랜딩 속도 개선 및 SEO 개선",
          "브랜드 상세 페이지 개선으로 인해 가입 유저 수 증가 및 조회 세션 대비 창업문의 수 3배 증가",
        ],
      },
      {
        title: "파트너 서비스(B2B)",
        period: "2021.07 ~ 2022.01",
        link: "https://partner.myfranchise.kr",
        skills: [
          "React v17",
          "TypeScript",
          "Style Component",
          "Recoil",
          "Jotai",
          "GraphQL",
          "Apollo Client",
          "ReactQuery",
        ],
        description:
          "파트너 고객 대상으로 브랜드 관리 및 매물 관리, 상권 분석 기능이 포함된 월 정액 멤버쉽 서비스 제공",
        contents: [
          "서비스 소개 페이지 리뉴얼",
          "매물 관리 페이지 개발 및 지도 연동",
          "파트너사의 권한 및 사용자 관리 비즈니스 로직 개발",
        ],
        results: [
          "매물 관리 기능 출시 후 확보된 데이터를 이용하여 이후 사내의 부동산 관련 서비스의 기초 마련",
        ],
      },
      {
        title: "마이프랜차이즈 어드민",
        period: "2022.01 ~ 2023.11",
        link: "",
        skills: [
          "React v17",
          "TypeScript",
          "Style Component",
          "Ant Design UI",
          "Recoil",
          "GraphQL",
          "Apollo Client",
        ],
        description:
          "B2C, B2B 서비스 내의 모든 기능들이 연동 및 관리되는 Admin 프로젝트",
        contents: [
          "서비스 내의 브랜드 관리 및 광고, 매거진 관리 기능 개발",
          "푸시 알림 서비스 및 세그먼트 필터 기능 개발",
          "통계 페이지 및 사내 결제 세금계산서 연동 개발",
          "그 외에 모든 기능 FE 개발",
        ],
        results: [
          "B2C와 B2B를 관리하며 동시에 어드민 사이트 FE 1인 개발 및 관리",
        ],
      },
      {
        title: "그로스해킹 TF 프로젝트",
        period: "2022.09 ~ 2022.11",
        link: "",
        skills: ["Google Optimize", "Google Analytics", "Clarity"],
        description:
          "사내 사이드 프로젝트로 서비스 지표를 분석하고 그로스해킹 도입",
        contents: [
          "GA 트래킹 및 내부 데이터 분석을 통해 A/B 테스트 진행",
          "사내 전체 그로스 해킹 문화 도입",
        ],
        results: [
          "총 2건의 A/B 테스트중 추 후에 1가지는 실제 B2C 서비스에 반영",
        ],
      },
      {
        title: "B1000 프로젝트",
        period: "2022.11 ~ 2023.07",
        link: "",
        skills: ["Google Optimize", "Google Analytics", "Clarity"],
        description:
          "사내 사이드 프로젝트로 B2C 서비스의 궁극 목표 달성을 위해 TF 팀 구성 후 기획부터 개발 참여",
        contents: [
          "GA 트래킹 및 내부 데이터 분석을 통해 현재 지표 pain point 분석",
          "기획부터 FE 개발 및 유지보수까지 참여",
        ],
        results: [
          "23년 7월 배포 후 11월 결과 분석 시 이전 지표 대비 3배 이상 증가",
        ],
      },
    ],
  },
];

export const OtehrExperienceData: OtherExperienceProps[] = [
  {
    title: "경력 및 교육",
    items: [
      {
        text: "엔비티 프론트엔드 개발자 (2024.07 ~ )",
        link: "",
        subText: "",
      },
      {
        text: "위허들링 프론트엔드 개발자 (2024.04 ~ 2024.07)",
        link: "",
        subText: "",
      },
      {
        text: "마이프랜차이즈 프론트엔드 개발자 (2021.07 ~ 2023.11)",
        link: "",
        subText: "",
      },
      {
        text: "넥스클라우드(NexCloud) 프론트엔드 개발자 - 인턴 (2021.03 ~ 2021.04)",
        link: "",
        subText: "",
      },
      {
        text: "Wecode Boot Camp 프론트엔드 개발 교육 수료 (2021.01 ~ 2021.04)",
        link: "",
        subText: "",
      },
      {
        text: "MSTC 소프트웨어 QA 검증 (2019.01 ~ 2020.11)",
        link: "",
        subText: "",
      },
      {
        text: "오토소프트 소프트웨어 QA 검증 (2018.04 ~ 2018.12)",
        link: "",
        subText: "",
      },
    ],
  },
  {
    title: "오픈소스 컨트리뷰터",
    items: [
      {
        text: "exporterhub.io",
        link: "https://github.com/NexClipper/exporterhub.io",
        subText:
          "nexcloud 회사에서 진행하는 Exporterhub 라는 서비스의 V3 버전업 배포를 위해 컨트리뷰터로 활동 <br /> 2022년 까지 서비스 후 현재는 claion 회사로 이관 <br /> https://github.com/NexClipper/exporterhub.io",
      },
    ],
  },
  {
    title: "자격증",
    items: [
      {
        text: "ISTQB foundation level",
        link: "",
        subText: "International Software Testing",
      },
      {
        text: "정보처리 산업기사",
        link: "",
        subText: "한국산업인력공단",
      },
      {
        text: "리눅스마스터 2급",
        link: "",
        subText: "한국정보통신인력개발센터",
      },
      {
        text: "네트워크 관리사 2급",
        link: "",
        subText: "한국정보통신자격협회",
      },
      {
        text: "컴퓨터활용능력 2급",
        link: "",
        subText: "대한상공회의소",
      },
    ],
  },
];
