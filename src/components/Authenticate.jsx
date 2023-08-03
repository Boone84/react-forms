import React, { useState } from "react";

export default function Authenticate({ token }) {
  const [username, setUsername] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setUsername(result.data.username);
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div style={{ width: '200px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f8f8', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center' }}>Authenticate</h2>
      {username && <p style={{ color: 'green' }}>Logged in as: {username}</p>}
      {successMessage && <p>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: '#007bFF', color: 'white', border: 'none', borderRadius: '5px' }} onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
