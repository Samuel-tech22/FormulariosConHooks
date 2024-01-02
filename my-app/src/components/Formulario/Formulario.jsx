import { Fragment, useState } from "react";
import styles from "./Formulario.module.css";

const InputComponent = ({ label, type, state, setState, error, formSubmitted }) => {
  return (
    <div className={styles.inputElement}>
      <label htmlFor={`${label}Input`}>{label}</label>
      <input
        type={type}
        id={`${label}Input`}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      {formSubmitted && error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

const Formulario = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateName = (name, setError) => {
    setError(
      name.length < 2 ? "** El campo debe tener al menos 2 caracteres." : ""
    );
  };

  const validateLastName = (lastName, setError) => {
    setError(
      lastName.length < 2 ? "** El campo debe tener al menos 2 caracteres." : ""
    );
  };

  const validateEmail = (email, setError) => {
    setError(
      email.length < 5 ? "** El campo debe tener al menos 5 caracteres." : ""
    );
  };

  const validatePassword = (password, setError) => {
    setError(
      password.length < 8 ? "** El campo debe tener al menos 8 caracteres." : ""
    );
  };

  const validateConfirmPassword = (confirmPassword, setError) => {
    setError(confirmPassword !== password ? "Las contraseñas no coinciden." : "");
};

  const handleFirstNameChange = (value) => {
    setFirstName(value);
    validateName(value, setFirstNameError);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
    validateLastName(value, setLastNameError);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    validateEmail(value, setEmailError);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    validatePassword(value, setpasswordError);
    validateConfirmPassword(confirmPassword, setConfirmPasswordError);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    validateConfirmPassword(confirmPassword, setConfirmPasswordError);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  }


  return (
    <>
      <form action="#" className={styles.formulario} onSubmit={handleFormSubmit}>
        <InputComponent
          label="First Name"
          type="text"
          state={firstName}
          setState={handleFirstNameChange}
          error={firstNameError}
          formSubmitted={formSubmitted}
        />
        <InputComponent
          label="Last Name"
          type="text"
          state={lastName}
          setState={handleLastNameChange}
          error={lastNameError}
          formSubmitted={formSubmitted}
        />
        <InputComponent
          label="Email"
          type="email"
          state={email}
          setState={handleEmailChange}
          error={emailError}
          formSubmitted={formSubmitted}
        />
        <InputComponent
          label="Password"
          type="password"
          state={password}
          setState={handlePasswordChange}
          error={passwordError}
          formSubmitted={formSubmitted}
        />
        <InputComponent
          label="Confirm Password"
          type="password"
          state={confirmPassword}
          setState={handleConfirmPasswordChange}
          error={confirmPasswordError} 
          formSubmitted={formSubmitted}
        />
        <button type="submit">Enviar</button>
      </form>
      <hr />
      <h2>YOUR FORM DATA:</h2>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Email: {email}</li>
        <li>Password: {password}</li>
        <li>Confirm Password:{confirmPassword}</li>
      </ul>
    </>
  );
};

export default Formulario;
