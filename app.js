const getSleepHours = (day) => {
  day = day.toLowerCase();
  if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
  ) {
    return 8;
  }
};
