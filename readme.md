# Prisma Node.js Project Documentation

## Project Overview
This project demonstrates the integration of Prisma ORM with Node.js for database management.

## Setup and Installation
1. Initialized Node.js project with `npm init -y`
2. Installed dependencies:
    ```bash
    npm install prisma @prisma/client
    npm install express
    ```
3. Initialized Prisma with `npx prisma init`

## Database Configuration
- Created PostgreSQL database schema
- Configured database connection in `.env` file
- Defined data models in `schema.prisma`

## Project Structure
```
prisma-nodejs/
├── prisma/
│   └── schema.prisma
├── src/
│   └── index.js
├── .env
├── package.json
└── readme.md
```

## API Implementation
- Set up Express server
- Created CRUD operations for user management
- Implemented database queries using Prisma Client

## Usage
1. Run migrations: `npx prisma migrate dev`
2. Start server: `npm start`
3. Access API endpoints via localhost

## Environmental Variables
Required environment variables in `.env`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```