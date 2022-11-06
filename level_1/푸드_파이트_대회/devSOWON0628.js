function solution(food) {
    let foodMap = new Map();
    let foodList = ""
    for(let i = 0 ; i < food.length-1 ; i++){
        let foodCount = Math.floor(food[i+1]/2)
        if(foodCount>0){
            for(let j = 0 ; j < foodCount ; j++){
                foodList+=i+1
            }
        }
    }
    foodList+=0
    for(let i = foodList.length-2 ; i >= 0 ; i--){
        foodList+=foodList[i]
    }
    return foodList;
}
