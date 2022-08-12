function solution(arr) {
  // 예외는 바로 return해서 불필요한 수행을 막는다
    if(arr.length <= 1)return [-1]
    // 초기화는 arr의 0번방 값으로 설정하였다. 임의의 값을 넣는 것 보다 의미있는 값일것이다.
    let min = arr[0]
    // 이미 arr[0]의 값으로 min을 초기화했으니 for문을 1부터 시작한다
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    // javascript의 filter기능을 사용하여 min값을 제외한 모든 값 list를 return해준다.
    // min의 값이 여러개 있을 수 있기때문에 splice는 부적절하다(이거때문에 한 번 빠구먹음;;)
    return arr.filter((element) => element != min)
}
