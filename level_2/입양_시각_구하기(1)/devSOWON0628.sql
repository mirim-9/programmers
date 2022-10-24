SELECT hour(DATETIME) AS 'HOUR', COUNT(*) AS 'COUNT'
FROM ANIMAL_OUTS
WHERE hour(DATETIME) BETWEEN 9 AND 19
GROUP BY hour(DATETIME)
ORDER BY 1;
