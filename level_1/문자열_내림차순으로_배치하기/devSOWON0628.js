function solution(s) {
    let result = s.split("").sort(function(a,b){
                                  if(a<b){
                                      return 1
                                  }else if(a>b){
                                      return -1
                                  }else {
                                      return 0
                                  }
                                  }).join("")
    return result;
}
