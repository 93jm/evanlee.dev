import { StackBadgeProps } from "@/types/project";
import React from "react";

type Props = {
  stack: string | StackBadgeProps;
};

const StackBadge = ({ stack }: Props) => {
  switch (stack) {
    //프레임워크
    case "Nextjs":
      return (
        <span style={{ backgroundColor: "black", color: "white" }}>Nextjs</span>
      );
    case "React":
      return (
        <span style={{ backgroundColor: "#537188", color: "white" }}>
          React
        </span>
      );
    //언어
    case "Typescript":
      return (
        <span style={{ backgroundColor: "#7286D3", color: "white" }}>
          Typescript
        </span>
      );
    case "Javascript":
      return (
        <span style={{ backgroundColor: "#FFD966", color: "white" }}>
          Javascript
        </span>
      );
    //css & style
    case "Emotion":
    case "StyleComponent":
    case "CSSModule":
    case "VanillaExtract":
      return (
        <span style={{ backgroundColor: "#AEE2FF", color: "white" }}>
          {stack}
        </span>
      );
    case "StoryBook":
      return (
        <span style={{ backgroundColor: "#F7C8E0", color: "white" }}>
          StoryBook
        </span>
      );
    case "AntDesign":
      return (
        <span style={{ backgroundColor: "#665A48", color: "white" }}>
          AntDesign
        </span>
      );
    //전역 상태 관리
    case "Redux":
    case "Recoil":
    case "Jotai":
    case "Zustand":
    case "ContextAPI":
      return (
        <span style={{ backgroundColor: "#B2A4FF", color: "white" }}>
          {stack}
        </span>
      );

    //API 통신
    case "REST":
      return (
        <span style={{ backgroundColor: "gray", color: "white" }}>REST</span>
      );
    case "GraphQL":
      return (
        <span style={{ backgroundColor: "#FF90BC", color: "white" }}>
          GraphQL
        </span>
      );
    case "ApolloClient":
    case "MSW":
      return (
        <span style={{ backgroundColor: "#F4B183", color: "white" }}>
          {stack}
        </span>
      );
    case "ReactQuery":
      return (
        <span style={{ backgroundColor: "#B2A4FF", color: "white" }}>
          ReactQuery
        </span>
      );
    case "Express":
      return (
        <span style={{ backgroundColor: "#87A922", color: "white" }}>
          {stack}
        </span>
      );
    default:
      return (
        <span style={{ backgroundColor: "gray", color: "white" }}>{stack}</span>
      );
  }
};

export default StackBadge;
