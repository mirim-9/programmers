function solution(n, works) {
    if(works.reduce((sum, num)=>sum+num,0) < n){
        return 0
    }
    works.sort((a, b)=>{return a-b})
    while(n){
        let standard = works[works.length-1]
        for(let i=works.length-1 ; i>=0 ; i--){
            if(standard == works[i]){
                works[i]--
                n--
            }else{
                break
            }
            if(n<=0)break
        }
    }
    return works.reduce((a,b)=> a + Math.pow(b,2), 0);
}
