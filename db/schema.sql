DROP DATABASE if exists burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE types (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

