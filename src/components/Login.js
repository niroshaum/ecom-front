//import { useState } from 'react';

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   fetch('http://localhost:8080/api/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ "email":email, "pwd":password })
  //   })
  //     .then(response => {
  //       if(response.status === 200){
  //         localStorage.setItem('token', email)
          
  //       }
  //     })
  //     // .then(data => {
  //     //   console.log(data);
  //     //   // if (data.success) {
  //     //   //   // Redirect to protected route
  //     //   // } else {
  //     //   //   setError('Invalid email or password');
  //     //   // }
  //     // })
  //     .catch(error => {
  //       console.error(error);
  //       setError('An error occurred. Please try again later.');
  //     });
  // }

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Email:
    //     <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
    //   </label>
    //   <br />
    //   <button type="submit">Login</button>
    //   {error && <p>{error}</p>}
    // </form>
    <a href='https://ecom11.auth.us-east-1.amazoncognito.com/login?client_id=5ce4lraq0av0f8jp8tism239g&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000' >Login</a>
  );
}
export default Login;
