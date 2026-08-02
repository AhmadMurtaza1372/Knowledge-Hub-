

// import React, { useState } from 'react';
// import '../style/Forms.scss';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';



// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',

//   });
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:5000/api/signup', formData);
//       if  (response.data.success) {
//         navigate('/Bookstore');
//       } else {
//         setError(response.data.message);
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Server Error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className='signup-page'>
//       <ToastContainer position='top-center' />
//       <div className='heading'>
//         <h1> Register </h1>
//       </div>
//       <div className='form-container'>
//         {error && <div className='error-message'>{error}</div>}
//         <form onSubmit={handleSubmit} className='form'>
//           <label>Username:</label>
//           <input type='text' name='username' value={formData.username} onChange={handleChange}   placeholder='Enter your Username here'/>
//           <label>Email:</label>
//           <input type='email' name='email' value={formData.email} onChange={handleChange}   placeholder='Enter your Email here' />
//           <label>Password:</label>
//           <div className='password-input'>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name='password'
//               value={formData.password}
//               onChange={handleChange}
//               placeholder='Enter your Password here'
//             />
//             <Link onClick={togglePasswordVisibility} className='eye-icon'>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </Link>
//           </div>
//           <br />
//           <div>
//              <Link to="/login">Already have an account?Login</Link>
//           </div>
//           <button type='submit' disabled={loading}>
//             {loading ? 'Signing Up...' : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//       <div className='disclaimer'>
//         <p style={{ fontSize: 20 }}>
//           <strong> Disclaimer: </strong>
//         </p>
//         <p>
//           By registering in our app, you acknowledge and agree that we will collect and securely store your provided
//           information for authentication and personalized user experience. Rest assured, your privacy is our priority,
//           and we are committed to safeguarding your data in compliance with our privacy policy.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import '../style/Forms.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/signup', formData);

      if (response.data.success) {
        navigate('/mainpage'); 
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Server Error');
    } finally {
      setLoading(false);
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className='signup-page'>
      <ToastContainer position='top-center' />
      <div className='heading'>
        <h1>Register</h1>
      </div>
      <div className='form-container'>
        {error && <div className='error-message'>{error}</div>}
        <form onSubmit={handleSubmit} className='form'>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Enter your Username here'
            required
          />

          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your Email here'
            required
          />

          <label>Password:</label>
          <div className='password-input'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your Password here'
              required
            />
            <Link onClick={togglePasswordVisibility} className='eye-icon'>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Link>
          </div>

          <br />
          <div>
            <Link to="/login">Already have an account? Login</Link>
          </div>

          <button type='submit' disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>

      <div className='disclaimer'>
        <p style={{ fontSize: 20 }}>
          <strong>Disclaimer:</strong>
        </p>
        <p>
          By registering in our app, you acknowledge and agree that we will collect and securely store your provided
          information for authentication and personalized user experience. Rest assured, your privacy is our priority,
          and we are committed to safeguarding your data in compliance with our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default Signup;
