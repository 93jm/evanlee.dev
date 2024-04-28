import * as css from "./project.css";
import ProjectCard from "./_component/ProjectCard";
import { Fragment } from "react";
import { getProjectAllData } from "@/app/api/projects/server";
import { ProjectProps } from "@/types/project";

interface IFetchedData {
  message: string;
  data: ProjectProps[];
}

export default async function ProjectsMain() {
  const { message, data: projects }: IFetchedData = await getProjectAllData();
  return (
    <section className={css.projectsSectionWrapper}>
      {projects
        .sort((a, b) => a.id - b.id)
        .map((project, idx) => (
          <Fragment key={idx}>
            <ProjectCard item={project} />
          </Fragment>
        ))}
    </section>
  );
}
