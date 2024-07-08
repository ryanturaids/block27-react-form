import { useState } from "react";
export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  async function handleClick() {
    try {
      console.log("handleClick ran");
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(token);
      setSuccessMessage(result.message);
    } catch (error) {
      console.log(token);
      setError(error.message);
    }
  }
  return (
    <>
      <div id="authentication">
        <div>
          <h2>Authenticate:</h2>
          <button onClick={handleClick}>Authenticate Token</button>
        </div>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
