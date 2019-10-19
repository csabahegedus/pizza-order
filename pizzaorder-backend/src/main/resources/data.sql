INSERT INTO user (full_name, user_name, password, role) VALUES ('Admin Guy', 'admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_ADMIN');
INSERT INTO user (full_name, user_name, password, role) VALUES ('Kis Joska', 'joskakis', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');
INSERT INTO user (full_name, user_name, password, role) VALUES ('David Kata', 'kata_david', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');
INSERT INTO user (full_name, user_name, password, role) VALUES ('Vamos Miklos', 'miki-vamos', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');
INSERT INTO user (full_name, user_name, password, role) VALUES ('Sajtos Rezso', 'rezsosajt', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');
INSERT INTO user (full_name, user_name, password, role) VALUES ('Falusi Dorottya', 'dora-felfedezo', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');
INSERT INTO user (full_name, user_name, password, role) VALUES ('Sandor Peter', 'peter-rodnas', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');
INSERT INTO user (full_name, user_name, password, role) VALUES ('Kis Eszter', 'kiseszti', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');

INSERT INTO orders (name, address, phone_number, user_id, status, created_at, modified_at) VALUES ('Kis Joska', 'Budapest, Rakoczi ut 12.', '+36201234567', 2, 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
INSERT INTO orders (name, address, phone_number, user_id, status, created_at, modified_at) VALUES ('David Kata', 'Sri Lanka, Banat utca 1.', '+36301244567', 3, 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
INSERT INTO orders (name, address, phone_number, user_id, status, created_at, modified_at) VALUES ('Szonja Dora', 'Budapest, Vorosmarty ter 2.', '+36201235567', 4, 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

INSERT INTO category (name) VALUES ('Salata');
INSERT INTO category (name) VALUES ('Pizza');
INSERT INTO category (name) VALUES ('Desszert');
INSERT INTO category (name) VALUES ('Udito');

INSERT INTO product (name, description, price) VALUES ('Hawaii pizza', 'Egy nagyon szep hawaii pizza', 1690);
INSERT INTO product (name, description, price) VALUES ('Margareta pizza', 'Egy nagyon szep natur pizza', 1390);
INSERT INTO product (name, description, price) VALUES ('Csokis palacsinta', 'Egy edes palcsi.', 590);
INSERT INTO product (name, description, price) VALUES ('Coca-cola 0_33', 'Be sem kell mutatni.', 390);
INSERT INTO product (name, description, price) VALUES ('Natur aqua 0_5', 'Palackozott muanyag viz.', 390);
INSERT INTO product (name, description, price) VALUES ('Gorog salata', 'Egy kis zold.', 990);

--INSERT INTO user_orders (user_id, orders_id) VALUES (2, 1);
--INSERT INTO user_orders (user_id, orders_id) VALUES (3, 2);
--INSERT INTO user_orders (user_id, orders_id) VALUES (4, 3);

INSERT INTO product_categories (products_id, categories_id) VALUES (1, 2);
INSERT INTO product_categories (products_id, categories_id) VALUES (2, 2);
INSERT INTO product_categories (products_id, categories_id) VALUES (3, 3);
INSERT INTO product_categories (products_id, categories_id) VALUES (4, 4);
INSERT INTO product_categories (products_id, categories_id) VALUES (5, 4);
INSERT INTO product_categories (products_id, categories_id) VALUES (6, 1);

INSERT INTO orders_products (orders_id, products_id) VALUES (1, 1);
INSERT INTO orders_products (orders_id, products_id) VALUES (1, 4);
INSERT INTO orders_products (orders_id, products_id) VALUES (2, 3);
INSERT INTO orders_products (orders_id, products_id) VALUES (2, 5);
INSERT INTO orders_products (orders_id, products_id) VALUES (3, 6);