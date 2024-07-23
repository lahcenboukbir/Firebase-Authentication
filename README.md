# Firebase Authentication

## Project Overview

**Firebase Authentication with Light and Dark Mode** is a web application that provides user authentication using Firebase. This project includes features such as user sign-up, sign-in, password reset, and profile management, along with a dynamic user interface that supports both light and dark themes.

## Features

- **User Authentication**: Sign up, sign in, and reset passwords using Firebase Authentication.
- **Profile Management**: Update user profiles with a custom display name.
- **Responsive Design**: The application is designed to be responsive and accessible on various devices.
- **Light and Dark Mode**: Users can switch between light and dark themes based on their preference.

## Technologies Used

- **React.js**: Frontend framework for building user interfaces.
- **Firebase**: Backend services for authentication and user management.
- **CSS**: Styling for the user interface with support for light and dark modes.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- Firebase project set up in the Firebase console.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
   
2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up Firebase:**

- Create a Firebase project in the Firebase Console.
- Add your Firebase configuration to src/Firebase/Firebase.js.

4. **Run the application:**

    ```sh
    npm start
    ```
    
This will start the development server and open the application in your default web browser.

### Usage

- **Sign Up**: Navigate to /sign-up to create a new user account.
- **Sign In**: Navigate to /sign-in to log in to your account.
- **Reset Password**: Navigate to /reset-password if you need to reset your password.
- **Profile**: Navigate to /profile to view and update your profile information.
- **Toggle Theme**: Use the theme toggle button to switch between light and dark modes.

### Project Structure

- **public/**: Public assets and index.html file.
- **src/**: Contains the source code for the application.
    - **components/**: Reusable components like NavBar and Footer.
    - **pages/**: Contains page components like Home, SignUp, SignIn, etc.
    - **Firebase/**: Firebase configuration and initialization.
    - **styles/**: CSS files for styling the application.

### Contributing

- Fork the repository and clone it to your local machine.
- Create a new branch for your feature or bug fix.
- Make changes and test them locally.
- Submit a pull request with a description of your changes.

### Contact

If you have any questions or suggestions, feel free to contact me.
