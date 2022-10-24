SELECT ANIMAL_ID, NAME, case
            WHEN SEX_UPON_INTAKE LIKE'Neutered%' OR SEX_UPON_INTAKE LIKE 'Spayed%' THEN 'O'
            else 'X'
            END as '중성화'
FROM ANIMAL_INS
ORDER BY 1;
