import type { ProjectStatus } from "@/features/content";

const DATE_FORMATTER = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const STATUS_LABELS: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  archived: "Archived",
};

export function formatProjectDate(date: string): string {
  return DATE_FORMATTER.format(new Date(date));
}

export function getProjectDateTime(date: string): string {
  return new Date(date).toISOString();
}

export function formatProjectStatus(status: ProjectStatus): string {
  return STATUS_LABELS[status];
}
