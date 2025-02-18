def solution(s):
    answer = 0
    n = len(s)
    match = { '(': ')', '{': '}', '[': ']' }

    for i in range(n):
        stack = []
        is_valid = True

        rotated = s[i:] + s[:i]
        for ch in rotated:
            if ch in match: # 여는 괄호
                stack.append(ch)
            else:           # 닫는 괄호
                if stack and match[stack[-1]] == ch:
                    stack.pop()
                else:
                    is_valid = False
                    break

        if is_valid and not stack:
            answer += 1

    return answer
