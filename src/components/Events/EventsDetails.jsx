import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/style.css";
import "../../assets/sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";
import "../../assets/css/bootstrap.css";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import Header from "../Header/Header";
import { json, useParams } from "react-router-dom";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";

export default function EventsDetails() {
  const { id } = useParams();
  const [oneEvent, setOneEvent] = useState(null);
  const [visibleImages, setVisibleImages] = useState([]);
  const [allImages, setAllImages] = useState(0);
  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`http://localhost:5000/events/${id}`);
      const details = await response.json();
      setOneEvent(details);
    };

    fetchEvent();
  });

  const [reviewText, setReviewText] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // POST the review data to the JSON server
    fetch(`http://localhost:5000/events/${id}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reviewText }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Review Submitted", data);
      });
  };

  return (
    <div>
      <main>
        <Header />
        {oneEvent ? (
          <>
            <section className="hero_in adventure_detail">
              <div
                className="wrapper opacity-mask"
                data-opacity-mask="rgba(0, 0, 0, 0.5)"
              >
                <div className="container">
                  <div className="main_info">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <em>{oneEvent.duration} Day Event</em>
                          <div className="score">
                            <span>
                              Superb<em>350 Reviews</em>
                            </span>
                            <strong>8.9</strong>
                          </div>
                        </div>
                        <h1>{oneEvent.name}</h1>
                        <p>{oneEvent.address}</p>
                      </div>
                      <div className="col-lg-8">
                        <div className="pl-lg-4">
                          <h3>{oneEvent.detail}</h3>
                          <ul>
                            <li>
                              <i className="pe-7s-clock"></i>Duration{" "}
                              <span>{oneEvent.duration}</span>
                            </li>
                            <li>
                              <i className="pe-7s-graph3"></i>Activity level{" "}
                              <span>Medium</span>
                            </li>
                            <li>
                              <i className="pe-7s-shopbag"></i>Includes{" "}
                              <span>
                                Equipment, Drinks, Accommodations, Food
                              </span>
                            </li>
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
                    <li>
                      <a href="#description" className="active">
                        Description
                      </a>
                    </li>
                    <li>
                      <a href="#reviews">Reviews</a>
                    </li>
                    <li>
                      <a href="#sidebar">Booking</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="container margin_60_35">
                <div className="row">
                  <div className="col-lg-8">
                    <section id="description">
                      <h2>Description</h2>
                      <p>{oneEvent.description}</p>
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
							    <figure><a href="assets/images/detail_gallery/detail_1.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src={oneEvent.user_images[0]} alt="" /></a></figure>
							    <figure><a href="assets/images/detail_gallery/detail_2.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src={oneEvent.user_images[1]} alt=""/></a></figure>
							    <figure><a href="assets/images/detail_gallery/detail_3.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src={oneEvent.user_images[2]} alt=""/></a></figure>
							    <figure><a href="assets/images/detail_gallery/detail_4.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src={oneEvent.user_images[3]} alt=""/></a></figure>
							    <figure><a href="assets/images/detail_gallery/detail_5.jpg" title="Photo title" data-effect="mfp-zoom-in"><span className="d-flex align-items-center justify-content-center">+{oneEvent.user_images.length - 4}</span><img src={oneEvent.user_images[4]} alt="" /></a></figure>
							</div>
                      <hr />
                      {/* {/* <div className="room_type first">
								<div className="row">
									<div className="col-md-4">
										<img src="assets/images/gallery/hotel_list_1.jpg" className="img-fluid" alt="" />
									</div>
									<div className="col-md-8">
									<h4>Antman</h4>
									<div className='score' > <strong>$100</strong></div>
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
								</div> */}
                      {/* <!-- /row --> */}
                      {/* </div>  */}
                      {/* <!-- /rom_type --> */}
                      {/* <div className="room_type gray">
								<div className="row">
									<div className="col-md-4">
										<img src={event.image} className="img-fluid" alt="" />
									</div>
									<div className="col-md-8">
									<h4>Antman</h4>
									<div className='score' > <strong>$100</strong></div>
										<h6>7 Jun, 2023</h6>

										<p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
										<ul className="hotel_facilities">
											<li><img src="assets/images/hotel_facilites_icon_3.svg" alt="" />Double Bed</li>
											<li><img src="assets/images/hotel_facilites_icon_8.svg" alt="" />Hairdryer</li>
											<li> <div className="counter"><CgMathMinus onClick={negCount} className='plus'/><b>{ticketCount}</b> <CgMathPlus onClick={poCount} className='plus' /></div> </li>
											<li><a href="#sidebar"><div className="book">  BOOK</div> </a></li>

										</ul>
									</div>
								</div> */}
                      {/* <!-- /row --> */}
                      {/* </div> */}
                      {/* <!-- /rom_type --> */}
                      <div className="room_type last">
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src={oneEvent.image}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="col-md-8">
                            <h4>{oneEvent.name}</h4>

                            <div className="score">
                              {" "}
                              <strong>${oneEvent.price}</strong>
                            </div>

                            <h6>{oneEvent.date}</h6>
                            <p>{oneEvent.detail}</p>
                            <ul className="hotel_facilities">
                              <li>
                                <img
                                  src="assets/images/hotel_facilites_icon_3.svg"
                                  alt=""
                                />
                                King size Bed
                              </li>
                              <li>
                                <img
                                  src="assets/images/hotel_facilites_icon_4.svg"
                                  alt=""
                                />
                                Free Wifi
                              </li>
                              <li>
                                <img
                                  src="assets/images/hotel_facilites_icon_6.svg"
                                  alt=""
                                />
                                Bathtub
                              </li>
                              <li>
                                <img
                                  src="assets/images/hotel_facilites_icon_7.svg"
                                  alt=""
                                />
                                Air Condition
                              </li>
                              <li>
                                {" "}
                                <div className="counter">
                                  <CgMathMinus className="plus" />
                                  <b></b> <CgMathPlus className="plus" />
                                </div>{" "}
                              </li>
                              <li>
                                <a href="#sidebar">
                                  <div className="book"> BOOK</div>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- /row --> */}
                      </div>
                      {/* <!-- /rom_type --> */}
                      <hr />
                      <h3>Location</h3>
                      <div
                        id="map"
                        className="map map_single add_bottom_30"
                      ></div>
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
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="90"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-lg-2 col-3">
                                <small>
                                  <strong>5 stars</strong>
                                </small>
                              </div>
                            </div>
                            {/* <!-- /row --> */}
                            <div className="row">
                              <div className="col-lg-10 col-9">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="95"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-lg-2 col-3">
                                <small>
                                  <strong>4 stars</strong>
                                </small>
                              </div>
                            </div>
                            {/* <!-- /row --> */}
                            <div className="row">
                              <div className="col-lg-10 col-9">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-lg-2 col-3">
                                <small>
                                  <strong>3 stars</strong>
                                </small>
                              </div>
                            </div>
                            {/* <!-- /row --> */}
                            <div className="row">
                              <div className="col-lg-10 col-9">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-lg-2 col-3">
                                <small>
                                  <strong>2 stars</strong>
                                </small>
                              </div>
                            </div>
                            {/* <!-- /row --> */}
                            <div className="row">
                              <div className="col-lg-10 col-9">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-lg-2 col-3">
                                <small>
                                  <strong>1 stars</strong>
                                </small>
                              </div>
                            </div>
                            {/* <!-- /row --> */}
                          </div>
                        </div>
                        {/* <!-- /row --> */}
                      </div>

                      <hr />

                      <div className="reviews-container">
                        <div className="review-box clearfix">
                          <figure className="rev-thumb">
                            <img src="/assets/images/avatar1.jpg" alt="" />
                          </figure>
                          <div className="rev-content">
                            <div className="rating">
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star"></i>
                            </div>
                            <div className="rev-info">
                              Admin – April 03, 2016:
                            </div>
                            <div className="rev-text">
                              <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus
                                quis mi at leo pulvinar hendrerit. Cum sociis
                                natoque penatibus et magnis dis
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /review-box --> */}
                        <div className="review-box clearfix">
                          <figure className="rev-thumb">
                            <img src="assets/images/avatar2.jpg" alt="" />
                          </figure>
                          <div className="rev-content">
                            <div className="rating">
                              <i className="icon-star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star"></i>
                            </div>
                            <div className="rev-info">
                              Ahsan – April 01, 2016:
                            </div>
                            <div className="rev-text">
                              <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus
                                quis mi at leo pulvinar hendrerit. Cum sociis
                                natoque penatibus et magnis dis
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /review-box --> */}
                        <div className="review-box clearfix">
                          <figure className="rev-thumb">
                            <img src="assets/images/avatar3.jpg" alt="" />
                          </figure>
                          <div className="rev-content">
                            <div className="rating">
                              <i className="icon-star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star"></i>
                            </div>
                            <div className="rev-info">
                              Sara – March 31, 2016:
                            </div>
                            <div className="rev-text">
                              <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus
                                quis mi at leo pulvinar hendrerit. Cum sociis
                                natoque penatibus et magnis dis
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
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>Name and Lastname *</label>
                            <input
                              type="text"
                              name="name_review"
                              onChange={(e) => setReviewText(e.target.value)}
                              id="name_review"
                              placeholder=""
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Email *</label>
                            <input
                              type="email"
                              name="email_review"
                              onChange={(e) => setReviewText(e.target.value)}
                              id="email_review"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Rating </label>
                            <div className="custom-select-form">
                              <select
                                name="rating_review"
                                id="rating_review"
                                className="wide"
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group col-md-12">
                            <label>Your Review</label>
                            <textarea
                              name="review_text"
                              id="review_text"
                              onChange={(e) => setReviewText(e.target.value)}
                              className="form-control"
                            ></textarea>
                          </div>
                          <div className="form-group col-md-12 add_top_20">
                            <button
                              type="submit"
                              value="Submit"
                              className="btn_1"
                              id="submit-review"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- /col --> */}

                  <aside className="col-lg-4" id="sidebar">
                    <div className="box_detail booking">
                      <div className="price">
                        <span>
                          45$ <small>person</small>
                        </span>
                        <div className="score">
                          <span>
                            Good<em>350 Reviews</em>
                          </span>
                          <strong>7.0</strong>
                        </div>
                      </div>
                      <div className="form-group input-dates">
                        <input
                          className="form-control"
                          type="text"
                          name="dates"
                          placeholder="When.."
                        />
                        <i className="icon_calendar"></i>
                      </div>
                      <div className="panel-dropdown">
                        <a href="#">
                          Guests <span className="qtyTotal"></span>
                        </a>
                        <div className="panel-dropdown-content right">
                          <div className="qtyButtons">
                            <label>Adults</label>
                            <input type="text" name="qtyInput" value="1" />
                          </div>
                          <div className="qtyButtons">
                            <label>Childrens</label>
                            <input type="text" name="qtyInput" value="0" />
                          </div>
                        </div>
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
                      <a className=" add_top_30 btn_1 full-width purchase">
                        Purchase
                      </a>
                      <div className="pay">
                        <a className=" add_top_30 btn_1 full-width purchase">
                          Khalti
                        </a>

                        <a
                          href="#box_detail"
                          className=" add_top_30 btn_1 full-width purchase"
                        >
                          Stripe
                        </a>
                      </div>{" "}
                      <a
                        href="wishlist.html"
                        className="btn_1 full-width outline wishlist"
                      >
                        <i className="icon_heart"></i> Add to wishlist
                      </a>
                      <div className="text-center">
                        <small>No money charged in this step</small>
                      </div>
                    </div>
                    <ul className="share-buttons">
                      <li>
                        <a className="fb-share" href="#0">
                          <i className="social_facebook"></i> Share
                        </a>
                      </li>
                      <li>
                        <a className="twitter-share" href="#0">
                          <i className="social_twitter"></i> Tweet
                        </a>
                      </li>
                      <li>
                        <a className="gplus-share" href="#0">
                          <i className="social_googleplus"></i> Share
                        </a>
                      </li>
                    </ul>
                    <div className="stripe" id="stripe">
                      <div className="box_detail booking" id="box_detail">
                        <div className="score">
                          {" "}
                          <strong>$100</strong>
                        </div>
                        <br />
                        <a
                          href="wishlist.html"
                          className="btn_1 full-width outline wishlist"
                        >
                          <i className="icon_heart"></i> Antman (3)
                        </a>

                        <form action="" className="stripe-form">
                          <label htmlFor="name">Name</label>
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Cardholder name"
                          />
                          <br />
                          <label htmlFor="card">Card Number</label>
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Card Number"
                          />
                          <br />
                          <label htmlFor="expiry">Expiry Date</label>
                          <br />
                          <input type="date" className="form-control" />
                          <br />
                          <label htmlFor="cvc">CVC</label>
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="CVC"
                          />
                          <a
                            href="cart-1.html"
                            className=" add_top_30 btn_1 full-width purchase"
                          >
                            Confirm
                          </a>
                        </form>
                      </div>
                    </div>
                  </aside>
                </div>
                {/* <!-- /row --> */}
              </div>
              {/* <!-- /container --> */}
            </div>

            {/* <!-- /bg_color_1 --> */}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>

      {/* <!--/main--> */}
    </div>
  );
}
