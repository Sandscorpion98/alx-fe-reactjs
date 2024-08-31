
const Login = () => {
    const handleLogin = () => {
       
        localStorage.setItem('authToken', 'your-token');
        window.location.href = '/dashboard'; 
    };

    return <button onClick={handleLogin}>Login</button>;
};


export default Login