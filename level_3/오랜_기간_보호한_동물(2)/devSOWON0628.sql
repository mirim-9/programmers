SELECT b.ANIMAL_ID AS 'ANIMAL_ID', b.NAME AS 'NAME'
FROM ANIMAL_INS a LEFT JOIN ANIMAL_OUTS b 
ON a.ANIMAL_ID = b.ANIMAL_ID
WHERE b.ANIMAL_ID IS NOT NULL
ORDER BY DATEDIFF(b.datetime, a.datetime) DESC
LIMIT 2;
