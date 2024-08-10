import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from "../app/addCartSlice"
import { Link } from 'react-router-dom'


export default function Allproducts() {
    const [spinner, setSpinner] = useState(true);
    const [newData, setNewdata] = useState([]);
    const [error, setError] = useState(false);
    let dispatch = useDispatch();

    function showData() {
        axios.get("https://6607c541a2a5dd477b136715.mockapi.io/FOOTWEAR")
            .then((res) => {
                console.log(res.data);
                setNewdata(res.data);
                setSpinner(false)
            }).catch((err) => {
                setError("Unable To Product Fetch Data")
            })
    };



    useEffect(() => {
        showData();
    }, []);

    function addProductToCart(product) {

        let cartProduct = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1
        }
        console.log(product);
        dispatch(addToCart(cartProduct));
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    {

                        spinner
                            ?
                            <div className="div">
                                <div className="alert alert-danger">{error}</div>
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                            :



                            newData.map((allData) => {
                                return (
                                    <div className="col-lg-3">

                                        <div className="card w-100 h-100">
                                            <img src={allData.image} alt="" />

                                            <div className="card-body">
                                                <h5>{allData.title}</h5>
                                                <p className='text-dark'>{allData.discription}</p>
                                                <strong className='fw-bold'>MRP:-</strong><del>{allData.mrp}</del>
                                                <ins className='ms-2'>{allData.price}</ins><br />

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <button onClick={() => addProductToCart(allData)} className='btn btn-primary'>Add to Cart</button>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <Link to={"/detail/" + allData.id}>
                                                            <button className='btn btn-success'>Details</button>
                                                        </Link>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>)
                            })
                    }


                </div>
            </div>
        </div>
    )
}
