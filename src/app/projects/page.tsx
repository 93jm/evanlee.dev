import * as css from "./project.css";
import ProjectCard from "./_component/ProjectCard";
import { Fragment } from "react";
import { getProjectAllData } from "@/app/api/project/server";
import { ProjectProps } from "@/types/project";

export default async function ProjectsMain() {
  const res: ProjectProps[] = await getProjectAllData();
  const newData = res || Array.from({ length: 6 }, () => {});

  return (
    <section className={css.projectsSectionWrapper}>
      {newData.map((project, idx) => (
        <Fragment key={idx}>
          <ProjectCard item={project} />
        </Fragment>
      ))}
    </section>
  );
}
