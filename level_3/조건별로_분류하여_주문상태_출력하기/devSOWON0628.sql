SELECT ORDER_ID, 
       PRODUCT_ID, 
       date_format(OUT_DATE, '%Y-%m-%d') AS "OUT_DATE",
       IF(OUT_DATE is null, "출고미정", IF(DATEDIFF(OUT_DATE, '2022-05-01')<=0, "출고완료", "출고대기")) AS "출고여부"  
  FROM FOOD_ORDER
 ORDER BY 1
