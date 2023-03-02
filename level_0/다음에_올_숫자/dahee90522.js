function solution(common) {
  var answer = 0;
  let gap1 = common[1] - common[0];
  let gap2 = common[2] - common[1];
  if (gap1 === gap2) {
    answer = common[common.length - 1] + gap1;
  } else if (gap1 !== gap2) {
    answer = common[common.length - 1] * (gap2 / gap1);
  }
  return answer;
}
// common = [1, 2, 3, 4] / answer = 5
// common = [2, 4, 8] / answer = 16
