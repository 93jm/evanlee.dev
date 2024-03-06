export type StackBadgeProps =
  | "Nextjs"
  | "React"
  | "Typescript"
  | "Javascript"
  | "Emotion"
  | "StyleComponent"
  | "StoryBook"
  | "AntDesign"
  | "Redux"
  | "Recoil"
  | "Jotai"
  | "REST"
  | "GraphQL"
  | "ApolloClient"
  | "ReactQuery";

export interface ProjectProps {
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
