# Mini Time Tracker

A web application for tracking work hours across different projects.

## Technologies Used

**Backend:** NestJS, TypeORM, PostgreSQL  
**Frontend:** React, TypeScript, Vite, Shadcn/ui, Tailwind CSS  
**Infrastructure:** Docker

## How to Run

### 1. Start PostgreSQL
```bash
docker-compose up -d
```

### 2. Start Backend
```bash
cd backend
npm install
npm run start:dev
```

Backend runs on `http://localhost:3001`  
Swagger docs: `http://localhost:3001/api/docs`

### 3. Start Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Architecture

- **Backend**: REST API with controller-service-repository pattern
- **Database**: Single `time_entries` table with TypeORM
- **Frontend**: Component-based React with React Router
- **Validation**: Backend (class-validator) + Frontend (Zod)