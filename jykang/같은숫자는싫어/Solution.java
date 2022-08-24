import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        int[] answer = {};
        ArrayList<Integer> answerList = new ArrayList<>();
            
        int temp = -1;//임시저장소
        for(int i=0;i<arr.length;i++){
            if(temp == arr[i]) {
                   continue;
            }else{
                temp = arr[i];
                answerList.add(arr[i]);
            }
        }
        
        answer = new int[answerList.size()];  
        int size = 0;
        for(int i : answerList){
            answer[size++] = i;
        }
        
        return answer;
    }
}