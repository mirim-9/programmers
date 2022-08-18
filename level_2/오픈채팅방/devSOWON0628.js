function solution(record) {
    let answer = [];
    let uidNickName = new Map();
    let actUidList = [];
    for(const recordStr of record){
        const [act, uid, nickName] = recordStr.split(" ")
        if(act == "Enter" || act == "Change"){
            uidNickName.set(uid, nickName)
        }
        actUidList.push([act, uid])
    }
    for(const actUid of actUidList){
        if(actUid[0] == "Enter"){
            answer.push(uidNickName.get(actUid[1])+"님이 들어왔습니다.")
        }else if(actUid[0] == "Leave"){
            answer.push(uidNickName.get(actUid[1])+"님이 나갔습니다.")
        }
    }
    return answer;
}
