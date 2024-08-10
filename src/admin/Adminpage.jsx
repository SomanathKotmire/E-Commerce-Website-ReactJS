import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Adminpage() {
    let navigate = useNavigate()
    function logoutUser() {
        localStorage.clear();
        navigate("/")
    }
    return (
        <div>
            <div className="admin row">
                <div className="col-lg-2">
                    <ul className="nav flex-column text-start border bg-light mt-2 shadow" style={{ borderEndEndRadius: "25px", borderStartEndRadius: "25px" }}>
                        <Link to={"/admin"} className="nav-item">
                            <a className="nav-link active" href="#"><i class="fa-solid fa-display me-2 text-dark"></i>Dashboard</a>
                        </Link>
                        <Link to={"/admin/products"} className="nav-item">
                            <a className="nav-link" href="#"><i class="fa-solid fa-boxes-stacked me-2 text-dark"></i>Products</a>
                        </Link>
                        <Link to={"/admin/addproducts"} className="nav-item">
                            <a className="nav-link " href="#"><i class="fa-solid fa-arrow-up-wide-short me-2 text-dark"></i>Add Products</a>
                        </Link>
                        <Link to={"/admin/orders"} className="nav-item">
                            <a className="nav-link " href="#"><i class="fa-solid fa-list me-2 text-dark"></i>Orders</a>
                        </Link>
                        <li>
                            <a className="nav-link " href="#"><i class="fa-solid fa-user me-2 text-dark"></i><span onClick={() => logoutUser()}>LogOut</span></a>
                        </li>

                        {/* <button className="nav-link " onClick={() => logoutUser()}>Log Out</button> */}
                        {/* <span className="nav-link text-dark" >
                            <span onClick={() => logoutUser()} className="menu-title btn btn-success" style={{  cursor: "pointer" }}><i class="fa-solid fa-user me-2 text-dark"></i>LogOut</span>
                        </span> */}
                    </ul>
                </div>
                <div className="col-lg-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}