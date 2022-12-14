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