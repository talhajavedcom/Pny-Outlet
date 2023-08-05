import React  from 'react'
import { Link } from 'react-router-dom'


function SignUp() {

//   const { formData, setFormData } = useState({
//     fname: "",
//     email: "",
//     password: "",

//   })
//   const onChange = ()=>{
//     setFormData({...formData, [e.target.name]: e.target.value }) 
//    }

// const onSubmit=(e)=>{
//   e.preventDefault();
//   console.log(formData)
// }
  return (
    <div className="containerss">
      <section class="wrapper">
        <div class="form signup">
          <header>Create New Acount</header>
          <form className="form-all"  >
            <input type="text" name="name"  placeholder=" Name" required />
            <input type="text" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <div class="checkbox">
              <input type="checkbox" id="signupCheck" />
              <label for="signupCheck">I accept all terms and conditions</label>
            </div>
            <input type="submit" value="Signup" />
          </form>

          <br />
          <center>Already a User? <Link to="/signin"><span className="btnlogin">   Sign In</span></Link></center>
        </div>



      </section>
    </div>
  )
}

export default SignUp