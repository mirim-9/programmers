function solution(s, n) {
    return s.split("").map((x)=>{
        if(x == " ")return " "
        let uniCode = x.charCodeAt(0)
        if(x.toLowerCase() == x){ // 소문자
            return uniCode+n > 122 ? String.fromCharCode(97 + (uniCode+n - 123)) : String.fromCharCode(uniCode+n)
        }else{ // 대문자
            return uniCode+n > 90 ? String.fromCharCode(65 + (uniCode+n - 91)) : String.fromCharCode(uniCode+n)
        }
    }).join("")
    
}
