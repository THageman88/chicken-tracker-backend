CREATE DATABASE chicken_tracker;

CREATE TABLE cost(
    expense_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    date_acquired DATE,
   cost_amount NUMERIC(10, 2)
);

CREATE TABLE flock (
    flock_id SERIAL PRIMARY KEY,
    chx_name VARCHAR(50),
    hen_or_rooster BOOLEAN,
    age INT,
    date_acquired DATE,
    comments TEXT
);