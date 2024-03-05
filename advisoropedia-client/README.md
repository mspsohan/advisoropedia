# Advisoropedia Full Stack Assignment

Live Link:

This repository contains a full-stack application built with Node.js, Express.js, MongoDB, React.js, and Tailwind CSS. The application implements user signup functionality with JWT authentication and a post list screen with infinite scroll.

### Technology Stack

-  Node.js and npm: JavaScript runtime and package manager.
-  Express.js: Web framework for Node.js.
-  MongoDB: NoSQL database for storing user and post data.
-  jsonwebtoken: Library for JWT generation and validation.
-  React.js: JavaScript library for building user interfaces.
-  Tailwind CSS: Utility-first CSS framework for styling.

Project Setup

1. Clone Repository:

```
git clone <repository-url>
```

2. Install Dependencies for Client:

```
cd advisoropedia
cd advisoropedia-client
npm install
```

3. Install Dependencies for Server:

```
cd advisoropedia
cd advisoropedia-server
npm install
```

4. Environment Variables for client: Create a .env file in the root directory and add the following variables:

```
VITE_API_URL=https://advisoropedia-post.vercel.app
VITE_IMGBB_API_KEY=your_api_key
```

5. Environment Variables for server: Create a .env file in the root directory and add the following variables:

```
MONGODB_URI=Mongo_uri
DB_NAME=database_name
JWT_SECRET=d604501d5146f02128196d62d5ab5e6bf0b90f6b0c9fb2949872d82e8fd877c1f620de8c21124a3a0d6b675719e3fe0f
```

6. Start Backend Server:

```
node index.js
```

7. Start Frontend Development Server:

```

npm run dev
```

-  Client Site will Open: http://localhost:5173
-  Server Site will Open: http://localhost:5000
