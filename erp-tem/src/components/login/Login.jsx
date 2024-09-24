// src/components/login/Login.jsx

import { useState } from 'react';
import CustomInput from '../../small-comp/CustomInputs';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState({ username: '', password: '' });

    const validateFields = () => {
        const newErrors = { username: '', password: '' };
        if (!username) newErrors.username = 'Username is required.';
        if (!password) newErrors.password = 'Password is required.';
        setError(newErrors);
        return !newErrors.username && !newErrors.password;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (validateFields()) {
            onLogin();
        }
    };

    const handleBlur = (field) => {
        setError((prevErrors) => ({
            ...prevErrors,
            [field]: !eval(field) ? `${field.charAt(0).toUpperCase() + field.slice(1)} is required.` : '',
        }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-center text-blue-600">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <CustomInput
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={() => handleBlur('username')}
                        placeholder="Enter your username"
                        label="Username"
                        isInvalid={!!error.username}
                        errorMessage={error.username}
                        showError={submitted || !!error.username}
                    />
                    <CustomInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => handleBlur('password')}
                        placeholder="Enter your password"
                        label="Password"
                        isInvalid={!!error.password}
                        errorMessage={error.password}
                        showError={submitted || !!error.password}
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    New user? <a href="/signup" className="text-blue-500 underline hover:text-blue-600">Create an account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;