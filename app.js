const getSleepHours = (day) => {
  day = day.toLowerCase();
  if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday" ||
    day === "saturday" ||
    day === "sunday"
  ) {
    return 8;
  }
};

//output test
console.log(getSleepHours("monday"));

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

//output test
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

//output test
console.log(getIdealSleepHours());
