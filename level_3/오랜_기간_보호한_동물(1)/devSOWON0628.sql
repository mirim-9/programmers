SELECT a.name as 'NAME', a.datetime as 'DATETIME'
FROM ANIMAL_INS as a LEFT JOIN ANIMAL_OUTS as b 
ON a.ANIMAL_ID = b.ANIMAL_ID
WHERE b.ANIMAL_ID IS NULL
ORDER BY 2
LIMIT 3;
