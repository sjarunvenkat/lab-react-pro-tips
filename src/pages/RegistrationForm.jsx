import React from "react";

function RegistrationForm() {
  const [formField, setFormField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setSuccessMessage("Registration Successful");
      setFormField({ firstName: "", lastName: "", email: "", phone: "" });
    } else {
      setErrorMessage(errors);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formField.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formField.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formField.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formField.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (formField.phone.length !== 10) {
      errors.phone = "Invalid phone number";
    }
    return errors;
  };

  return (
    <>
      <div className="formField">
        <form onSubmit={handleSubmit}>
          {successMessage && <div className="success">{successMessage}</div>}
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formField.firstName}
            onChange={handleChange}
          />
          {errorMessage.firstName && (
            <span className="error">{errorMessage.firstName}</span>
          )}
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formField.lastName}
            onChange={handleChange}
          />
          {errorMessage.lastName && (
            <span className="error">{errorMessage.lastName}</span>
          )}
          <br />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formField.email}
            onChange={handleChange}
          />
          {errorMessage.email && (
            <span className="error">{errorMessage.email}</span>
          )}
          <br />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formField.phone}
            onChange={handleChange}
          />
          {errorMessage.phone && (
            <span className="error">{errorMessage.phone}</span>
          )}
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
