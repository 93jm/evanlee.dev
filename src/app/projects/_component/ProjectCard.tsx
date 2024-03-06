import { ProjectProps } from "@/types/project";
import * as css from "../project.css";
import StackBadge from "./StackBadge";
import Image from "next/image";
import Link from "next/link";
import IMG_GITHUB from "/public/blackGithub.png";
import IMG_NOTION from "/public/notion.png";
import ICON_LINK from "/public/website.png";
import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import sanitize from "sanitize-html";

type Props = {
  item: ProjectProps;
};

export default function ProjectCard({ item }: Props) {
  const getImgType = (type?: string) => {
    if (!type) {
      return "";
    }

    switch (type) {
      case "github":
        return IMG_GITHUB;
      case "notion":
        return IMG_NOTION;
      case "link":
        return ICON_LINK;
      default:
        return "";
    }
  };

  const newItem = {
    ...item,
    stack: [...item.stack, ...item.otherStack],
  };

  return (
    <div className={css.projectItemCard}>
      <div className={css.projectItemImgBox}>
        {item.imgUrl ? (
          <Image
            src={item.imgUrl}
            alt={item.projectName}
            layout="fill"
            objectFit="cover"
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          />
        ) : (
          <Skeleton height={"100%"} style={{ position: "absolute" }} />
        )}
      </div>
      <div className={css.projectItemContentBox}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h4>{item.projectName}</h4>
          {newItem.links.length > 0 && (
            <div style={{ display: "flex", gap: 10 }}>
              {newItem.links.map((i, idx) => (
                <Fragment key={idx}>
                  <Link href={i.url} target="_blank">
                    <Image
                      src={getImgType(i.type)}
                      alt="링크 아이콘"
                      width={20}
                    />
                  </Link>
                </Fragment>
              ))}
            </div>
          )}
        </div>
        <p>{item.period}</p>
        {newItem.stack.length > 0 && (
          <div className={css.projectStackBadgeWrapper}>
            {newItem.stack.map((i, idx) => (
              <StackBadge key={idx} stack={i} />
            ))}
          </div>
        )}
        {newItem.description && (
          <p
            dangerouslySetInnerHTML={{
              __html: sanitize(newItem.description),
            }}
          />
        )}
      </div>
    </div>
  );
}
