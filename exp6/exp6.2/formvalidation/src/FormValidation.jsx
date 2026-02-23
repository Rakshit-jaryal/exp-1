import React, { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

const validate = () => {
  let newErrors = {};

  if (!email) {
    newErrors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|[a-z]{2,})$/;

    const localPart = email.split("@")[0];

    if (localPart.includes(".")) {
      newErrors.email = "Email should not contain '.' before @";
    } else if (!emailRegex.test(email)) {
      newErrors.email =
        "Email must contain @ and end with .com, .in or valid country code";
    }
  }

  // Password validation stays same...
    // Password validation (checking all conditions together)
    if (!password) {
      newErrors.password = "Password is required";
    } else {
      if (password.length < 5) {
        newErrors.password = "Password must be at least 5 characters long";
      } else if (!/^[A-Z]/.test(password)) {
        newErrors.password = "Password must start with a capital letter";
      } else if (!/[0-9]/.test(password)) {
        newErrors.password = "Password must contain at least one number";
      } else if (!/[!@#$%^&*]/.test(password)) {
        newErrors.password =
          "Password must contain at least one special character";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully ✅");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default FormValidation;