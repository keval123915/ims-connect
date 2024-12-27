 README.md

 IMSConnect: Idea Management System

 Overview
IMSConnect is a fullstack web application designed to streamline the idea submission, voting, and reward processes within an organization. It features rolebased access control, user authentication, and secure interactions between the frontend and backend.



 Features
 User Authentication: Secure login and registration using JWT.
 Idea Submission: Employees can submit and describe innovative ideas.
 Voting System: Users can vote on submitted ideas to indicate support or interest.
 Reward Management: Tracks points for user participation and displays rewards.
 RoleBased Access: Rolespecific privileges for employees, managers, and admins.
 Secure Backend: Data security via password hashing and protected routes.



 Technologies Used

 Backend
 Node.js and Express.js: Web server and routing.
 MongoDB and Mongoose: Database and object modeling.
 JSON Web Tokens (JWT): Secure authentication.
 bcrypt: Password hashing.

 Frontend
 React.js: User interface and component rendering.
 React Router DOM: Navigation between pages.
 Axios: API communication with the backend.
 Bootstrap: Responsive styling.



 Installation Instructions

 Prerequisites
1. Node.js and npm installed.
2. MongoDB installed locally or access to a MongoDB Atlas cluster.



 1. Backend Setup
1. Navigate to the backend directory:
   
   cd backend
   
2. Install backend dependencies:
   
   npm install
   
3. Create a .env file in the backend folder:
   plaintext
   MONGO_URI=mongodb://127.0.0.1:27017/imsconnect
   JWT_SECRET=your_jwt_secret
   PORT=4000
   
4. Start the backend server:
   
   nodemon server.js
   



 2. Frontend Setup
1. Navigate to the frontend directory:
   
   cd frontend
   
2. Install frontend dependencies:
   
   npm install
   
3. Start the React development server:
   
   npm start
   



 Usage

 1. Register a New User
 Open the app and navigate to the Register page.
 Create a user account with a role (Employee/Manager/Admin).

 2. Log In
 Log in with the registered credentials to receive a JWT token.

 3. Submit Ideas
 Navigate to the Submit Idea page to propose a new idea.

 4. View and Vote on Ideas
 Browse ideas on the homepage and vote to support the most innovative ones.

 5. View Rewards
 Check your accumulated points and rewards on the Rewards page.



 Folder Structure

imsconnect/
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── services/
└── README.md




 API Endpoints

 Authentication
 POST /api/auth/register: Register a new user.
 POST /api/auth/login: Log in and receive a JWT token.

 Ideas
 GET /api/ideas: Fetch all submitted ideas (protected route).
 POST /api/ideas: Submit a new idea (protected route).

 Votes
 GET /api/votes: Fetch all votes (protected route).
 POST /api/votes: Cast a vote on an idea (protected route).

 Rewards
 GET /api/rewards: View reward points (protected route).


For support or inquiries, feel free to contact me at kevalvision@gmail.com