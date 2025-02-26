import { useState } from "react";
import { register } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user } = useUserContext();
    useRedirectActiveUser(user, '/dashboard');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Submiteaste el Formulario!');
        try {
            const credentialUser = await register({email: email, password: password});
            console.log(credentialUser);
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder="Ingrese el correo electrónico.." 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Ingrese la contraseña.." 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Register</button>
            </form>
        </>
    );
};

export default Register;
