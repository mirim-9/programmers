SELECT count(DISTINCT name) as "count" 
  FROM ANIMAL_INS 
  WHERE name IS NOT NULL;
