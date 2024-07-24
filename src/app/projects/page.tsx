"use client";

import * as css from "./project.css";
import ProjectCard from "./_component/ProjectCard";
import { ProjectProps } from "@/types/project";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/data/firestore";
import { Fragment } from "react";
import Error from "next/error";
import Skeleton from "react-loading-skeleton";

export default function ProjectsMain() {
  const { data, isLoading } = useQuery<ProjectProps[], Error>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

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
          .map((project, idx) => (
            <Fragment key={idx}>
              <ProjectCard item={project} />
            </Fragment>
          ))
      )}
    </section>
  );
}
