import { Link, useHistory } from "react-router-dom";
import React from "react";
import "./Login.css";
import { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("./");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          history.push("./");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="./">
        <img className="login__logo" src={require("./logo/farmlogo.jpeg")} />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            className="email__input"
            value={email}
            onChange={(e) => setLogin(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="text"
            className="password__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign-In
          </button>
        </form>

        <p>
          Please use below button in case you wish to register and is not a
          active user
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your farm fresh account
        </button>
      </div>
    </div>
  );
}

export default Login;
