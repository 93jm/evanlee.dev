const DATE_FORMATTER = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatPostDate(date: string): string {
  return DATE_FORMATTER.format(new Date(date));
}

export function getPostDateTime(date: string): string {
  return new Date(date).toISOString();
}
