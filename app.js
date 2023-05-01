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

/*output test
console.log(getSleepHours("monday"));
*/

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

//output test
console.log(`You slept a total of ${getActualSleepHours()} hours this week.
`);

const getIdealSleepHours = () => {
  let idealHours = 9;
  return idealHours * 7;
};

//output test
console.log(`Your weekly sleep target was ${getIdealSleepHours()} hours per week.
`);

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${
        actualSleepHours - idealSleepHours
      } more hours of sleep this week than you needed. Great job!`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `You're ${Math.abs(
        actualSleepHours - idealSleepHours
      )} hours in sleep debt. Go to bed fool!`
    );
  }
};

//output test
calculateSleepDebt();
