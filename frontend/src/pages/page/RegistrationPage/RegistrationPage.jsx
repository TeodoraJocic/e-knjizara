import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

function RegistrationPage() {
  return (
    <section class="home">
      <div class="form_container">
        <i class="uil uil-times form_close"></i>
        <div class="form signup_form">
          <form>
            <h2>Signup</h2>
            <div class="input_box">
              <input name="name" id="name" placeholder="Enter your name" />
              <i class="uil uil-envelope-alt email"></i>
            </div>
            <div class="input_box">
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
              <i class="uil uil-envelope-alt email"></i>
            </div>
            <div class="input_box">
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Create password"
                required
              />
              <i class="uil uil-lock password"></i>
              <i class="uil uil-eye-slash pw_hide"></i>
            </div>
            <button class="button">Signup Now</button>
            <div class="login_signup">
              Already have an account? <Link to="/login"> Login here </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegistrationPage;
