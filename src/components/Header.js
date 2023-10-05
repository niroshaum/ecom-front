import React from "react";
import { Link } from "react-router-dom";



const Header = ({children}) =>{
    // const style ={
    //     display: 'inline-block',
    //     margin: 10,
    //     marginBottom: 30
    // }
   return(
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand"  to='/'>ECOM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/product'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        {/* <div>
            <h3 style={style}><Link to='/'>Home</Link></h3>
            <h3 style={style}><Link to='/product'>Products</Link></h3>
            <h3 style={style}><Link to='/login'>Login</Link></h3>
        </div> */}
        {children}
    </div>
   )
}

export default Header;