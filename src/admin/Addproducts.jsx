import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { toast, Bounce, Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Addproducts() {

  let navigate = useNavigate()
  let { id } = useParams()

  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    mrp: "",
    image: "",
    uploadimg: "",
    discription: ""
  })

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value })
  };

  function handleSubmit(e) {
    // console.log(data);
    if (id === undefined) {
      axios.post("https://6607c541a2a5dd477b136715.mockapi.io/FOOTWEAR/", data)
        .then((res) => {
          console.log(res.data);
          toast.success("product added successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          navigate("/admin/products");
          setData({
            title: "",
            category: "",
            price: "",
            mrp: "",
            image: "",
            uploadimg: "",
            discription: ""
          })

        })
    } else {
      axios.put("https://6607c541a2a5dd477b136715.mockapi.io/FOOTWEAR/" + id, data)
        .then((res) => {
          console.log(res.data);
          navigate("/admin/products");
          setData({
            title: "",
            category: "",
            price: "",
            mrp: "",
            image: "",
            uploadimg: "",
            discription: ""
          })
        })
    }

  };

  useEffect(() => {
    if (id !== undefined) {
      axios.get("https://6607c541a2a5dd477b136715.mockapi.io/FOOTWEAR/" + id)
        .then((res) => {
          console.log(res.data);
          setData({
            title: res.data.title,
            category: res.data.category,
            price: res.data.price,
            mrp: res.data.mrp,
            image: res.data.image,
            uploadimg: res.data.uploadimg,
            discription: res.data.discription
          })
        })
    }
  }, [])


  return (
    <div>
      <div className='bg-light shadow m-5 p-2 '>
        <ToastContainer />
        <div className="row">

          <div className="col-lg-6"><br />
            <label className='text' style={{ fontSize: "20px" }} htmlFor="">Title</label>
            <input id="title" value={data.title} onChange={(e) => handleChange(e)} type="text" className='form-control border border-secondary' />
          </div>


          <div className="col-lg-6">
            <br />
            <label className='text' style={{ fontSize: "20px" }} htmlFor="">Category</label>
            <input id="category" value={data.category} onChange={(e) => handleChange(e)} type="text" className='form-control' placeholder='Choose...' />
          </div>
        </div><br />

        <div className="row">
          <div className="col-lg-3">
            <label className='text' style={{ fontSize: "20px" }} htmlFor="">Price</label>
            <input id="price" value={data.price} onChange={(e) => handleChange(e)} type="text" className='form-control' placeholder='Choose...' />
          </div>


          <div className="col-lg-3">
            <label className='text' style={{ fontSize: "20px" }} htmlFor="">MRP</label>
            <input id="mrp" value={data.mrp} onChange={(e) => handleChange(e)} type="text" className='form-control' placeholder='Choose...' />
          </div>


          <div className="col-lg-3">
            <label className='text' style={{ fontSize: "20px" }} htmlFor="">Image</label>
            <input id="image" value={data.image} onChange={(e) => handleChange(e)} type="text" className='form-control' placeholder='Choose...' />
          </div>


          <div className="col-lg-3">
            <label className='text' style={{ fontSize: "20px" }} htmlFor="">Upload Image</label>
            <input id="uploadimg" value={data.uploadimg} onChange={(e) => handleChange(e)} type="file" className='form-control' placeholder='Choose...' />
          </div>
        </div><br />

        <label className='text' style={{ fontSize: "20px" }} htmlFor="">Discription</label>
        <textarea id="discription" value={data.discription} onChange={(e) => handleChange(e)} className='form-control' name="" cols="10" rows="10"></textarea><br />
        <button onClick={(e) => handleSubmit(e)} className='btn btn-primary'>Submit</button>
      </div>
    </div>
  )
}
