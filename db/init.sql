-- Créer une base de données
CREATE DATABASE IF NOT EXISTS appdb;

-- Utiliser la base de données
USE appdb;

-- Créer une table pour les utilisateurs
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insérer des utilisateurs de test
INSERT INTO users (username, password) VALUES ('user1', 'password1');
INSERT INTO users (username, password) VALUES ('user2', 'password2');
