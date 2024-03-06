import * as css from "./project.css";
import ProjectCard from "./_component/ProjectCard";
import { PROJECTS_DATA } from "@/mocks/project";
import { Fragment } from "react";

export default function ProjectsMain() {
  return (
    <section className={css.projectsSectionWrapper}>
      {PROJECTS_DATA.map((project, idx) => (
        <Fragment key={idx}>
          <ProjectCard item={project} />
        </Fragment>
      ))}
    </section>
  );
}
