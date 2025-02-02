# Prisma Node.js Project

## Project Overview
This project demonstrates the use of Prisma as an ORM for a Node.js application. It includes setting up Prisma, defining a schema, and performing CRUD operations.

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Schema Definition](#schema-definition)
- [Database Migration](#database-migration)
- [CRUD Operations](#crud-operations)
- [Running the Application](#running-the-application)

## Installation
1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd prisma-nodejs
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Setup
1. Initialize Prisma in your project:
    ```sh
    npx prisma init
    ```
2. Configure the database connection in the `.env` file:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
    ```

## Schema Definition
1. Define your data model in `prisma/schema.prisma`:
    ```prisma
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }

    generator client {
      provider = "prisma-client-js"
    }

    model User {
      id    Int     @id @default(autoincrement())
      name  String
      email String  @unique
    }
    ```

## Database Migration
1. Create and apply the migration:
    ```sh
    npx prisma migrate dev --name init
    ```

## CRUD Operations
1. Generate the Prisma Client:
    ```sh
    npx prisma generate
    ```
2. Example of CRUD operations in `src/index.js`:
    ```js
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    async function main() {
      // Create a new user
      const newUser = await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@example.com',
        },
      });
      console.log('Created new user:', newUser);

      // Read all users
      const allUsers = await prisma.user.findMany();
      console.log('All users:', allUsers);

      // Update a user
      const updatedUser = await prisma.user.update({
        where: { id: newUser.id },
        data: { name: 'Alice Wonderland' },
      });
      console.log('Updated user:', updatedUser);

      // Delete a user
      const deletedUser = await prisma.user.delete({
        where: { id: newUser.id },
      });
      console.log('Deleted user:', deletedUser);
    }

    main()
      .catch(e => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    ```

## Running the Application
1. Start the application:
    ```sh
    node src/index.js
    ```

## Conclusion
This project provides a basic setup for using Prisma with Node.js, including schema definition, database migration, and CRUD operations. For more advanced usage, refer to the [Prisma documentation](https://www.prisma.io/docs/).