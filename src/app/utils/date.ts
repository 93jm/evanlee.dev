export function getCarrerRange() {
  const startDate = new Date("2021-07-01");
  const currentDate = new Date(Date.now());
  const careerRange =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  return `${Math.floor(careerRange / 12)}년 ${
    careerRange % 12
  }개월째 개발자로 일하고 있는 이정민(Evan)입니다 💪🏻`;
}
