import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import Authenticate from "./Authenticate";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
