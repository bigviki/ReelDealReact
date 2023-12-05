import {useState} from 'react';


const LoginForm = () => {

    //React States
        const [errorMessages, setErrorMessages] = useState({});
        const [isSubmitted, setIsSubmitted] = useState(false);

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const errors = {
          uname: "invalid username",
          pass: "invalid password"
      };  

        const handleLogin = async (e) => {
          e.preventDefault();
      
          try {
            const response = await fetch('http://localhost:5000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
            });
      
            const data = await response.json();
      
            if (data.success) {
              console.log('Login successful');
              // Redirect or perform any action upon successful login
            } else {
              console.log('Login failed:', data.message);
            }
          } catch (error) {
            console.error('Error during login:', error);
          }
        };
      
        return (
          <div>
            <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
          </div>
        );
      };
export default LoginForm;