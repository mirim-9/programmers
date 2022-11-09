function solution(brown, yellow) {
    for (let i = 3 ; i < brown+yellow ; i++){
        for(let j = 2; j <= i ; j++){
            if((i-1)*2+(j-1)*2 == brown && (i-2) * (j-2) == yellow){
                return [i, j]
            }
        }
    }
}
