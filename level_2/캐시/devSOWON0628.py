from collections import deque

def solution(cacheSize, cities):
    if cacheSize == 0:
        return len(cities) * 5
    
    amountTime = 0
    cityDeque = deque(maxlen=cacheSize)

    for city in cities:
        cityStr = city.lower()
        
        if cityStr in cityDeque:
            amountTime+=1
            cityDeque.remove(cityStr)
            cityDeque.append(cityStr)
        else:
            amountTime+=5
            cityDeque.append(cityStr)
    return amountTime
