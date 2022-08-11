function solution(lottos, win_nums) {
    let min = 0
    let zero = 0;
    for(const num of lottos){
        if(num == 0){
            zero++;
        }else if(win_nums.includes(num)){
            min++;
        }
    }
    if(zero == 0 && min == 0){
        return [6, 6]
    }
    
    return [7-min-zero, 7-min > 6 ? 6 : 7-min];
}
