import { useState } from "react";
import styles from "../styles/Login.module.css";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = loginFormData;
    loginUser(email, password)
      .then((res) => {
        if (res.success) {
          // Proceed to log in the user (e.g., redirect to dashboard)
          setIsLoggedIn(true);
          navigate("/");
          localStorage.setItem("loggedin", true);
          // Add your logic here (e.g., redirect or store user session)
        } else {
          // Show error message
          console.error(res.message);
          alert(res.message);
        }
      })
      .catch((error) => {
        // Handle unexpected errors
        console.error("Login error:", error);
        alert("An unexpected error occurred. Please try again.");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.login}>
        <div className={styles.logoSlogan}>
          <p className={styles.logo}>#VanLife</p>
          <h2 className={styles.slogan}>
            You got the travel plans, we got the travel vans.
          </h2>
        </div>
        <div className={styles.loginContainer}>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={loginFormData.email}
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={loginFormData.password}
              onChange={handleChange}
            />
            <button className={styles.loginBtn}>Log in</button>
          </form>
          <div className={styles.loginDetailsToLogin}>
            <p>Use these details to login</p>
            <p>Email: test@email.com</p>
            <p>Password: z123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
