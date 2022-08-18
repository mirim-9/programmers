function solution(board, moves) {
    let bucket = []
    let popCount = 0;
    for(const move of moves){
        for(let i = 0 ; i < board.length ; i++){
            if(board[i][move-1] != 0){
                if(bucket[bucket.length-1] == board[i][move-1]){
                    bucket.pop()
                    popCount+=2
                }else{
                    bucket.push(board[i][move-1])
                }
                board[i][move-1]=0
                break;
            }
        }
    }
    
    return popCount;
}
