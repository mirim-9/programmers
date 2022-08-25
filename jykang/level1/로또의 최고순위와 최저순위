class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        
        int zeroCnt = 0;
        int c = 0;
        int min, max = 0;
        int minR, maxR = 0;
        
        
        for(int i=0;i < lottos.length; i++){
            if(lottos[i]==0){
                zeroCnt++;
            }
            for(int j=0; j < win_nums.length; j++){
                if(lottos[i] == win_nums[j]){
                    c++;
                }
            }
        }
        
        min = c;
        max = c + zeroCnt;
        
        
        
        int[] answer = {Math.min(7 - max, 6), Math.min(7 - min, 6)};
        
        return answer;
    }
}
