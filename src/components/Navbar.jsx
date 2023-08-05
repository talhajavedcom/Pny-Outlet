


import React from 'react'

const Navbar = () => {
  return (
    <header class="header">
    <nav class="navbar">
      <div class="row d-flex container">
        <a href="" class="logo d-flex">
          <img src="./images/logo.png" alt="" />
        </a>

        <ul class="nav-list d-flex">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Shop</a>
          <a href="">Food</a>
          <a href="">Recipes</a>
          <a href="">Contact</a>
          <span class="close d-flex"><i class="bx bx-x"></i></span>
        </ul>

        <div class="col d-flex">
          <form>
            <input type="search" placeholder="Search your item" />
            <button class="d-flex"><i class="bx bx-search"></i></button>
          </form>
          <div class="cart-icon d-flex">
            <i class="bx bx-shopping-bag"></i>
            <span>0</span>
          </div>
          <a class="btn signin">Sign In</a>
        </div>

     
        <div class="hamburger d-flex">
          <i class="bx bx-menu"></i>
        </div>
      </div>
    </nav>


    <div class="home">
      <div class="row container">
        <div class="col">
          <div class="faster">
            More than Faster
            <div class="image d-flex">
              <img src="./images/french-fries.svg" alt="" />
            </div>
          </div>
          <h1>
            Get your cuisine <br />
            delivered right to <br />
            <span class="color">your door</span>
          </h1>
          <p>
            Food that is delivered at the right time. The trendy food delivery
            partner. Good food is what we deliver. Your hunger companion.
          </p>
          <a href="" class="btn">Explore Food</a>
        </div>
        <div class="col">
          <img src="./images/delivery-guy.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="wrapper">
      <form action="" class="form">
        <h2>SIGN IN</h2>

        <div class="control">
          <label for="">Enter Email:</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div class="control">
          <label for="">Password:</label>
          <input type="password" placeholder="Password" />
        </div>
        <div class="checkbox d-flex">
          <input type="checkbox" />
          <span>Remember Me</span>
        </div>
        <button class="btn">Sign In</button>
        <div class="links">
          <span>Forgot Password? <a href="">Click Here</a></span>
          <span>Don't Have An Account? <a href="">Create One</a></span>
        </div>
      </form>

      <div class="close-form">
        <i class="bx bx-x"></i>
      </div>
    </div>
  </header>
  )
}

export default Navbar




































// // import React from 'react'
// // import logo from "../assets/logo/logo1.png"
// // import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// // import { Link } from 'react-router-dom';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';




// // function Navbar() {
// //     return (
// //         <>
// //             <div className="NavbarContainer flex-wrap  ">
// //                 <div className="Navbar">
// //                     {/* logo */}
// //                     <div className="logo"><Link to="/"><img src={logo} alt="Main Logo" /></Link></div>
// //                     {/* links */}
// //                     <div className="links">
// //                         <Link to="/">Home</Link>
// //                         <Link to="/shop">Shop</Link>
// //                         <Link to="/about">About</Link>
// //                         <Link to="/contact">Contact</Link>
// //                         {/* <Link to="/todo">Todo App</Link> */}
// //                     </div>
// //                     {/* cart icon */}
// //                     <div className="icons">
// //                         <sup style={{color:"#2ecaf7"}}>2</sup>
// //                         <Link to="/cart"> <ShoppingBagOutlinedIcon sx={{ fontSize: "28px", color:"#2ecaf7" }} /></Link>

// //                     </div>

// //                     <div className="AccountsBtn">
// //                         <Link to="/signin"><button> <AccountCircleIcon sx={{ fontSize: "20px", color:"#2ecaf7" }} />&nbsp; My Acount </button></Link>

// //                     </div>
// //                 </div>












// //             </div>

// //         </>

// //     )
// // }

// // export default Navbar





// import React from 'react'
// import logo from "../assets/logo/logo1.png"
// import { Link } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';



// const Navbar = () => {
//   return (
//     <>
//         <div class="m-4">
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//             <a href="#" class="navbar-brand">
//                 <div className="logo"><Link to="/"><img src={logo} alt="Main Logo" /></Link></div>
                 
//             </a>
//             <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarCollapse">
//                 <div class="navbar-nav">
//                <Link to="/">Home</Link>
//                         <Link to="/shop">Shop</Link>
//                         <Link to="/about">About</Link>
//                         <Link to="/contact">Contact</Link>
//                 </div>
//                 <div class="navbar-nav ms-auto">
//                    <Link to="/signin"><button> <AccountCircleIcon sx={{ fontSize: "20px", color:"#2ecaf7" }} />&nbsp; My Acount </button></Link>
//                 </div>
//             </div>
//         </div>
//     </nav>
// </div>
      
//     </>
//   )
// }

// export default Navbar
