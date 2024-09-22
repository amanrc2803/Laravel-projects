import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch CSRF token when the component mounts
  useEffect(() => {
    axios.get('/Reactvel-app/csrf-token', { withCredentials: true })
      .then(response => {
        setCsrfToken(response.data.csrfToken);
      })
      .catch(() => {
        setError('Failed to load CSRF token.');
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('/Reactvel-app/login', {
      email,
      password,
      _token: csrfToken  // Pass CSRF token here
    }, { withCredentials: true })  // Ensure cookies are sent
      .then(response => {
        // Handle successful login, redirect to dashboard
        navigate('/dashboard');
      })
      .catch(error => {
        setError('Login failed. Please check your credentials.');
        console.error('Login error', error);
      });
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div className="d-flex justify-content-center py-4">
                  <a href="/" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your username & password to login</p>
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <form className="row g-3 needs-validation" onSubmit={handleLogin} noValidate>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div className="invalid-feedback">Please enter your email.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                      </div>

                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have an account? <Link to="/pages-register">Create an account</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
