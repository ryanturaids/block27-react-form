import React from "react";
import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        { method: "POST" }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
      setSuccessMessage(result.message);
      console.log(result.token);
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <div id="signUp">
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            <span>Username:</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={3}
              maxLength={12}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </label>
          <details>
            <summary>See Form Requirments</summary>
            <p>
              <strong>Username:</strong>
            </p>
            <ul>
              <li>Must be 3 - 12 characters long</li>
            </ul>
            <p>
              <strong>Password:</strong>
            </p>
            <ul>
              <li>Must be at least 8 characters long</li>
            </ul>
          </details>
          <button type="submit">Submit</button>
        </form>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
