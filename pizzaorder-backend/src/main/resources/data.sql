INSERT INTO user (full_name, user_name, password) VALUES ('Kis Joska', 'joskakis', 'Almakukac');
INSERT INTO user (full_name, user_name, password) VALUES ('David Kata', 'kata_david', 'Almakukac');
INSERT INTO user (full_name, user_name, password) VALUES ('Szonja Dora', 'dora-szonja', 'Almakukac');

INSERT INTO orders (name, address, phone_number, user_id, status, created_at, modified_at) VALUES ('Kis Joska', 'Budapest, Rakoczi ut 12.', '+36201234567', 1, 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
INSERT INTO orders (name, address, phone_number, user_id, status, created_at, modified_at) VALUES ('David Kata', 'Sri Lanka, Banat utca 1.', '+36301244567', 2, 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
INSERT INTO orders (name, address, phone_number, user_id, status, created_at, modified_at) VALUES ('Szonja Dora', 'Budapest, Vorosmarty ter 2.', '+36201235567', 3, 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

INSERT INTO category (name) VALUES ('Salata');
INSERT INTO category (name) VALUES ('Pizza');
INSERT INTO category (name) VALUES ('Desszert');
INSERT INTO category (name) VALUES ('Udito');

INSERT INTO product (name, description, price) VALUES ('Hawaii pizza', 'Egy nagyon szep hawaii pizza', 1690);

INSERT INTO user_orders (user_id, orders_id) VALUES (1, 1);
INSERT INTO user_orders (user_id, orders_id) VALUES (2, 2);
INSERT INTO user_orders (user_id, orders_id) VALUES (3, 3);

INSERT INTO product_categories (products_id, categories_id) VALUES (1, 2);

INSERT INTO orders_products (orders_id, products_id) VALUES (1, 1);