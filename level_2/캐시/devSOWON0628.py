def solution(cacheSize, cities):
    if cacheSize == 0:
        return len(cities) * 5
    
    cachedCityList = []
    amountTime = 0
    
    for city in cities:
        cityStr = city.lower()
        if cityStr in cachedCityList:
            amountTime+=1
            cachedCityList.remove(cityStr)
            cachedCityList.append(cityStr)
        else:
            amountTime+=5
            cachedCityList.append(cityStr)
            if len(cachedCityList) > cacheSize:
                del cachedCityList[0]
    return amountTime
