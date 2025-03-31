# Employee Management System (EMS)

A React-based application for managing employee tasks and assignments.

## 📋 Overview

Employee Management System (EMS) is a web application built with React that provides a platform for administrators to manage tasks for employees. The system features separate dashboards for administrators and employees, allowing for efficient task management and tracking.

## ✨ Features

- **Authentication System**: Secure login for both administrators and employees
- **Admin Dashboard**:
  - Create and assign tasks to employees
  - View all tasks across employees
  - Monitor task statuses
- **Employee Dashboard**:
  - View assigned tasks
  - Track task completion status
  - Task statistics (new, active, completed, failed)
- **Task Management**:
  - Create tasks with title, description, due date, and category
  - Assign tasks to specific employees
  - Track task status (new, active, completed, failed)
- **Responsive Design**: Works on desktop and mobile devices

## 🔧 Technologies Used

- React 19.0.0
- TailwindCSS 4.0.9
- Vite 6.2.0
- LocalStorage for data persistence

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/inspiredrishabh/Employee-Management-System
cd EMS
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## 🚀 Usage

### Login Credentials

#### Admin Account:

- **Email**: admin@example.com
- **Password**: 123

#### Employee Account:

- **Email**: e@a.com (Venkatesh)
- **Password**: 123

Other employee accounts are also available with the same password (123):

- employee2@example.com (Pratyush)
- employee3@example.com (Oscar)
- employee4@example.com (Priyanshu)
- employee5@example.com (Shikhar)

### Admin Dashboard

1. Log in using admin credentials
2. View overall task status
3. Create new tasks by filling out the form:
   - Task title
   - Description
   - Due date
   - Category
   - Assign to (use employee's first name exactly as spelled)
4. View all tasks across all employees

### Employee Dashboard

1. Log in using employee credentials
2. View your assigned tasks
3. See task statistics (new, active, completed, failed)
4. Tasks are color-coded based on their status:
   - Blue: New tasks
   - Yellow: Active tasks
   - Green: Completed tasks
   - Red: Failed tasks

## 📁 Project Structure
