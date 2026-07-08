create table if not exists users(
    id serial primary key,
    username varchar(50) unique not null,
    password varchar(255) not null,
    email varchar(100) unique not null,
    role varchar(50) not null
);
