DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    employee_id UUID NOT NULL PRIMARY KEY,
    employee_number VARCHAR(16) NOT NULL,
    employee_name VARCHAR(64) NOT NULL,
    employee_department VARCHAR(16) NOT NULL,
    employee_title VARCHAR(16) NOT NULL,
    employee_phone VARCHAR(32) NOT NULL,
    employee_extension VARCHAR (8),
    employee_email VARCHAR(64) NOT NULL UNIQUE

);

CREATE TABLE customer (
    customer_id UUID NOT NULL PRIMARY KEY,
    customer_first_name VARCHAR(16) NOT NULL,
    customer_last_name VARCHAR(16) NOT NULL,
    customer_mailing_address VARCHAR(64) NOT NULL,
    customer_mailing_city  VARCHAR(16) NOT NULL,
    customer_mailing_state  VARCHAR(2) NOT NULL,
    customer_mailing_zip  VARCHAR(5) NOT NULL,
    customer_primary_phone  VARCHAR(10) NOT NULL,
    customer_secondary_phone  VARCHAR(5),
    customer_primary_email  VARCHAR(64) NOT NULL UNIQUE,
    customer_secondary_email  VARCHAR(16) UNIQUE
)