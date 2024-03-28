"use client";

import { CSSProperties } from "react";
import IMG_GITHUB from "/public/blackGithub.png";
import IMG_GITHUB_WHITE from "/public/github_white.png";
import IMG_NOTION from "/public/notion.png";
import IMG_NOTION_WHITE from "/public/notion_white.png";
import IMG_WEBSITE from "/public/website.png";
import IMG_WEBSITE_WHITE from "/public/website_white.png";
import IMG_LINK from "/public/icon_link.png";
import IMG_LINK_WHITE from "/public/icon_link_white.png";
import Image from "next/image";
import { useTheme } from "next-themes";

interface IProps {
  width: number;
  style: CSSProperties;
  type: string;
}

export default function ImageBox({ width, style, type }: IProps) {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "light" ? false : true;

  const getImgType = (type: string) => {
    if (!isDarkMode) {
      switch (type) {
        case "github":
          return IMG_GITHUB;
        case "notion":
          return IMG_NOTION;
        case "website":
          return IMG_WEBSITE;
        case "link":
          return IMG_LINK;
        default:
          return IMG_LINK;
      }
    }

    if (isDarkMode) {
      switch (type) {
        case "github":
          return IMG_GITHUB_WHITE;
        case "notion":
          return IMG_NOTION_WHITE;
        case "website":
          return IMG_WEBSITE_WHITE;
        case "link":
          return IMG_LINK_WHITE;
        default:
          return IMG_LINK_WHITE;
      }
    }

    return IMG_LINK;
  };

  return (
    <Image
      src={getImgType(type)}
      alt="링크 아이콘"
      width={width}
      style={style}
    />
  );
}
