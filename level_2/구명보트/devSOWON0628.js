function solution(people, limit) {
    people.sort((a,b)=>(b-a))
    let l = 0
    let r = people.length -1
    let answer = 0
    while(l < r){
        if(people[l] + people[r] <= limit){
            l++
            r--
        }else{
            l++
        }
        if(l==r){
            answer++
        }
        answer++
    }    
    return answer;
}
