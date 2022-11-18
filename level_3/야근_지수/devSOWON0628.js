function solution(n, works) {
    if(works.reduce((a,b)=>a+b) < n) return 0
    works.sort((a,b)=>{return a-b})
    let index = works.length-1
    while(n){
        let standard = works[index]
        for(let i = index ; i >= 0; i--){
            if(works[i] >= standard){
                works[i]--
                n--
            }
            if(n<=0)break
        }        
    }
    return works.map((x)=>{return x*x}).reduce((sum, add)=> sum+add)
}
