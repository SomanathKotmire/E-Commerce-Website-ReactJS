import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from "../app/addCartSlice"

export default function Detail() {
    const [detailData, setDetailData] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();


    function sendData() {
        axios.get("https://6607c541a2a5dd477b136715.mockapi.io/FOOTWEAR/" + id).then((res) => {
            setDetailData(res.data);
        }).catch((ex) => {
            console.log(ex);
        });
    }

    useEffect(() => {
        sendData();
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
            <div className="row">
                <div className="col-lg-3"></div>

                <div className="col-lg-6">

                    <div className="card mt-5">
                        <div className="card-body shadow">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className='mx-3 my-3 w-100' src={detailData.image} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <h2 className='text-dark mt-3'>{detailData.title}</h2>
                                    <h4 className='text-dark'>{detailData.discription}</h4><hr />
                                    <span className='fs-3'>Rs. {detailData.price} /-</span><br />
                                    <span className='fw-bold fs-3 text-start'>MRP:- </span><del className='fs-3'>Rs.{detailData.mrp}</del>
                                    <p className='text-dark fw-bold'>Inclusive off all taxes</p>

                                    <button onClick={() => addProductToCart(detailData)} className='btn btn-warning'>Add to Cart</button>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-lg-3">
                    <div className='text-end mt-4 mx-4'>
                        <button onClick={() => navigate(-1)} className='btn btn-danger'>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
