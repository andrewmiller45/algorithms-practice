-- https://leetcode.com/problems/customers-who-never-order/description/?envType=study-plan&id=sql-i

-- Write an SQL query to report all customers who never order anything.

-- Return the result table in any order.

-- The query result format is in the following example.

SELECT name AS Customers 
FROM customers LEFT JOIN Orders ON Customers.ID = Orders.CustomerId
WHERE CustomerId IS NULL