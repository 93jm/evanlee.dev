import { ProjectProps } from "@/types/project";
import * as css from "../project.css";
import StackBadge from "./StackBadge";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import sanitize from "sanitize-html";
import { ImageBox } from "@/app/_component";

type Props = {
  item: ProjectProps;
};

export default function ProjectCard({ item }: Props) {
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
