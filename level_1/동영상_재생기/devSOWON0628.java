class Solution {
    public String solution(String video_len, String pos, String op_start, String op_end, String[] commands) {
        int answerSeconds   = timeStringToSecondNumber(pos);
        int videoLenSec     = timeStringToSecondNumber(video_len);
        int opStartSec      = timeStringToSecondNumber(op_start);
        int opEndSec        = timeStringToSecondNumber(op_end);
        
        for(String command : commands) {
            answerSeconds = skipOpening(answerSeconds, opStartSec, opEndSec);
            if(command.equals("next")) {
                answerSeconds = next10Sec(answerSeconds, videoLenSec);
            } else if (command.equals("prev")) {
                answerSeconds = prev10Sec(answerSeconds);
            }
            answerSeconds = skipOpening(answerSeconds, opStartSec, opEndSec);
        }
        String answer = String.format("%02d", answerSeconds/60) +":"+ String.format("%02d", answerSeconds%60);
        return answer;
    }
    
    /** 10초 전 */
    public int prev10Sec(int nowPosSec) {
        return nowPosSec-10 >= 0 ? nowPosSec-10 : 0;
    }
    
    /** 10초 후 */
    public int next10Sec(int nowPosSec, int videoLenSec) {
        return nowPosSec+10 <= videoLenSec ? nowPosSec+10 : videoLenSec;
    }
    
    /** 오프닝 스킵 */
    public int skipOpening(int nowPosSec, int opStartSec, int opEndSec) {
        // check current position
        if(nowPosSec >= opStartSec && nowPosSec <= opEndSec) {
            return opEndSec;
        }
        return nowPosSec;
    }
    
    /** 시간 문자열을 초로 return */
    public int timeStringToSecondNumber(String timeStr) {
        String splitedStr[] = timeStr.split(":");
        return Integer.parseInt(splitedStr[0])*60 + Integer.parseInt(splitedStr[1]);
    }
    
    
}
