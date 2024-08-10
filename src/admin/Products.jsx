import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, Bounce, Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Products() {

  const [newData, setNewdata] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [error, setError] = useState(false)


  const [id, setId] = useState(undefined);

  function loadData() {
    axios.get("https://6607c541a2a5dd477b136715.mockapi.io/FOOTWEAR")
      .then((res) => {
        console.log(res.data);
        setNewdata(res.data);
        setSpinner(false);
      }).catch((err) => {
        setError("Unable To Product Fetch Data")
      })
  };

  useEffect(() => {
    loadData();
  }, []);

  function handleDelete(e, id) {
    e.preventDefault();
    axios.delete("https://6607c541a2a5dd477b136715.mockapi.io/FOOTWEAR/" + id)
      .then((res) => {
        console.log(res.data);
        toast.error("product deleted", {
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
        loadData();
      })
  };


  return (
    <div>


      <div className="container mt-5">
        <ToastContainer />
        <div className="card shadow">
          <div className="card-body">
            <table className="table">
              <thead style={{ backgroundColor: "#88c8bc" }}>
                <tr>
                  <th scope="col">Sr.No.</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">MRP</th>
                  <th scope="col">Discription</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
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

                    newData.map((eachData, i) => {
                      return (
                        <tr className='text-center' key={i} >
                          <th scope="row">{i + 1}</th>
                          <td>
                            <img style={{ width: "70px" }} src={eachData.image} alt="" />
                          </td>
                          <td>{eachData.title}</td>
                          <td>{eachData.category}</td>
                          <td>{eachData.price}</td>
                          <td>{eachData.mrp}</td>
                          <td>{eachData.discription}</td>
                          <td>
                            <Link to={"/admin/addproducts/" + eachData.id}>
                              <button className='btn btn-primary'>Edit</button>
                            </Link>

                            <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'>Delete</button>
                          </td>
                        </tr>

                      )
                    })
                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
