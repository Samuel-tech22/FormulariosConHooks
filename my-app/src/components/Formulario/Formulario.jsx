import { Fragment, useState } from "react";
import styles from "./Formulario.module.css";

const InputComponent = ({ label, type, state, setState }) => {


    return (
        <div className={styles.inputElement}>
            <label htmlFor={`${label}Input`}>{label}</label>
            <input
                type={type}
                id={`${label}Input`}
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </div>
    )
}



const Formulario = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <Fragment>
            <form action="#" className={styles.formulario}>
                <InputComponent label="First Name" type="text" state={firstName} setState={setFirstName} />
                <InputComponent label="Last Name" type="text" state={lastName} setState={setLastName} />
                <InputComponent label="Email" type="email" state={email} setState={setEmail} />
                <InputComponent label="Password" type="password" state={password} setState={setPassword} />
                <InputComponent label="Confirm Password" type="password" state={confirmPassword} setState={setConfirmPassword} />
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
        </Fragment>
    )
}


export default Formulario;