process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const index = data.split(" ")
    
    for(let i = 0 ; i < index[1] ; i++){
        let result = ""
        for(let j = 0 ; j < index[0] ; j++){
            result+="*"
        }
        console.log(result)
    }
});
