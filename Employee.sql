CREATE TABLE Employee (
    id serial PRIMARY KEY,
    name VARCHAR (50) UNIQUE NOT NULL,
    age VARCHAR (50) NOT NULL,
    address VARCHAR (255) UNIQUE NOT NULL,
    mobile_number txt NOT NULL
);