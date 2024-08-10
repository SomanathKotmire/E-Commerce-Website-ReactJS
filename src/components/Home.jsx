import React from 'react'
import PartnerImg from "../assets/images/bg-partner1.jpg"


export default function Home() {
	return (
		<div>
			<div className="carousel slide carousel-fade" id="withcontrols" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={require("../assets/images/img_bg_1-4.jpg")} className="w-100" alt="" />
						<div className="carousel-caption">
							<h1 className="head-1 text-white">Men's</h1>
							<h2 className="head-2 text-white">Shoes</h2>
							<h2 className="head-3 text-white">Collection</h2>
							<p className="category"><span>New trending shoes</span></p>
							<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={require("../assets/images/img_bg_2-4.jpg")} className="w-100" alt="" />
						<div className="carousel-caption">
							<h1 className="head-1 text-white">Huge</h1>
							<h2 className="head-2 text-white">Sale</h2>
							<h2 className="head-3 text-white"><strong className="font-weight-bold">50%</strong> Off</h2>
							<p className="category"><span>Big sale sandals</span></p>
							<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={require("../assets/images/img_bg_3-4.jpg")} className="w-100" alt="" />
						<div className="carousel-caption">
							<h1 className="head-1 text-white">New</h1>
							<h2 className="head-2 text-white">Arrival</h2>
							<h2 className="head-3 text-white">up to <strong className="font-weight-bold">30%</strong> off</h2>
							<p className="category"><span>New stylish shoes for men</span></p>
							<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#withcontrols">
					<span className="carousel-control-prev-icon"></span>
					{/* <!-- <i className="fa-solid fa-arrow-rotate-left"></i> --> */}
				</button>
				<button className="carousel-control-next" data-bs-slide="next" data-bs-target="#withcontrols">
					<span className="carousel-control-next-icon"></span>
					{/* <!-- <i className="fa-solid fa-arrow-rotate-left"></i> --> */}
				</button>
			</div>
			<div>
			<div className="container text-center mt-5 p-3 mb-5">
				<h1>It started with a simple idea: Create quality, well-designed products that I wanted myself.</h1>
			</div>
			<div className="container-fluid">
				<div className=" collection row mb-5">
					<div className="col-lg-6 text-center">
						<a href=""><img className='w-100' src={require("../assets/images/men.jpg")} alt="" /></a>
						<h2 className='mt-2'><a href="#" style={{ color: "black" }} >Shop Men's Collection</a></h2>
					</div>
					<div className="col-lg-6 text-center ">
						<a href=""><img className='w-100 ' src={require("../assets/images/women.jpg")} alt="" /></a>
						<h2 className='mt-2'><a href="#" style={{ color: "black" }}>Shop Women's Collection</a></h2>
					</div>
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
					<div className="row mt-5 ">
						<div className="col-md-12 text-center">
							<p><a href="#" className="btn btn-primary btn-lg">Shop All Products</a></p>
						</div>
					</div>
				</div>
			</div>
		<div style={{backgroundImage: `url(${PartnerImg})`}}>
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
