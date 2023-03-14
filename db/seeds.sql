INSERT INTO category (category_name)
VALUES
  ('Electronics'),
  ('Clothing'),
  ('Books');

INSERT INTO tag (tag_name)
VALUES
  ('New'),
  ('Sale'),
  ('Trending');

INSERT INTO product (product_name, price, stock, category_id)
VALUES
  ('iPhone 12', 999.99, 50, 1),
  ('MacBook Pro', 1499.99, 30, 1),
  ('T-Shirt', 19.99, 100, 2),
  ('Jeans', 39.99, 75, 2),
  ('The Great Gatsby', 9.99, 200, 3);

INSERT INTO product_tag (product_id, tag_id)
VALUES
  (1, 1),
  (2, 1),
  (2, 2),
  (3, 2),
  (4, 3),
  (5, 1),
  (5, 3);

