import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/" style={{color: "white"}}>DishDiscover</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        {Auth.loggedIn() ? (
          <Nav.Link as={Link} to="/me" style={{color: "white"}}>
            {Auth.getProfile().data.username}'s profile
          </Nav.Link>
        ) : (
          <Button variant="outline-light" as={Link} to="/login">Login</Button>
        )}
          <Button variant="outline-light" onClick={logout}>Logout</Button>
          <Button variant="outline-light" as={Link} to="/signup">Signup</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <>
//     {/* Navbar */}
// <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
//   {/* Container wrapper */}
//   <div className="container-fluid">
//     {/* Navbar brand */}
//     <a className="navbar-brand" href="#">DishDiscover</a>

//     {/* Toggle button */}
//     <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
//       data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//       aria-label="Toggle navigation">
//       <i className="fas fa-bars text-light"></i>
//     </button>



    

//     {/* Collapsible wrapper */}
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       {/* Right links */}
//       <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
//         <li className="nav-item text-center mx-2 mx-lg-1">
//           <a className="nav-link" href="#!">
//               <Link className="text-light" to="/me">
//                 {Auth.getProfile().data.username}'s profile
//               </Link>
//             ) : (
//               <Link className="text-light" to="/login">
//                 Login
//               </Link>
//             )}
//           </a>
//         </li>
//         <li className="nav-item text-center mx-2 mx-lg-1">
//           <a className="nav-link" href="#!">
//             Logout
//           </a>
//         </li>
//       </ul>
  
      
//       {/* Right links */}

//       {/* Search form */}
//       <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
//         <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-white" type="button" data-mdb-ripple-color="dark">
//           Search
//         </button>
//       </form>
//     </div>
//     {/* Collapsible wrapper */}
//   </div>
//   {/* Container wrapper */}
// </nav>
// {/* Navbar */}
// </>
//     // <header className="mb-4 py-3 flex-row align-center custom-header">
//     //   <div className="container flex-row justify-space-between-lg justify-center align-center">
//     //     <div>
//     //       <Link className="text-light" to="/">
//     //         <h1 className="m-0">Dish Discover</h1>
//     //       </Link>
//     //       <p className="m-0">Find and favorite new Dishes in your area!</p>
//     //     </div>
//     //     <div>
//     //       {Auth.loggedIn() ? (
//     //         <>
//     //           <Link className="btn btn-lg btn-info m-2" to="/me">
//     //             {Auth.getProfile().data.username}'s profile
//     //           </Link>
//     //           <button className="btn btn-lg btn-light m-2" onClick={logout}>
//     //             Logout
//     //           </button>
//     //         </>
//     //       ) : (
//     //         <>
//     //           <Link className="btn btn-lg btn-info m-2" to="/login">
//     //             Login
//     //           </Link>
//     //           <Link className="btn btn-lg btn-light m-2" to="/signup">
//     //             Signup
//     //           </Link>
//     //         </>
//     //       )}
//     //     </div>
//     //   </div>
//     // </header>
//   );
// };

// export default Header;
