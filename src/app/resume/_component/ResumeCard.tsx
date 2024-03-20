"use client";
import Link from "next/link";
import { ResumeProject } from "@/types/resume";
import ImageBox from "@/app/_component/ImageBox";
import * as css from "@/app/resume/resume.css";

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
            <ImageBox
              type="link"
              width={14}
              style={{ marginLeft: 5, marginTop: 0 }}
            />
          </Link>
        )}
      </div>
      {project.skills.length > 0 && (
        <div className={css.resumeSubTextBox}>{project.skills.join(", ")}</div>
      )}
      <p className={css.resumeSubTextBox}>{project.description}</p>
      <ul className={css.resumeListWrapper} style={{ paddingTop: 0 }}>
        {project.contents.map((content, cIdx) => (
          <li
            key={cIdx}
            className={css.resumeSubTextBox}
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
        <p key={rIdx} className={css.resumeSubTextBox}>
          {result}
        </p>
      ))}
    </div>
  );
}
