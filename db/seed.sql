create table if not exists product (
    product_id serial primary key,
    name varchar(40),
    description varchar(80),
    price integer,
    image_url text
);

