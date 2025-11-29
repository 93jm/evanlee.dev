export const absoluteFit = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

export const flexRow = {
  display: "flex",
  flexDirection: "row" as const,
};

export const flexColumn = {
  display: "flex",
  flexDirection: "column" as const,
};

export const flexRowBetween = {
  ...flexRow,
  justifyContent: "space-between",
  alignItems: "center",
};

export const flexRowAlignCenter = {
  ...flexRow,
  alignItems: "center",
};

export const flexRowCenter = {
  ...flexRow,
  alignItems: "center",
  justifyContent: "center",
};

export const flexColumnCenter = {
  ...flexColumn,
  alignItems: "center",
  justifyContent: "center",
};
