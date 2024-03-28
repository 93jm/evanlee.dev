import { ProjectProps } from "@/types/project";

export const PROJECTS_DATA: ProjectProps[] = [
  {
    projectName: "Just Evan",
    imgUrl: "/ogImage.png",
    links: [
      {
        type: "github",
        url: "https://github.com/93jm/evanlee.dev",
      },
      {
        type: "notion",
        url: "https://www.notion.so/93jm/Just-Evan-e83cac4276af48cfbadff7b2efcfcaaf?pvs=4",
      },
      {
        type: "website",
        url: "https://evanlee-dev.com",
      },
    ],
    period: "2024/03 ~",
    isWorking: true,
    stack: ["Nextjs", "React", "Typescript", "VanillaExtract"],
    otherStack: ["Vercel Build", "AWS Route 53"],
    description: "evanlee-dev <br /> 저를 소개하고 저의 활동을 기록합니다.",
  },
  {
    projectName: "마이프차 - B2C",
    imgUrl: "/project-b2c.png",
    links: [
      {
        type: "notion",
        url: "https://www.notion.so/93jm/B2C-80d0c172300e4abcad9885ed4428c056?pvs=4",
      },
      {
        type: "website",
        url: "https://myfranchise.kr",
      },
    ],
    period: "2022/09 ~ 2023/11",
    isWorking: false,
    stack: [
      "Nextjs",
      "React",
      "Typescript",
      "Emotion",
      "StoryBook",
      "Recoil",
      "GraphQL",
      "ApolloClient",
    ],
    otherStack: [],
    description:
      "B2C 고객(예비창업자) 대상으로 브랜드 찾기, 정보공개서 데이터, 상권 분석 서비스를 제공하며 App 서비스 제공",
  },
  {
    projectName: "마이프차 - B2B",
    imgUrl: "/project-b2b.png",
    links: [
      {
        type: "notion",
        url: "https://www.notion.so/93jm/B2B-40d7e38d6cda42e2999c846bcb3ff758?pvs=4",
      },
      {
        type: "website",
        url: "https://partner.myfranchise.kr",
      },
    ],
    period: "2021/07 ~ 2022/01",
    isWorking: false,
    stack: [
      "React",
      "Typescript",
      "StyleComponent",
      "Recoil",
      "Jotai",
      "GraphQL",
      "ApolloClient",
      "ReactQuery",
    ],
    otherStack: [],
    description:
      "B2C 고객(예비창업자) 대상으로 브랜드 찾기, 정보공개서 데이터, 상권 분석 서비스를 제공하며 App 서비스 제공",
  },
  {
    projectName: "마이프차 - ADMIN",
    imgUrl: "/project-admin.png",
    links: [
      {
        type: "notion",
        url: "https://www.notion.so/93jm/ADMIN-447c4ae3c22b4501a09198bea3aabf03?pvs=4",
      },
    ],
    period: "2022/01 ~ 2023/11",
    isWorking: false,
    stack: [
      "React",
      "Typescript",
      "StyleComponent",
      "Recoil",
      "AntDesign",
      "GraphQL",
      "ApolloClient",
    ],
    otherStack: [],
    description: "B2B, B2C 서비스를 관리하는 사내 관리자 사이트",
  },
  {
    projectName: "E-Quiz",
    imgUrl: "/project-e-quiz.png",
    links: [
      {
        type: "github",
        url: "https://github.com/93jm/E-Quiz",
      },
      {
        type: "notion",
        url: "https://www.notion.so/93jm/E-Quiz-88f3c37074c74980ac6d525902b69644?pvs=4",
      },
      {
        type: "website",
        url: "https://e-quiz-lake.vercel.app/",
      },
    ],
    period: "2024/03",
    isWorking: false,
    stack: ["Nextjs", "React", "Typescript", "CSSModule", "Recoil"],
    otherStack: ["Echarts", "Jest"],
    description: "오픈 API를 활용한 간단한 영어 퀴즈 사이트입니다.",
  },
  {
    projectName: "E.com",
    imgUrl: "/project-e-com.png",
    links: [
      {
        type: "github",
        url: "https://github.com/93jm/e-com",
      },
      {
        type: "notion",
        url: "https://www.notion.so/93jm/E-com-7daf77f7999747cbb872f53696f36438?pvs=4",
      },
    ],
    period: "2024/02 ~ 2024/03",
    isWorking: false,
    stack: [
      "Nextjs",
      "React",
      "Typescript",
      "CSSModule",
      "VanillaExtract",
      "Zustand",
      "ContextAPI",
      "MSW",
    ],
    otherStack: [],
    description:
      "nextjs 14v App Router 기능을 활용한 X.COM 클론 코딩 (Only Front)",
  },
  {
    projectName: "Exporterhub 컨트리뷰터",
    imgUrl: "/project-exporthub.png",
    links: [
      {
        type: "github",
        url: "https://github.com/NexClipper/exporterhub.io",
      },
      {
        type: "notion",
        url: "https://www.notion.so/93jm/Exporterhub-2a0eaa5ff77e4780ac813368662ac2cf?pvs=4",
      },
      {
        type: "website",
        url: "https://exporterhub.io/",
      },
    ],
    period: "2021/03 ~ 2021/04",
    isWorking: false,
    stack: ["React", "Javascript", "StyleComponent", "Redux", "REST"],
    otherStack: [],
    description:
      "프로메테우스 커뮤니티 사용자를 위한 Exporter를 제공하는 허브 사이트인 Exporterhub.io의 오픈소스 Contributor로 참여",
  },
  {
    projectName: "그로스해킹 TF",
    imgUrl: "",
    links: [
      {
        type: "notion",
        url: "https://www.notion.so/93jm/TF-a88854ad3ed5434a8b8a13482c944df1?pvs=4",
      },
    ],
    period: "2022/09 ~ 2022/11",
    isWorking: false,
    stack: [],
    otherStack: ["GoogleOptimize", "GoogleAnalytics", "Clarity"],
    description:
      "사내 개별 프로젝트로 다양한 팀의 구성원들이 모여 사내 지표를 분석하는 그로스해킹 도입",
  },
  {
    projectName: "B1000",
    imgUrl: "",
    links: [
      {
        type: "notion",
        url: "https://www.notion.so/93jm/B1000-54ba264548ae4f379e8d28c6eb9145e2?pvs=4",
      },
    ],
    period: "2022/11 ~ 2023/07",
    isWorking: false,
    stack: [],
    otherStack: ["GoogleOptimize", "GoogleAnalytics", "Clarity"],
    description:
      "사내 개별 프로젝트로 B2C 서비스의 pain point를 분석하여 기획부터 개발까지 참여하는 프로젝트",
  },
];
