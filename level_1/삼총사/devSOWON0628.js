function solution(number) {
    let studentsCount = number.length
    let result = 0;
    for(let i = 0 ; i < studentsCount ; i++){
        for(let j = i+1 ; j < studentsCount ; j++){
            for(let k = j+1 ; k < studentsCount ; k++){
                if(number[i]+number[j]+number[k] == 0){
                    result++
                }
            }
        }
    }
    return result;
}
