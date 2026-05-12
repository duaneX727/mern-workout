# Workout Buddy - Frontend

This is the frontend application for the **Workout Buddy** project, a MERN (MongoDB, Express, React, Node.js) stack application. It allows users to track their workouts, view details, and manage their exercise routines with full user authentication. 

*Tutorial source:* [The Net Ninja - MERN Stack Crash Course](https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=1)

## Features

- **User Authentication:** 
  - User Signup and Login functionality.
  - Protected routes (users must be logged in to manage workouts).
  - JWT (JSON Web Token) based authentication context.
- **Workout Management:**
  - Create new workouts (Title, Load, Reps).
  - View all workouts in a feed.
  - Delete workouts.
- **State Management:**
  - Uses React Context API (`AuthContext`, `WorkoutContext`) combined with `useReducer` for robust global state management.
- **Custom Hooks:** 
  - Abstracted logic using hooks like `useAuthContext`, `useWorkoutsContext`, `useLogin`, `useSignup`, and `useLogout`.

## Tech Stack

- **React.js:** UI Library
- **React Router DOM:** Handling navigation (Pages: Home, Login, Signup)
- **Context API:** Global State Management
- **CSS:** Standard CSS for styling (`index.css`)

## Project Structure

```text
src/
├── components/       # Reusable UI components (NavBar, WorkoutDetails, WorkoutForm)
├── context/          # React Context providers (AuthContext, WorkoutContext)
├── hooks/            # Custom hooks for state and auth logic
├── pages/            # Main route pages (Home, Login, Signup)
├── App.js            # Main application component & routing setup
└── index.js          # React entry point
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You will also need the backend API running for the app to function properly.

### Installation

1. Clone the repository or navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the development server, run:

```bash
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Backend Connection

By default, the application makes API requests to the backend server. Make sure your backend API is running (typically on `http://localhost:4000` for this tutorial) and that you have a proxy configured in `package.json` if needed:

```json
"proxy": "http://localhost:4000"
```
