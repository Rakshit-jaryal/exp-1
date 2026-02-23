import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          skills: [...formData.skills, value]
        });
      } else {
        setFormData({
          ...formData,
          skills: formData.skills.filter(skill => skill !== value)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
`First Name: ${formData.firstName}
Last Name: ${formData.lastName}
DOB: ${formData.dob}
Gender: ${formData.gender}
Address: ${formData.address}
State: ${formData.state}
Skills: ${formData.skills.join(", ")}`
    );
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      state: "",
      skills: []
    });
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              /> Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              /> Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Punjab">Punjab</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="HTML"
                checked={formData.skills.includes("HTML")}
                onChange={handleChange}
              /> HTML
            </label>

            <label>
              <input
                type="checkbox"
                value="CSS"
                checked={formData.skills.includes("CSS")}
                onChange={handleChange}
              /> CSS
            </label>

            <label>
              <input
                type="checkbox"
                value="JavaScript"
                checked={formData.skills.includes("JavaScript")}
                onChange={handleChange}
              /> JavaScript
            </label>
          </div>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>

      </form>
    </div>
  );
}

export default FormComponent;