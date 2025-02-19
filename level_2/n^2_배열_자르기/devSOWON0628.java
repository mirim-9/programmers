import java.util.*;

class Solution {
    public int[] solution(int n, long left, long right) {
        int size = (int) (right - left + 1); // 결과 배열 크기
        int[] result = new int[size];

        for (long index = left; index <= right; index++) {
            int i = (int) (index / n);  // 행 번호
            int j = (int) (index % n);  // 열 번호
            result[(int) (index - left)] = Math.max(i + 1, j + 1);
        }

        return result;
    }
}
