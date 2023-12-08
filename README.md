# Real Estate Project

## Overview
This real estate project is a modern web application designed to showcase properties, enable user authentication, and provide a dynamic user experience. Built with a robust stack including Vite, React, Redux, and Tailwind CSS, it offers a sleek, responsive interface, and fast performance.

## Technology Stack

### Frontend
- **Vite + React**: For a fast, modern web frontend.
- **Redux**: State management for React.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Backend
- **Express**: Flexible Node.js web application framework.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.

### Database
- **MongoDB**: Powerful NoSQL database.

### Authentication
- **JWT (JSON Web Tokens)**: Secure user authentication.
- **Firebase**: Comprehensive app development platform.
- **Google OAuth**: Easy and secure Google account integration.

### Hosting
- **Render.com**: Cloud service for hosting web applications.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Git (for cloning the repository)

### Installation

1. **Clone the Repository**
   ```sh
   git clone [URL of your repo]
   cd [repository-name]
### Install Dependencies
Navigate to the project directory and install the required dependencies.

sh
Copy code
npm install

### Environment Variables
Create a .env file in the project root and add the necessary environment variables:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
Run the Application

### Start the Backend Server
cd api
npm run dev

### Start the Frontend Application
cd client
npm run dev
