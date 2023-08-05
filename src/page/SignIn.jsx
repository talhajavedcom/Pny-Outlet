import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="containerss">
    <section class="wrapper">
      <div class="form signup">
        <header>Login Your Acount</header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Sign In" />
        </form>
        <br />
        <center>Not a User? <Link to="/signup"><span className="btnlogin">   Sign Up</span></Link></center>
      
      </div>
    </section>
  </div>
  )
}

export default SignIn