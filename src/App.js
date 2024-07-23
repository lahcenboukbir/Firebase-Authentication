import React from "react";
import "./styles/App.css";
import "./styles/Footer.css";
import "./styles/NavBar.css";
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/Error.css";
import "./styles/Home.css";
import "./styles/Profile.css";
import "./styles/ResetPassword.css";
import "./styles/SignIn.css";
import "./styles/SignUp.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeContext from "./components/ThemeContext";
import { useContext } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  const { mode, changeMode, modeName, changeModeName } =
    useContext(ThemeContext);

  function toggleTheme() {
    changeMode();
    changeModeName();
  }

  return (
    <div div className={`container ${mode}`}>
      <RouterProvider router={router} />
      <button className="toggle-button" onClick={toggleTheme}>{modeName} mode</button>
    </div>
  );
};

export default App;
