function solution(sizes) {
    let maxX = 0
    let maxY = 0
    for(const size of sizes){
        if(size[0] > size[1]){
            let temp = size[1];
            size[1] = size[0];
            size[0] = temp
        }
        if(size[0] > maxY){
            maxY = size[0]
        }
        
        if(size[1] > maxX){
            maxX = size[1]
        }
    }
    return maxX*maxY;
}
