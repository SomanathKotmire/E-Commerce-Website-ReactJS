import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Header() {

  const count = useSelector((state) => {
    // console.log(state.cart);
    return state.cart
  })

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mt-3 text-left">
            <h1>MY FOOTWEAR</h1>
          </div>
          <div className="col-lg-2 mt-4">
            <Link to={"/cart"} className="nav-item">

              <button className="nav-link btn btn-light position-relative border-0" ><i style={{ fontSize: "20px", color: "black" }} class="fa-solid fa-cart-shopping"></i><span style={{ fontSize: "20px", color: "black", backgroundColor: "#88c8bc" }} className='position-absolute top-0 start-100 translate-middle badge rounded-1'>{count.length}
              </span> </button>
            </Link>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-light">



              <div className="nav1 collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mt-3">
                  <Link to={"/"} className="nav-item active">
                    <a className="nav-link ps-0">Home <span className="sr-only">(current)</span></a>
                  </Link>
                  <Link to={"/men"} className="nav-item">
                    <a className="nav-link">Men</a>
                  </Link>

                  <Link to={"/women"} className="nav-item">
                    <a className="nav-link">Women</a>
                  </Link>
                  <Link to={"/allproducts"} className="nav-item">
                    <a className="nav-link">All Products</a>
                  </Link>
                  <Link to={"/about"} className="nav-item">
                    <a className="nav-link">About</a>
                  </Link>
                  <Link to={"/contact"} className="nav-item">
                    <a className="nav-link">Contact</a>
                  </Link>
                </ul>

              </div>
            </nav>
          </div>
          <div className="search-icon col-lg-3 mt-4 d-flex">
            <input style={{ borderRadius: "50px" }} className='form-control w-100 ' type="text" placeholder='Search Here' />
            <button style={{ borderRadius: "50px", height: "45px", backgroundColor: "#88c8bc" }} className='btn btn-primary ms-1'>Search</button>

          </div>
        </div>
      </div>

      <div className='offer text-center p-2 mt-3'>
        <div className="container">
          <marquee>
            <h2><a href="#">Our biggest sale yet 50% off all summer shoes</a><span className='space'>______________</span>
              <a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h2>
          </marquee>

        </div>
      </div>

    </div>
  )
}
