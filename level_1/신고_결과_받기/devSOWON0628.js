function solution(id_list, report, k) {
    let answer = Array.from({length: id_list.length}, () => 0);
    
    let report_list = {}
    
    for(const name of id_list){
        report_list[name] = []
    }
    
    for(let i = 0 ; i<report.length ; i++){
        const [report_id, reported_id] = report[i].split(" ")
        if(!report_list[reported_id].includes(report_id)){
            report_list[reported_id].push(report_id)
        }
    }

    for(const id of id_list){
        if(report_list[id].length >= k){
            for(const mail_id of report_list[id]){
                answer[id_list.indexOf(mail_id)]++
            }            
        }
    }

    return answer;
}
