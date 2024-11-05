# Superhero Database API

Цей проект є бекендом для веб-додатку, що управляє інформацією про супергероїв. API дозволяє виконувати CRUD-операції (створення, читання, оновлення та видалення) для моделі "супергероя".

## Огляд

API надає можливість:

- Додавати нових супергероїв
- Отримувати список усіх супергероїв з пагінацією
- Отримувати деталі конкретного супергероя
- Оновлювати інформацію про супергероя
- Видаляти супергероя
- Додавати та видаляти зображення супергероя

## Технології

- **Node.js** — для побудови серверної частини
- **Express.js** — для маршрутизації та обробки запитів
- **PostgreSQL** — реляційна база даних для зберігання даних
- **Sequelize** — ORM для роботи з PostgreSQL
- **Multer** — middleware для обробки multipart/form-data (для завантаження зображень)
- **Jest та Supertest** — для тестування API

## Установка

### Передумови

- [Node.js](https://nodejs.org/) (версія 14 або новіша)
- [PostgreSQL](https://www.postgresql.org/) (версія 12 або новіша)

### Кроки для запуску

1. Клонувати репозиторій:
   ```bash
   git clone https://github.com/yourusername/superhero-app.git
   cd superhero-app

2. Встановити залежності:
   ```bash
   npm install

3. Налаштувати базу даних:
   - Створити базу даних PostgreSQL (наприклад, `superhero_db`).
   - Створити `.env` файл в кореневій директорії проекту з такими змінними:
     ```env
     DATABASE_URL=postgres://<user>:<password>@localhost:5432/superhero_db
     PORT=3000
     ```

4. Запустити міграції:
   ```bash
   npx sequelize-cli db:migrate

5. Запустити сервер:
   ```bash
   npm start

6. **API буде доступний за адресою** [http://localhost:3000/api/superheroes](http://localhost:3000/api/superheroes).

## Використання API

### Створити супергероя

**Метод:** `POST`  
**URL:** `/api/superheroes`  
**Тіло запиту (JSON):**
```json
{
  "nickname": "Batman",
  "real_name": "Bruce Wayne",
  "origin_description": "Gotham City billionaire",
  "superpowers": ["Detective skills", "Martial arts"],
  "catch_phrase": "I am Batman",
  "images": ["url1", "url2"]
}

### Отримати список супергероїв

**Метод:** `GET`  
**URL:** `/api/superheroes?page=1`  
**Опис:** Отримує список усіх супергероїв з пагінацією, 5 елементів за запит.

**Відповідь (JSON):**
```json
{
  "data": [
    {
      "id": 1,
      "nickname": "Batman",
      "images": ["url1"]
    },
    {
      "id": 2,
      "nickname": "Superman",
      "images": ["url2"]
    }
  ],
  "totalPages": 2
}

### Отримати деталі супергероя

**Метод:** `GET`  
**URL:** `/api/superheroes/:id`  
**Опис:** Отримує детальну інформацію про конкретного супергероя за його унікальним ідентифікатором.

**Відповідь (JSON):**
```json
{
  "id": 1,
  "nickname": "Batman",
  "real_name": "Bruce Wayne",
  "origin_description": "Gotham City billionaire",
  "superpowers": ["Detective skills", "Martial arts"],
  "catch_phrase": "I am Batman",
  "images": ["url1", "url2"]
}

### Оновити супергероя

**Метод:** `PUT`  
**URL:** `/api/superheroes/:id`  
**Опис:** Оновлює інформацію про конкретного супергероя за його унікальним ідентифікатором.

**Тіло запиту (JSON):**
```json
{
  "nickname": "New Batman",
  "real_name": "Bruce Wayne",
  "origin_description": "Gotham City billionaire turned vigilante",
  "superpowers": ["Detective skills", "Martial arts", "Stealth"],
  "catch_phrase": "I am Batman",
  "images": ["new_url1", "new_url2"]
}

### Видалити супергероя

**Метод:** `DELETE`  
**URL:** `/api/superheroes/:id`  
**Опис:** Видаляє супергероя за його унікальним ідентифікатором.  

**Приклад запиту:**
```http
DELETE /api/superheroes/1

**Приклад відповіді:**
```json
{
  "message": "Superhero deleted"
}

## Приклад відповіді

### Створити супергероя

**Успішна відповідь:**
```json
{
  "id": 1,
  "nickname": "Batman",
  "real_name": "Bruce Wayne",
  "origin_description": "Gotham City billionaire",
  "superpowers": ["Detective skills", "Martial arts"],
  "catch_phrase": "I am Batman",
  "images": ["url1", "url2"]
}

### Помилка при створенні супергероя

**Відповідь при помилці:**
```json
{
  "error": "Failed to create superhero"
}

### Отримання помилки при отриманні супергероїв

**Відповідь при помилці:**
```json
{
  "error": "Failed to fetch superheroes"
}

### Оновлення супергероя

**PUT** `/api/superheroes/:id`

**Тіло запиту:**
```json
{
  "nickname": "New Batman",
  "real_name": "Bruce Wayne",
  "origin_description": "Gotham City billionaire",
  "superpowers": ["New power", "Intelligence"],
  "catch_phrase": "I am still Batman",
  "images": ["new_url1", "new_url2"]
}

### Видалити супергероя

**DELETE** `/api/superheroes/:id`

### Параметри запиту

- `id`: ID супергероя, якого потрібно видалити.

### Відповідь

**Успішна відповідь:**
```json
{
  "message": "Superhero deleted"
}

