# <div align="center">Notes Management App</div>

This program allows you to manage notes with the ability to change localization. You can easily view, create, update, and delete notes.

## Get Started

### To run the backend part of the project, follow this instruction:

1. Clone the repository:

   ```bash
   git clone https://github.com/vadymhrnk/notes-management-app.git
   ```

2. Download [JDK](https://www.oracle.com/java/technologies/downloads/), [Apache Maven](https://maven.apache.org/download.cgi) and [Docker](https://docs.docker.com/get-docker/)

3. Go to this folder:

   ```bash
   cd notes-management-app/backend
   ```

4. Build \*.jar file for the Docker:

   ```bash
   mvn package
   ```

5. Build and then run the project using Docker:

   ```bash
   docker compose build

   docker compose up
   ```

### To run the frontend part of the project, follow next instructions:

1. Download [Node.js](https://nodejs.org/en/download/package-manager)

2. Create new Terminal in the `notes-management-app/frontend` folder.

3. Install all dependencies:

   ```bash
   npm install
   ```

4. Run the project using this command:

   ```bash
   npm start
   ```

5. **(Optional)** To run end-to-end test use following command (frontend server should be running):

   ```bash
   npx cypress run
   ```

## Technologies Used

### Backend Technologies

- **Java 17**: The primary programming language for backend development.
- **Spring Boot**: A framework for building and deploying Java-based applications with ease.
  - **Spring Boot Starter Data JPA**: Starter for using Spring Data JPA with Hibernate.
  - **Spring Boot Starter Web**: Starter for building web applications, including RESTful APIs.
  - **Spring Boot Starter Validation**: Starter for validation support.
  - **Spring Boot Starter Test**: Starter for testing Spring Boot applications.
- **MySQL Connector/J**: JDBC driver for MySQL integration.
- **H2 Database**: An in-memory database for testing purposes.
- **Liquibase Core**: A database-independent library for tracking, managing, and applying database schema changes.
- **MapStruct**: Simplifies the implementation of bean mappings, reducing manual coding effort.
- **Lombok**: A tool to reduce boilerplate code, enhancing code readability and conciseness.
- **Springdoc OpenAPI UI**: An OpenAPI for generating documentation with a UI interface.

### Frontend Technologies

- **React**: A JavaScript library for building user interfaces.
- **Typescript**: A strongly typed programming language that builds on JavaScript.
- **Sass**: A preprocessor scripting language that is interpreted or compiled into CSS.
- **Recoil**: A state management library for React.
- **i18next**: An internationalization framework for JavaScript.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **Cypress**: A next-generation front-end testing tool built for the modern web.
- **Web Vitals**: A set of metrics to measure the performance of your website.

## Application Endpoints

- `POST: /notes` -> Create a new note.
- `GET: /notes` -> Get a list of all existing notes.
- `GET: /notes/{id}` -> Get note by specific ID.
- `PUT: /notes/{id}` -> Update existing note.
- `DELETE: /notes/{id}` -> Delete note by ID.
