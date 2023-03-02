function solution(babbling) {
  let answer = 0;
  let arr = ["aya", "ye", "woo", "ma"];

  babbling.forEach((babblingWording) => {
    let possibleWord = 0;
    arr.forEach((arrWarding) => {
      if (babblingWording.indexOf(arrWarding) !== -1)
        possibleWord += arrWarding.length;
    });
    if (possibleWord === babblingWording.length) answer++;
  });

  return answer;
}
solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);
