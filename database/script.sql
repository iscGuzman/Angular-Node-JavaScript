CREATE DATABASE p_games;

USE p_games;

CREATE TABLE games (
    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    region VARCHAR(180)

);

DESCRIBE games;
