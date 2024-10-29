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
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    photo_url VARCHAR,
    email VARCHAR UNIQUE NOT NULL,
    phone_number VARCHAR UNIQUE NOT NULL,
    is_child BOOLEAN DEFAULT false,
    emergency_contact_name VARCHAR,
    emergency_contact_email VARCHAR,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create Family Circle Table
CREATE TABLE familyCircle (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- Primary Key, auto-generated UUID
    user_id UUID NOT NULL,                           -- Foreign Key to the user table
    name VARCHAR(255) NOT NULL,                      -- Name of the family member
    email VARCHAR(255) NOT NULL,                     -- Email of the family member
    phone_number VARCHAR(20),                        -- Phone number of the family member
    relationship VARCHAR(50),                        -- Relationship to the user
    created_at TIMESTAMP DEFAULT NOW(),              -- Creation timestamp
    updated_at TIMESTAMP DEFAULT NOW(),              -- Update timestamp
    CONSTRAINT fk_user                              -- Foreign Key constraint
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE                            -- Delete familyCircle entries if user is deleted
);

CREATE TABLE standard_card (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  
    user_id UUID NOT NULL,
    description VARCHAR,
    notes JSON,
    shared_with JSON,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(), 
    CONSTRAINT fk_user                             
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE 
);