"use client";

import { ProjectProps, StackBadgeProps } from "@/types/project";
import * as css from "../project.css";
import StackBadge from "./StackBadge";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import sanitize from "sanitize-html";
import { ImageBox } from "@/app/_component";

interface IProps {
  item: ProjectProps;
}

interface NewProjectItem extends ProjectProps {
  newStack: StackBadgeProps[] | string[];
}

export default function ProjectCard({ item }: IProps) {
  const newItem: NewProjectItem = {
    ...item,
    newStack: [...item.stack, ...item.otherStack],
  };

  const handleMainClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement;

    if (target.tagName.toLowerCase() !== "img") {
      // Link 컴포넌트가 아니라면 실행
      const { links } = newItem;
      const notionLink = links.filter((link) => link.type.includes("notion"));
      if (notionLink.length > 0) {
        window.open(notionLink[0].url, "_blank");
      }
    }
  };

  return (
    <button className={css.projectItemCard} onClick={handleMainClick}>
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
        {item.isWorking && (
          <span className={css.projectWorkBadge}>~ ing 🧑🏻‍💻</span>
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
                    <ImageBox type={i.type || "link"} width={20} style={{}} />
                  </Link>
                </Fragment>
              ))}
            </div>
          )}
        </div>
        <p>{item.period}</p>
        {newItem.newStack.length > 0 && (
          <div className={css.projectStackBadgeWrapper}>
            {newItem.newStack.map((i, idx) => (
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
    </button>
  );
}
