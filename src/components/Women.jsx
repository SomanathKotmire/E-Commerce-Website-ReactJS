import React from 'react'
import PartnerImg from "../assets/images/bg-partner1.jpg"


export default function Women() {
	return (
		<div>
			<div className="container">
				<img className='w-100 mt-5' src={require("../assets/images/womens_caro2.jpeg")} alt="" />
			</div>

			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-dark mx-auto bg-dark ">

					{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul style={{ marginLeft: "30%" }} className="nav navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">NEW ARRIVLES <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">BEST SELLERS</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">EXTENDED WIDTHS</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">SALE</a>
							</li>
						</ul>

					</div>
				</nav>
			</div>

			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="col-lg-4">
						<img className='w-100' src={require("../assets/images/men.jpg")} alt="" />

					</div>
					<div className="col-lg-4">
						<img className='w-100' src={require("../assets/images/women.jpg")} alt="" />
					</div>
					<div className="col-lg-4">
						<img className='w-100' src={require("../assets/images/item-18.jpg")} alt="" />
					</div>
				</div>
			</div>

			<div className="container text-center mt-5 p-3 ">
				<h1>BEST SELLERS</h1>
			</div>

			<div className="colorlib-product">
				<div className="container">
					<div className="row">

					</div>
					<div className="row row-pb-md">
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-1.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-2.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Minam Meaghan</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-3.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Men's Taja Commissioner</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-4.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Russ Men's Sneakers Blue</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-5.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-6.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-7.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-8.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-9.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-10.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-11.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-12.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-13.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-14.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-15.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/item-16.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#" className='text-dark'>Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div style={{ backgroundImage: `url(${PartnerImg})` }}>
				<div className="colorlib-partner">
					<div className="container ">
						<div className="row  mb-5">
							<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
								<h2>Trusted Partners</h2>
							</div>
						</div>
						<div className="row mt-5 mb-5">
							<div className="col partner-col text-center">
								<img src={require("../assets/images/brand-1.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center">
								<img src={require("../assets/images/brand-2.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center">
								<img src={require("../assets/images/brand-3.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center">
								<img src={require("../assets/images/brand-4.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center">
								<img src={require("../assets/images/brand-5.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
