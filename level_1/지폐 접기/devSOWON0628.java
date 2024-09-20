class Solution {
    public int solution(int[] wallet, int[] bill) {
        // 큰 값이 먼저 오도록 정렬
        bill    = rotateLongerFirst(bill);
        wallet  = rotateLongerFirst(wallet);
        
        int walletX = wallet[0];
        int walletY = wallet[1];
        int billX = bill[0];
        int billY = bill[1];
        
        int count = 0;
        while (!isFitToWallet(walletX, walletY, billX, billY)) {
            int [] rotatedBill = rotateLongerFirst(new int[] {billX/2, billY});
            billX = rotatedBill[0];
            billY = rotatedBill[1];
            count++;
        }
        return count;
    }
    
    // 큰 값이 먼저 오도록 배열을 재정렬하는 메소드
    public int[] rotateLongerFirst(int[] bill) {
        if(bill[0] > bill[1]) {
            return bill;
        } else {
            return new int[] {bill[1], bill[0]};
        }
    }
    
    // 지갑에 지폐가 들어가는지 확인
    public boolean isFitToWallet(int walletX, int walletY, int billX, int billY) {
        return walletX >= billX && walletY >=billY;
    }
}
