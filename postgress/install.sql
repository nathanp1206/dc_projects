CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    content VARCHAR,
    user_id INTEGER REFERENCES users (id)
);