import React from 'react'
import "../../assets/css/style.css"
import "../../assets/sass/style.scss"
import { useEffect, useState } from 'react'
import {CgMathPlus, CgMathMinus} from 'react-icons/cg'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'


export default function MovieDetails() {

	const { id } = useParams()

	const[oneMovie, setOneMovie] = useState(null)

	useEffect(()=>{
		const fetchMovie = async() =>{
			const response = await fetch(`http://localhost:5000/movies/${id}`)
			const details = await response.json()
			setOneMovie(details)
		}

		fetchMovie();
	})
	
	const [Stripe, setStripe] = useState(false)
	const handleStripe =() =>{
		setStripe(true)
	}
	const [Pay, setPay] = useState(false)

	const handlePay = () =>{
		setPay(!Pay)
	} 
	const [ticketCount, setTicketCount] = useState(0)

	const poCount =()=>{
		setTicketCount(ticketCount + 1)
	}
	const negCount =() =>{
		if (ticketCount >0 ){
			setTicketCount(ticketCount -1)
		}
		else{

		}
	}

	
  return (
    <div>
      <div>
		  <main>
		  <Header />
	  {oneMovie ? (
		<>
	  <section  className="hero_in adventure_detail">
			<div  className="wrapper opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
				<div  className="container">
					<div  className="main_info">
					<div  className="row">
						<div  className="col-lg-4">
							<div  className="d-flex align-items-center justify-content-between mb-3"><em>3 Day Trip</em><div  className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></div>
							<h1>{oneMovie.title}</h1>
							<p>Mudgee, Australia</p>
						</div>
						<div  className="col-lg-8">
							<div  className="pl-lg-4">
							<h3>Hike among the gorgeous National Park Mountains and sleep at the top</h3>
							<ul>
								<li><i  className="pe-7s-clock"></i>Duration <span>3 days</span></li>
								<li><i  className="pe-7s-graph3"></i>Activity level <span>Medium</span></li>
								<li><i  className="pe-7s-shopbag"></i>Includes <span>Equipment, Drinks, Accommodations, Food</span></li>
							</ul>
							</div>
						</div>
					</div>
					{/* <!-- /row --> */}
				</div>
					{/* <!-- /main_info --> */}
				</div>
			</div>
		</section>
		{/* <!--/hero_in--> */}


		<div className="bg_color_1">
			<nav className="secondary_nav sticky_horizontal">
				<div className="container">
					<ul className="clearfix">
						<li><a href="#description" className="active">Description</a></li>
						<li><a href="#reviews">Reviews</a></li>
						<li><a href="#sidebar">Booking</a></li>
					</ul>
				</div>
			</nav>
			<div className="container margin_60_35">
				<div className="row">
					<div className="col-lg-8">
						<section id="description">
							<h2>Description</h2>
							<p>Per consequat adolescens ex, cu nibh commune <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
							<p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
							<div className="row">
								<div className="col-lg-6">
									<ul className="bullets">
										<li>Dolorem mediocritatem</li>
										<li>Mea appareat</li>
										<li>Prima causae</li>
										<li>Singulis indoctum</li>
									</ul>
								</div>
								<div className="col-lg-6">
									<ul className="bullets">
										<li>Timeam inimicus</li>
										<li>Oportere democritum</li>
										<li>Cetero inermis</li>
										<li>Pertinacia eum</li>
									</ul>
								</div>
							</div>
							{/* <!-- /row --> */}
							<hr />
							
							<h3>Pictures from our users</h3>
							<div className="pictures_grid magnific-gallery clearfix">
							    <figure><a href="assets/images/detail_gallery/detail_1.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src={oneMovie.user_images[0]} alt="" /></a></figure>
							    <figure><a href="assets/images/detail_gallery/detail_2.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src={oneMovie.user_images[1]} alt=""/></a></figure>
							    <figure><a href="assets/images/detail_gallery/detail_3.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src={oneMovie.user_images[2]} alt=""/></a></figure>
							    <figure><a href="assets/images/detail_gallery/detail_4.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src={oneMovie.user_images[3]} alt=""/></a></figure>
							    <figure><a href="assets/images/detail_gallery/detail_5.jpg" title="Photo title" data-effect="mfp-zoom-in"><span className="d-flex align-items-center justify-content-center">+{oneMovie.user_images.length-4}</span><img src={oneMovie.user_images[4]} alt="" /></a></figure>
							</div>
							{/* <!-- /pictures --> */}
							
							<hr />
								{
								oneMovie.price.map((prices)=>(
							<div className="room_type gray" key={prices.id}>

									
								<div className="row">
									<div className="col-md-4">
										<img src={oneMovie.image} className="img-fluid" alt="" />
									</div>
									<div className="col-md-8">
										<h4>{oneMovie.title}</h4>
										<div className='score' > <strong>${prices}</strong></div>
										<h6>7 Jun, 2023</h6>
										<p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
										<ul className="hotel_facilities">
											<li><img src="assets/images/hotel_facilites_icon_2.svg" alt="" />Single Bed</li>
											<li><img src="assets/images/hotel_facilites_icon_4.svg" alt="" />Free Wifi</li>
											<li><img src="assets/images/hotel_facilites_icon_5.svg" alt="" />Shower</li>
											<li><img src="assets/images/hotel_facilites_icon_7.svg" alt="" />Air Condition</li>
											<li><img src="assets/images/hotel_facilites_icon_8.svg" alt="" />Hairdryer</li>
											<li> <div className="counter"><CgMathMinus onClick={negCount} className='plus'/><b>{ticketCount}</b> <CgMathPlus onClick={poCount} className='plus' /></div> </li>
											<li><a href="#sidebar"><div className="book">  BOOK</div> </a></li>

										</ul>
									</div>
								</div>
								{/* <!-- /row --> */}
							</div>
							))
								}
							{/* <!-- /rom_type --> */}
							
							
							<hr />
							<h3>Location</h3>
							<div id="map" className="map map_single add_bottom_30"></div>
							{/* <!-- End Map --> */}
						</section>
						{/* <!-- /section --> */}
					
						<section id="reviews">
							<h2>Reviews</h2>
							<div className="reviews-container">
								<div className="row">
									<div className="col-lg-3">
										<div id="review_summary">
											<strong>8.5</strong>
											<em>Superb</em>
											<small>Based on 4 reviews</small>
										</div>
									</div>
									<div className="col-lg-9">
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
										</div>
										{/* <!-- /row --> */}
									</div>
								</div>
								{/* <!-- /row --> */}
							</div>

							<hr />

							<div className="reviews-container">

								<div className="review-box clearfix">
									<figure className="rev-thumb"><img src="/assets/images/avatar1.jpg" alt="" />
									</figure>
									<div className="rev-content">
										<div className="rating">
											<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
										</div>
										<div className="rev-info">
											Admin – April 03, 2016:
										</div>
										<div className="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
								</div>
								{/* <!-- /review-box --> */}
								<div className="review-box clearfix">
									<figure className="rev-thumb"><img src="assets/images/avatar2.jpg" alt="" />
									</figure>
									<div className="rev-content">
										<div className="rating">
											<i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
										</div>
										<div className="rev-info">
											Ahsan – April 01, 2016:
										</div>
										<div className="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
								</div>
								{/* <!-- /review-box --> */}
								<div className="review-box clearfix">
									<figure className="rev-thumb"><img src="assets/images/avatar3.jpg" alt="" />
									</figure>
									<div className="rev-content">
										<div className="rating">
											<i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
										</div>
										<div className="rev-info">
											Sara – March 31, 2016:
										</div>
										<div className="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
								</div>
								{/* <!-- /review-box --> */}
							</div>
							{/* <!-- /review-container --> */}
						</section>
						{/* <!-- /section --> */}
						<hr />

							<div className="add-review">
								<h5>Leave a Review</h5>
								<form>
									<div className="row">
										<div className="form-group col-md-6">
											<label>Name and Lastname *</label>
											<input type="text" name="name_review" id="name_review" placeholder="" className="form-control" />
										</div>
										<div className="form-group col-md-6">
											<label>Email *</label>
											<input type="email" name="email_review" id="email_review" className="form-control" />
										</div>
										{/* <div className="form-group col-md-6">
											<label>Rating </label>
											<div className="custom-select-form">
											<select name="rating_review" id="rating_review" className="wide">
												<option value="1">1 (lowest)</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5" selected>5 (medium)</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10 (highest)</option>
											</select>
											</div>
										</div> */}
										<div className="form-group col-md-12">
											<label>Your Review</label>
											<textarea name="review_text" id="review_text" className="form-control" ></textarea>
										</div>
										<div className="form-group col-md-12 add_top_20">
											<input type="submit" value="Submit" className="btn_1" id="submit-review" />
										</div>
									</div>
								</form>
							</div>
					</div>
					{/* <!-- /col --> */}
					
					<aside className="col-lg-4" id="sidebar">
						<div className="box_detail booking">
							<div className="price">
								<span>45$ <small>person</small></span>
								<div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
							</div>

							<div className="form-group input-dates">
								{/* <input className="form-control" type="text" name="dates" placeholder="When.." /> */}
								<div className='form-control' >7 Jun, 2023</div>
								<i className="icon_calendar"></i>
							</div>

							<div className="panel-dropdown">
								<a>Guests <span className="qtyTotal">{ticketCount}</span></a>
								{/* <div className="panel-dropdown-content right">
									<div className="qtyButtons">
										<label>Adults</label>
										<input type="text" name="qtyInput" value="1" />
									</div>
									<div className="qtyButtons">
										<label>Childrens</label>
										<input type="text" name="qtyInput" value="0" />
									</div>
								</div> */}
							</div>

							<div className="form-group clearfix">
								<div className="custom-select-form">
									<select className="wide">
										<option>Room Type</option>	
										<option>Single Room</option>
										<option>Double Room</option>
										<option>Suite Room</option>
									</select>
								</div>
							</div>
							<a className=" add_top_30 btn_1 full-width purchase" onClick={handlePay}>Purchase</a>
							<div className= {Pay ? "pay active" : 'pay'}>
							<a className=" add_top_30 btn_1 full-width purchase" >Khalti</a>

							<a href='#box_detail' onClick={handleStripe} className=" add_top_30 btn_1 full-width purchase" >Stripe</a>

							</div>
							<a href="wishlist.html" className="btn_1 full-width outline wishlist"><i className="icon_heart"></i> Add to wishlist</a>
							<div className="text-center"><small>No money charged in this step</small></div>
						</div>
						<ul className="share-buttons">
							<li><a className="fb-share" href="#0"><i className="social_facebook"></i> Share</a></li>
							<li><a className="twitter-share" href="#0"><i className="social_twitter"></i> Tweet</a></li>
							<li><a className="gplus-share" href="#0"><i className="social_googleplus"></i> Share</a></li>
						</ul>
						<div className={ Stripe ? 'stripe active': 'stripe'} id='stripe'>
						<div className="box_detail booking" id='box_detail'>
						<div className='score' > <strong>$100</strong></div><br />
						<a className="btn_1 full-width outline wishlist"><i className="icon_heart"></i> Antman ({ticketCount})</a>

							<form action="" className='stripe-form'>
								<label htmlFor="name">Name</label><br />
								<input type="text" className='form-control'  placeholder="Cardholder name" />
								<br />
								<label htmlFor="card">Card Number</label><br />
								<input type="text" className='form-control' placeholder='Card Number'/><br />
								<label htmlFor="expiry">Expiry Date</label><br />
								<input type="date" className='form-control' /><br />
								<label htmlFor="cvc">CVC</label><br />
								<input type="text" className='form-control' placeholder='CVC'/>
								<a className=" add_top_30 btn_1 full-width purchase">Confirm</a>
							</form>
						</div>
						</div>
					</aside>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		</>): (<p>Loading...</p>)
		}
		{/* <!-- /bg_color_1 --> */}
			
	 {/* <!--/main--> */}
	 </main>

    </div>
	<Footer />
    </div>
  )
}
