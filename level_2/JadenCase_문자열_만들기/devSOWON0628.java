class Solution {
    public String solution(String s) {
        String[] splited = s.toLowerCase().split(" ");
        StringBuilder result = new StringBuilder();
        
        for(int i = 0 ; i < splited.length ; i++){
            String word = splited[i].trim();
            if(word.length()<1){
                result.append(" ");
                continue;
            }
            result.append(word.substring(0, 1).toUpperCase());
            result.append(word.substring(1,word.length()));
            result.append(" ");
        }
        if(!" ".equals(s.substring(s.length()-1, s.length()))){
            result.deleteCharAt(result.lastIndexOf(" "));
        }
        return result.toString();
    }
}
