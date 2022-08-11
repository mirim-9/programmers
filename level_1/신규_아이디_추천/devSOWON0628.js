function solution(new_id) {
    var answer = '';
    // 1 모든 대문자를 대응되는 소문자로 치환합니다.
    answer = new_id.toLowerCase();
    
    // 2 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    answer = answer.replace(/[^a-z0-9-_.]/g, "")

    // 3 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    answer = answer.replace(/\.+/g, ".")

    // 4 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    answer = checkStartEndDot(answer)
    
    // 5 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if (typeof answer === 'string' && answer.length === 0){
        return "aaa"
    }
    
    // 6 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    if(answer.length > 15){
        answer = answer.slice(0, 15)
        answer = checkStartEndDot(answer)
    }

    // 7 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    if(answer.length < 3){
        const answerLength = answer.length
        for(let i = answerLength ; i < 3 ; i ++){
            answer = answer.concat(answer.charAt(answer.length-1))
        }
    }
    return answer;
}

function checkStartEndDot(str){
    let answer = str
    if(answer.charAt(0) == "."){
        answer = answer.substr(1)
    }
    if(answer.charAt(answer.length-1) == "."){
        answer = answer.slice(0, answer.length-1)
    }
    return answer
}
