---
title: Writing SQL for Performance
date: '2023-04-03T19:00:00.00Z'
description: 'Writing SQL queries to optimize performance'
---

As a database administrator converting to a developer, I thought it would be helpful to share my experience on how to efficiently write SQL statements to optimize performance.  Database Administrators may not write the same type of SQL code as developers, but they have an understanding of how SQL is executed in the database.  This understanding can help explain how the way SQL is formatted can affect performance.  I will be using a method outlined from the book, <em>Oracle SQL Performance Tuning and Optimization by, Keavin Meade (2014)</em>.

There are many types of sql statements, but for this post we will be discussing how to tune sql queries which join 2 or more tables.  With this type of query, we will focus on 2 elements - the driving table and the join order.  The driving table is the table which we access all other tables in the query.  The driving table is the first table from which other tables in the query can be joined.  The join order is the order which we access all other tables in the query.  The choice of the driving table and the join order can drastically affect how the query performs.

###FRPM
The primary method of filtering that we will use is called the Filtered Rows Percentage Method , which we will refer to as FRPM.  FRPM is a method which basically aims at keeping the number of rows in transit as small as possible, or removes as many rows as possible as early as possible.  I'm not going to go too in depth on using this method, but I just want to look at a high level explanation of the goal of FRPM, which is keeping the number of records minimal throughout the execution of the sql statement, and provide general steps on using this method.  

###DRIVING TABLE  
To choose the proper driving table, take all the tables in your query and run counts on them.  Then take a separate count of the tables after the filters in the query are applied.  By filter, I do not mean joins with other tables.  Filter would be all the items in the where clause which apply to the table, where columns are filtered based on some comparison usually with a constant value.  Look at the filtered counts compared to the table counts, and rank them based on % of records filtered.  FRPM suggests we choose the driving table as the table with the highest % records filtered.  

###JOIN ORDER
After we have chosen our driving table, we need to look at the order of joins with the remaining tables in the query.  Ideally we would want to join based again on the rank in % of records filtered, but this depends on what is available from the query.  If there is no availability of a join with the tables in this order, you will have to play with different join orders, and possibly even go back and choose a different driving table.

###CARDINALITY FEEDBACK
We will define cardinality feedback as the number of records returned after each join in the join order.  To optimize performance we want to minimize the cardinality feedback, so use this metric when analyzing the join order.  You can also try different join orders and measure the execution time.

###CONCLUSION
FRPM is a good guideline to follow when formulating or tuning sql.  I may not have accounted for all scenarios, like how to handle views, usage of indexes, function calls, etc, but the general idea of the method should help to server as a guide.  And hopefully it will give you a different perspective into how to look at writing sql for performance.