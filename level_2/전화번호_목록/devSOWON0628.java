import java.util.*;
class Solution {
    public boolean solution(String[] phone_book) {
        String[] sortedPhoneBook = phone_book.clone();
        Arrays.sort(sortedPhoneBook);
            
        for (int i = 0; i < sortedPhoneBook.length - 1; i++) {
            if (sortedPhoneBook[i + 1].startsWith(sortedPhoneBook[i])) {
                return false;
            }
        }
        return true;
    }
}
