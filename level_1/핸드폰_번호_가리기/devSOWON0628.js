function solution(phone_number) {
    let fourNum = phone_number.slice(-4)
    let result = ""
    for(let i = 0 ; i < phone_number.length-fourNum.length ; i++){
        result+="*"
    }
    result +=fourNum
    return result
}
