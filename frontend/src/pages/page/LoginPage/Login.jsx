import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function LoginPage() {
  return (
    <section class="home">
      <div class="form_container">
        <i class="uil uil-times form_close"></i>
        <div class="form login_form">
          <form class="form login_form">
            <h2>Login</h2>
            <div class="input_box">
              <input
                name="email"
                id="user"
                type="email"
                required
                placeholder="Enter your email"
              />
              <i class="uil uil-envelope-alt email"></i>
            </div>
            <div class="input_box">
              <input
                name="password"
                type="password"
                required
                placeholder="Enter your password"
              />
              <i class="uil uil-lock password"></i>
              <i class="uil uil-eye-slash pw_hide"></i>
            </div>
            <button class="button">Login Now</button>
            <div class="login_signup">
              Don't have an account? <Link to="/register">Sign up!</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
