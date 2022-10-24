SELECT b.ANIMAL_ID AS 'ANIMAL_ID', b.NAME AS 'NAME'
FROM ANIMAL_INS a LEFT JOIN ANIMAL_OUTS b 
ON a.ANIMAL_ID = b.ANIMAL_ID
where b.ANIMAL_ID IS NOT null 
    AND timediff(b.DATETIME, a.DATETIME) < 0
ORDER BY a.DATETIME;
