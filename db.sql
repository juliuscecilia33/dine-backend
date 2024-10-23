CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create allergens table 
-- TODO: Add User_ID as foreign key to User table ID
CREATE TABLE allergen (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    severity  VARCHAR,
    description TEXT,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

-- -- Create users table
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(50) UNIQUE NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create allergy_cards table to relate users with allergens
-- CREATE TABLE allergy_cards (
--     id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(id) ON DELETE CASCADE,
--     allergen_id INT REFERENCES allergens(id) ON DELETE CASCADE,
--     severity VARCHAR(50),  -- e.g., mild, moderate, severe
--     notes TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
