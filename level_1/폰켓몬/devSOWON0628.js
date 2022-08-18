function solution(nums) {
    const pokemonSet = new Set();
    for(const num of nums){
        pokemonSet.add(num)
    }
    return pokemonSet.size > nums.length/2 ? Math.floor(nums.length/2) : pokemonSet.size;
}
