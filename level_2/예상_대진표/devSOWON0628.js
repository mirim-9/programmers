function solution(n,a,b)
{
    let count = 0;
    for(let i = 0 ; i < Math.sqrt(n) ; i++) {
        if(a === b) {
            continue  
        }
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        count++
    }
    
    return count;
}
