import styles from "../../styles/Login.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post(
        "https://delivery-mr3tvhv6b-mladenovic-13.vercel.app/api/login",
        {
          username,
          password,
        }
      );
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Admin Dashboard</h1>
        <input
          className={styles.input}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Passowrd"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && (
          <span className={styles.error}>Wrong username or password!</span>
        )}
      </div>
    </div>
  );
};

export default Login;
