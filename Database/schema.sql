DROP DATABASE IF EXISTS nozama;

CREATE DATABASE nozama;

USE nozama;

CREATE TABLE products (
  id int PRIMARY KEY AUTO_INCREMENT,
  productName VARCHAR(100) NOT NULL,
  productPrice decimal(10, 2) NOT NULL
);

INSERT INTO products (productName, productPrice) VALUES ("Blender Bottle", "10.50");
INSERT INTO products (productName, productPrice) VALUES ("Headphones", "45.23");