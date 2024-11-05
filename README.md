# Superheroes Database

Welcome to the Superheroes Database project! This application allows users to view, add, and manage superhero information with a clean and intuitive interface.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Migration](#migration)
- [Running the Application](#running-the-application)

## Installation

To get started with the Superheroes Database project, follow these steps:

<u>(Before you start these steps, you will need to create a database in postgresql called 'superhero_db')</u>

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Roketskyi/Superheroes_Database-Full_stack.git
   ```

2. **Install the dependencies**:
   - Navigate to the client directory:
     ```bash
     cd ./client
     ```
     Then install the required packages:
     ```bash
     npm install
     ```

   - Next, navigate to the server directory:
     ```bash
     cd ../server
     ```
     And install the necessary packages:
     ```bash
     npm install
     ```

## Configuration

3. **Create a `.env` file in the server directory**:
   Use the following format as an example:
   ```plaintext
   DATABASE_URL=postgres://username:password@localhost:5432/superhero_db
   PORT=4000
   ```
   Replace `username`, `password` with your actual PostgreSQL credentials. It is recommended to keep the `PORT` as `4000`.

## Migration

4. **Create the uploads folder in the server**:
   Make a new directory named `uploads` in the server directory:
   ```bash
   mkdir server/uploads
   ```

5. **Create migrations and tables, and connect to the database**:
   - Generate a migration file for your tables:
     ```bash
     npx sequelize-cli migration:generate --name create-table-name
     ```
   - Run the migrations to create the tables in your database:
     ```bash
     npx sequelize-cli db:migrate
     ```

## Running the Application

6. **Start the application**:
   - First, navigate to the client directory and start the client application:
     ```bash
     cd ./client
     npm start
     ```

   - Then, open a new terminal, navigate to the server directory, and start the server application:
     ```bash
     cd ./server
     npm start
     ```

Now, your Superheroes Database application should be up and running! Visit `http://localhost:4000` in your browser to access the client application.
