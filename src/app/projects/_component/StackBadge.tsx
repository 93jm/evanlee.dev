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
      return (
        <span style={{ backgroundColor: "#AEE2FF", color: "white" }}>
          Emotion
        </span>
      );
    case "StyleComponent":
      return (
        <span style={{ backgroundColor: "#AEE2FF", color: "white" }}>
          StyleComponent
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
      return (
        <span style={{ backgroundColor: "#B2A4FF", color: "white" }}>
          Redux
        </span>
      );
    case "Recoil":
      return (
        <span style={{ backgroundColor: "#B2A4FF", color: "white" }}>
          Recoil
        </span>
      );
    case "Jotai":
      return (
        <span style={{ backgroundColor: "#B2A4FF", color: "white" }}>
          Jotai
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
      return (
        <span style={{ backgroundColor: "#F4B183", color: "white" }}>
          ApolloClient
        </span>
      );
    case "ReactQuery":
      return (
        <span style={{ backgroundColor: "#B2A4FF", color: "white" }}>
          ReactQuery
        </span>
      );
    default:
      return (
        <span style={{ backgroundColor: "gray", color: "white" }}>{stack}</span>
      );
  }
};

export default StackBadge;
