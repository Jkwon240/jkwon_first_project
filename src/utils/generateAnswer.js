// 중복 없는 4자리 숫자 배열 생성
export function generateAnswer() {
  const nums = [];
  while (nums.length < 4) {
    const rand = Math.floor(Math.random() * 10);
    if (!nums.includes(rand)) nums.push(rand);
  }
  return nums;
}
