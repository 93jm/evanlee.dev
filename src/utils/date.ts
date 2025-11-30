/**
 * 날짜를 읽기 쉬운 형식으로 변환 (YYYY-MM-DD -> YYYY년 MM월 DD일)
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}년 ${month}월 ${day}일`;
}

/**
 * 경력 기간을 계산하여 반환합니다
 */
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
