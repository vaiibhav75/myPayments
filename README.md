# MyPayments App

This is a simple Payment and Wallet Simulator application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to sign up, sign in, view their balance, transfer money, search for other users, and update their profile.

Deployed link: [MyPayments App](https://my-payments.vercel.app/)

## Features

- **Sign Up:** Users can create a new account by providing their email and password.
- **Sign In:** Existing users can sign in to their accounts securely.
- **View Balance:** Once logged in, users can view their current account balance.
- **Transfer Money:** Users can transfer money to other users by specifying the recipient and amount.
- **Search Users:** Users can search for other users by name or email.
- **Update Profile:** Users can update their profile information, such as name and email.

## Technologies Used

- **MongoDB:** Used as the database to store user information and transactions.
- **Express.js:** Backend framework for handling HTTP requests and routes.
- **React.js:** Frontend framework for building the user interface.
- **Node.js:** JavaScript runtime environment for running server-side code.
- **JWT (JSON Web Token):** Used for securely transmitting information between the client and server as a JSON object.
- **bcrypt:** Library for hashing passwords.
- **Recoil:** State management library for React.

## Installation

1. Clone the repository:

    `git clone https://github.com/vaiibhav75/myPayments.git`

2. Navigate to the project directory:

    `cd myPayments`

## Backend setup
    Note - You can skip this step and use the already deployed version

1. Navigate to the `backend` directory:

   `cd backend`

2. Install the dependencies:

    `npm install`

3. Set up environment variables:
    - Create a `.env` file in the `backend` directory.
    - Add the following variables:
        - `MONGODB_URI`: URI for connecting to your MongoDB database.
        - `JWT_SECRET`: Secret key for JWT token generation.

4. Start the server:
    
    `node index.js`

5. The server should now be running on `http://localhost:3000`.

6. Copy the deployed link and paste it in the `frontend/src/config.js` file.

## Frontend setup

1. Navigate to the `frontend` directory:

    `cd frontend`

2. Install the dependencies:

    `npm install`

3. Start the development server:

    `npm run dev`

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to help improve this project.
