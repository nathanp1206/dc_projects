CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    is_completed BOOLEAN,
    user_id INTEGER REFERENCES users (id)
);