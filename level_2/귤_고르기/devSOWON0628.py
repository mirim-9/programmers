def solution(k, tangerine):
    tangerine_size = {}
    
    # 귤 크기별로 개수 세기
    for t in tangerine:
        tangerine_size[t] = tangerine_size.get(t, 0) + 1

    # 귤 크기별 개수를 내림차순으로 정렬
    sorted_tangerines = sorted(tangerine_size.values(), reverse=True)

    count = 0
    sum_tangerines = 0

    # 수량이 많은 귤부터 선택하여 k개를 채울 때까지 반복
    for size in sorted_tangerines:
        sum_tangerines += size
        count += 1
        if sum_tangerines >= k:
            break

    return count
