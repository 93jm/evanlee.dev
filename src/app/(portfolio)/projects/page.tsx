"use client";

import * as css from "./project.css";
import ProjectCard from "./_component/ProjectCard";
import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import { useProjects } from "@/service/project/useProjectService";

export default function ProjectsMain() {
  const { data, isLoading } = useProjects();

  const emptySkeletons = Array.from({ length: 6 }, () => ({}));

  return (
    <section className={css.projectsSectionWrapper}>
      {isLoading ? (
        <>
          {emptySkeletons.map((_, idx) => (
            <Skeleton key={idx} width={"100%"} height={350} />
          ))}
        </>
      ) : (
        data
          ?.sort((a, b) => a.id - b.id)
          // E-Quiz 앱의 경우 현재 동작을 하지 않음 점검이 필요
          .filter((i) => i.id !== 4)
          .map((project, idx) => (
            <Fragment key={idx}>
              <ProjectCard item={project} />
            </Fragment>
          ))
      )}
    </section>
  );
}
