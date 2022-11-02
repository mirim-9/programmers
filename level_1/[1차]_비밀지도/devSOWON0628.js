function solution(n, arr1, arr2) {
    let mapOne = []
    let mapTwo = []
    
    for(let i = 0 ; i< n ; i++){
        mapOne.push(arr1[i].toString(2).toString().padStart(n, 0).split("").map((x)=>{ return x=='0'? " " : "#"}))
        mapTwo.push(arr2[i].toString(2).toString().padStart(n, 0).split("").map((x)=>{ return x=='0'? " " : "#"}))
    }
    let resultArray = Array.from(Array(n), () => new Array(n))
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
            mapOneValue = mapOne[i][j]
            mapTwoValue = mapTwo[i][j]
            if(mapOneValue=='#' || mapTwoValue=='#'){
                resultArray[i][j] = '#'
            }else{
                resultArray[i][j] = ' '
            }
        }
    }
    
    return resultArray.map((x)=>{ return x.join("")});
}
