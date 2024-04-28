export type StackBadgeProps =
  | "Nextjs"
  | "React"
  | "Typescript"
  | "Javascript"
  | "Emotion"
  | "StyleComponent"
  | "CSSModule"
  | "VanillaExtract"
  | "StoryBook"
  | "AntDesign"
  | "Redux"
  | "Recoil"
  | "Jotai"
  | "Zustand"
  | "ContextAPI"
  | "Express"
  | "REST"
  | "GraphQL"
  | "ApolloClient"
  | "MSW"
  | "ReactQuery";

export interface ProjectProps {
  id: number;
  projectName: string;
  imgUrl: string;
  links: {
    type: string;
    url: string;
  }[];
  period: string;
  isWorking: boolean;
  stack: StackBadgeProps[];
  otherStack: string[];
  description: string;
}
