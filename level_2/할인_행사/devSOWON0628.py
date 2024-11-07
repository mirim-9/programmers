def solution(want, number, discount):
    original_want_dict = {}
    now_dictionary = {}
    answer = 0
    for i in range(len(want)):
        original_want_dict[want[i]] = number[i]
    
    for discount_one in discount:
        now_dictionary[discount_one] = 0
        if discount_one not in original_want_dict:
            original_want_dict[discount_one] = 0
    
    # 첫 윈도우
    for i in range(10):
        now_dictionary[discount[i]] +=1

    if now_dictionary == original_want_dict:
        answer+=1
    
    # 10일부터 앞은 자르고 뒤는 붙임
    for day in range(10, len(discount)):
        # 앞은 자르고
        now_dictionary[discount[day-10]] -=1
        # 뒤는 붙임
        now_dictionary[discount[day]] +=1        
        
        if now_dictionary == original_want_dict:
            answer+=1
    
    return answer
