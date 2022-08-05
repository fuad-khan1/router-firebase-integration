import React from "react";
import UseFirebase from "../../Hooks/UseFirebase";

const Login = () => {
  const { singInWithGoogle } = UseFirebase();
  return (
    <div>
      <h2>Login</h2>

      <div style={{ margin: "20px" }}>
        <button onClick={singInWithGoogle}>Google SignIn</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
