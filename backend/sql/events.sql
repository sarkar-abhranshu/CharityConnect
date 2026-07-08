create table if not exists events(
    id serial primary key,
    title varchar(150) not null,
    description text,
    event_date date,
    location varchar(150),
    ngo_id bigint unsigned,
    image_url varchar(500),
    price decimal(10, 2) default 0,
    created_at timestamp default current_timestamp,
    foreign key (ngo_id) references users(id)
);
