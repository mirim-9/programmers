function solution(nums) {
    var answer = 0;
    const resultList = getCombinations(nums,3)
    for(const result of resultList){
        const sum = result.reduce(function add(sum, currValue) {
          return sum + currValue;
        }, 0);
        if(isPrime(sum)){
            answer++
        }
    }
    return answer;
}


function isPrime(num) { 
  if(num === 2) {
    return true;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false; 
    }
  }
  return true; 
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); 

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};
