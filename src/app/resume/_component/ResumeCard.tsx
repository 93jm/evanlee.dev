"use client";
import * as css from "@/app/resume/resume.css";
import ICON_LINK from "/public/icon_link.png";
import Image from "next/image";
import Link from "next/link";
import { ResumeProject } from "@/types/resume";

type Props = {
  project: ResumeProject;
};

export default function ResumeCard({ project }: Props) {
  return (
    <div className={css.resumeCard}>
      <div style={{ position: "relative" }}>
        <b>{project.title}</b>
        {project.link && (
          <Link
            href={project.link}
            style={{ position: "absolute", top: 2 }}
            target="_blank"
          >
            <Image
              src={ICON_LINK}
              alt="링크 아이콘"
              width={14}
              style={{ marginLeft: 5, marginTop: 0 }}
            />
          </Link>
        )}
      </div>
      {project.skills.length > 0 && (
        <div className={css.resumeTextBox}>{project.skills.join(", ")}</div>
      )}
      <p className={css.resumeTextBox} style={{ color: "gray" }}>
        {project.description}
      </p>
      <ul className={css.resumeListWrapper} style={{ paddingTop: 0 }}>
        {project.contents.map((content, cIdx) => (
          <li
            key={cIdx}
            className={css.resumeTextBox}
            style={{
              listStylePosition: "inside",
              listStyleType: "square",
            }}
          >
            {content}
          </li>
        ))}
      </ul>
      {project.results.map((result, rIdx) => (
        <p key={rIdx} className={css.resumeTextBox} style={{ color: "gray" }}>
          {result}
        </p>
      ))}
    </div>
  );
}
