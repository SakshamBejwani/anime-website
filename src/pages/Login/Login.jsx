import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
        <div class="container-fluid">
            <div class="row vh-100 d-flex align-items-center justify-content-center">
                
                <div class="col px-4">
                    <div class="card shadow-lg p-5">
                 <form>

                <div class="d-flex align-items-center mb-3 pb-1">
                <i class="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                <span class="h1 fw-bold mb-0">Login</span>
                </div>

                <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <div class="form-outline mb-4">
                <input type="email" id="form2Example17" class="form-control form-control-lg" />
                <label class="form-label" for="form2Example17">Email address</label>
                </div>

                <div class="form-outline mb-4">
                <input type="password" id="form2Example27" class="form-control form-control-lg" />
                <label class="form-label" for="form2Example27">Password</label>
                </div>

                <div class="pt-1 mb-4">
                <button class="btn btn-dark btn-lg btn-block px-5" type="button">Login</button>
                </div>

                <a class="small text-muted" href="#!">Forgot password?</a>
                <p class="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? 
                <Link to="/signup">
                 <a href=""
                    style={{color: '#393f81'}}>Register here</a>
                </Link>
                </p>
                
                </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login