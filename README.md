# Superhero Database Project

Welcome to the Superhero Database Project! This project allows users to manage a collection of superheroes with various features. Follow the instructions below to set up and run the project locally.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Creating Migrations and Tables](#creating-migrations-and-tables)
- [Running the Project](#running-the-project)
- [License](#license)

## Installation

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/Roketskyi/Test-task-from-JSN.git
   ```

2. **Install Dependencies**

   Navigate to the client and server directories and install the necessary packages:

   - For the client:

     ```bash
     cd ./client
     npm install
     ```

   - For the server:

     ```bash
     cd ../server
     npm install
     ```

## Configuration

3. **Create the `.env` File**

   Create a `.env` file in the `server` directory and set up your environment variables. Use the following template:

   ```plaintext
   DATABASE_URL=postgres://username:password@localhost:5432/superhero_db
   PORT=4000
   ```

   Replace `username`, `password`, and any other details with your actual PostgreSQL database credentials.

4. **Create the `uploads` Directory**

   Create a directory named `uploads` in the server directory to store uploaded files:

   ```bash
   mkdir server/uploads
   ```

## Creating Migrations and Tables

5. **Generate Migrations and Migrate the Database**

   Run the following commands to create migrations and set up your database tables:

   ```bash
   npx sequelize-cli migration:generate --name create-table-name
   npx sequelize-cli db:migrate
   ```

   Make sure to replace `create-table-name` with a meaningful name for your migration.
