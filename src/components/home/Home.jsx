import React, { useEffect, useState } from "react";
import "../../assets/sass/style.scss";
import "../../assets/css/vendors.css";
import "../../assets/css/style.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

export default function Home() {
  const [events, setEvents] = useState(null);
  const [movies, setMovies] = useState(null);
  const [sports, setSports] = useState(null);
  
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:5000/events");
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("http://localhost:5000/movies");
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchSports = async () => {
      const response = await fetch("http://localhost:5000/sports");
      const data = await response.json();
      setSports(data);
    };
    fetchSports();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <section className="hero_single version_2">
          <div className="wrapper">
            <div className="container">
              <h3>Book unique experiences</h3>
              <p>
                Expolore top rated tours, hotels and restaurants around the
                world
              </p>
              <form>
                <div className="row g-0 custom-search-input-2">
                  <div className="col-lg-5">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Hotel, City..."
                        required
                      />
                      <i className="icon_pin_alt"></i>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="dates"
                        placeholder="Search for Events..."
                        required
                      />
                      <i className="icon_calendar"></i>
                    </div>
                  </div>
                  {/* <div className="col-lg-3">
								<div className="panel-dropdown">
									<a href="#">Guests <span className="qtyTotal">1</span></a>
									<div className="panel-dropdown-content">
										<!-- Quantity Buttons -->
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
							</div> */}
                  <div className="col-lg-2">
                    <Link to="/searched">
                      {" "}
                      <input
                        type="submit"
                        className="btn_search"
                        value="Search"
                      />
                    </Link>
                  </div>
                </div>
                {/* <!-- /row --> */}
              </form>
            </div>
          </div>
        </section>
        {/* <!-- /hero_single --> */}

        <div className="container container-custom margin_80_0">
          <div className="main_title_2">
            <span>
              <em></em>
            </span>
            <h2>Popular Events</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          {/* <div id="reccomended" className="owl-carousel owl-theme"> */}
              
            
                  {/* // <div className="col-xl-4 col-lg-6 col-md-6 isotope-item popular"> */}
                  <div className="isotope-wrapper">
          {events && (
                  <OwlCarousel className="owl-theme"
                    items={3}
                    loop
                    autoplay
                    autoplaySpeed={3000}
                    dotsEach
                    autoplayHoverPause
                    >
                      {/* <div className="row"> */}
                    {events.slice(0,5).map((event) => (
                      <div>
                    <div className="box_grid" key={event.id}>
                      <figure>
                        <a href="#0" className="wish_bt"></a>
                        <Link to={`/eventdetails/${event.id}`}>
                          <img
                            src={event.image}
                            className="img-fluid"
                            alt=""
                            width="800"
                            height="533"
                          />
                          <div className="read_more">
                            <span>Read more</span>
                          </div>
                        </Link>
                        <small>Historic</small>
                      </figure>
                      <div className="wrapper">
                        <h3>
                          <Link to={`/eventdetails/${event.id}`}>
                            <a>{event.name}</a>
                          </Link>
                        </h3>
                        <p>Details</p>
                        <span className="price">
                          From <strong>${event.price}</strong> /per person
                        </span>
                      </div>
                      <ul>
					  <li><i className="icon_clock_alt"></i> 5 Days left</li>
                        <li>
                          <div className="score">
                            <strong>100 </strong>
                            <span>Pcs Left</span>
                          </div>
                        </li>
                      </ul>
                    </div>
              </div>
              ))}
              {/* </div> */}
                    </OwlCarousel>
                    )}
                    </div>
                  {/*  </div> */}

            {/* <!-- /row --> */}

          {/* <!-- /item --> */}
          
            <Link to="/event">
          <p className="btn_home_align">
            <a href="#events" className="btn_1 rounded">
              View all Events
            </a>
          </p>
          </Link>
          <hr className="large" />
        </div>
        {/* <!-- /container --> */}

        <div className="container container-custom margin_30_95">
          <section className="add_bottom_0">
            <div className="main_title_3">
              <span>
                <em></em>
              </span>
              <h2>Nearby Events</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            {events && (
            <div className="row">
            {events.slice(0,4).map((nearEvent)=>(
              <div className="col-xl-3 col-lg-6 col-md-6" key={nearEvent.id}>
                <Link to={`/eventdetails/${nearEvent.id}`}>
                  {" "}
                  <a className="grid_item">
                    <figure>
                      <div className="score">
                        <strong>8.9</strong>
                      </div>
                      <img
                        src={nearEvent.image}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="info">
                        <div className="cat_star">
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                        </div>
                        <h3>{nearEvent.name}</h3>
                      </div>
                    </figure>
                  </a>
                </Link>
              </div>
              ))}
            </div>
              )}
            {/* <!-- /row --> */}
            <Link to="/event">
              {" "}
              <a>
                <strong>
                  View all (123) <i className="arrow_carrot-right"></i>
                </strong>
              </a>
            </Link>
          </section>
          <div className="container container-custom margin_80_0">
            <div className="main_title_2">
              <span>
                <em></em>
              </span>
              <h2>Popular Movies</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            {/* <div id="reccomended" className="owl-carousel owl-theme"> */}
            {/* <div className='event-card-container'> */}
            <div className="isotope-wrapper">
          {movies && (
                  <OwlCarousel className="owl-theme"
                    items={3}
                    loop
                    autoplay
                    autoplaySpeed={3000}
                    dotsEach
                    autoplayHoverPause

                    >
                      {/* <div className="row"> */}
                    {movies.slice(0,5).map((movie) => (
                      <div>
                    <div className="box_grid" key={movie.id}>
                      <figure>
                        <a href="#0" className="wish_bt"></a>
                        <Link to={`/eventdetails/${movie.id}`}>
                          <img
                            src={movie.image}
                            className="img-fluid"
                            alt=""
                            width="800"
                            height="533"
                          />
                          <div className="read_more">
                            <span>Read more</span>
                          </div>
                        </Link>
                        <small>Historic</small>
                      </figure>
                      <div className="wrapper">
                        <h3>
                          <Link to={`/eventdetails/${movie.id}`}>
                            <a>{movie.name}</a>
                          </Link>
                        </h3>
                        <p>Details</p>
                        <span className="price">
                          From <strong>${movie.price}</strong> /per person
                        </span>
                      </div>
                      <ul>
					  <li><i className="icon_clock_alt"></i> 5 Days left</li>
                        <li>
                          <div className="score">
                            <strong>100 </strong>
                            <span>Pcs Left</span>
                          </div>
                        </li>
                      </ul>
                    </div>
              </div>
              ))}
              {/* </div> */}
                    </OwlCarousel>
                    )}
                    </div>

            
            {/* <!-- /isotope-wrapper --> */}

            {/* </div> */}
            {/* <!-- /item --> */}
            {/* </div> */}
            {/* <!-- /carousel --> */}
            <p className="btn_home_align">
              <a href="tours-grid-isotope.html" className="btn_1 rounded">
                View all Movies
              </a>
            </p>
            <hr className="large" />
          </div>
          {/* <!-- /container --> */}

          <div className="container container-custom margin_30_95">
            <section className="add_bottom_0">
              <div className="main_title_3">
                <span>
                  <em></em>
                </span>
                <h2>Nearby Movies</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              {movies && (
              <div className="row">
                {movies.slice(0,4).map((nearMovies)=>(
                <div className="col-xl-3 col-lg-6 col-md-6" key={nearMovies.id}>
                  <Link to={`/moviedetails/${nearMovies.id}`}>
                    <a className="grid_item">
                      <figure>
                        <div className="score">
                          <strong>8.9</strong>
                        </div>
                        <img
                          src={nearMovies.image}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="info">
                          <div className="cat_star">
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                          </div>
                          <h3>{nearMovies.title}</h3>
                        </div>
                      </figure>
                    </a>
                  </Link>
                </div>
                ))}
                {/* <!-- /grid_item --> */}
              </div>
              )}
              {/* <!-- /row --> */}
              <Link to="/movies">
                <a>
                  <strong>
                    View all (123) <i className="arrow_carrot-right"></i>
                  </strong>
                </a>
              </Link>
            </section>

            <div className="container container-custom margin_80_0">
              <div className="main_title_2">
                <span>
                  <em></em>
                </span>
                <h2>Popular Sports</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              
              <div className="isotope-wrapper">
          {sports && (
                  <OwlCarousel className="owl-theme"
                    items={3}
                    loop
                    autoplay
                    autoplaySpeed={3000}
                    dotsEach
                    autoplayHoverPause

                    >
                      {/* <div className="row"> */}
                    {sports.slice(0,5).map((sport) => (
                      <div>
                    <div className="box_grid" key={sport.id}>
                      <figure>
                        <a href="#0" className="wish_bt"></a>
                        <Link to={`/eventdetails/${sport.id}`}>
                          <img
                            src={sport.image}
                            className="img-fluid"
                            alt=""
                            width="800"
                            height="533"
                          />
                          <div className="read_more">
                            <span>Read more</span>
                          </div>
                        </Link>
                        <small>Historic</small>
                      </figure>
                      <div className="wrapper">
                        <h3>
                          <Link to={`/eventdetails/${sport.id}`}>
                            <a>{sport.name}</a>
                          </Link>
                        </h3>
                        <p>Details</p>
                        <span className="price">
                          From <strong>${sport.price}</strong> /per person
                        </span>
                      </div>
                      <ul>
					  <li><i className="icon_clock_alt"></i> 5 Days left</li>
                        <li>
                          <div className="score">
                            <strong>100 </strong>
                            <span>Pcs Left</span>
                          </div>
                        </li>
                      </ul>
                    </div>
              </div>
              ))}
              {/* </div> */}
                    </OwlCarousel>
                    )}
                    </div>

              <p className="btn_home_align">
                <a href="tours-grid-isotope.html" className="btn_1 rounded">
                  View all Sports
                </a>
              </p>
              <hr className="large" />
            </div>
            {/* <!-- /container --> */}

            <div className="container container-custom margin_30_95">
              <section className="add_bottom_45">
                <div className="main_title_3">
                  <span>
                    <em></em>
                  </span>
                  <h2>Nearby Sports</h2>
                  <p>
                    Cum doctus civibus efficiantur in imperdiet deterruisset.
                  </p>
                </div>
                {sports && (
                <div className="row">
                  {
                  sports.slice(0,4).map((nearSports)=>(
                  <div className="col-xl-3 col-lg-6 col-md-6" key={nearSports.id}>
                    <Link to={`/sportsDetails/${nearSports.id}`}>
                      <a className="grid_item">
                        <figure>
                          <div className="score">
                            <strong>8.9</strong>
                          </div>
                          <img
                            src={nearSports.image}
                            className="img-fluid"
                            alt=""
                          />
                          <div className="info">
                            <div className="cat_star">
                              <i className="icon_star"></i>
                              <i className="icon_star"></i>
                              <i className="icon_star"></i>
                              <i className="icon_star"></i>
                            </div>
                            <h3>{nearSports.name}</h3>
                          </div>
                        </figure>
                      </a>
                    </Link>
                  </div>
                  ))}
                  {/* <!-- /grid_item --> */}
                  
                </div>
                )}
                {/* <!-- /row --> */}
                <Link to="/sports">
                  <strong>
                    View all (123) <i className="arrow_carrot-right"></i>
                  </strong>
                </Link>
              </section>
            </div>
          </div>

          {/* <!-- /section --> */}

          <div className="banner mb-0">
            <div
              className="wrapper d-flex align-items-center opacity-mask"
              data-opacity-mask="rgba(0, 0, 0, 0.3)"
            >
              <div>
                <small>Adventure</small>
                <h3>
                  Your Perfect
                  <br />
                  Advenure Experience
                </h3>
                <p>Activities and accommodations</p>
                <a href="adventure.html" className="btn_1">
                  Read more
                </a>
              </div>
            </div>
            {/* <!-- /wrapper --> */}
          </div>
          {/* <!-- /banner --> */}
        </div>
        {/* <!-- /container --> */}

        <div className="bg_color_1">
          <div className="container margin_80_55">
            <div className="main_title_2">
              <span>
                <em></em>
              </span>
              <h3>News and Events</h3>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <a className="box_news" href="#0">
                  <figure>
                    <img src="assets/images/news_home_1.jpg" alt="" />
                    <figcaption>
                      <strong>28</strong>Dec
                    </figcaption>
                  </figure>
                  <ul>
                    <li>Mark Twain</li>
                    <li>20.11.2017</li>
                  </ul>
                  <h4>Pri oportere scribentur eu</h4>
                  <p>
                    Cu eum alia elit, usu in eius appareat, deleniti sapientem
                    honestatis eos ex. In ius esse ullum vidisse....
                  </p>
                </a>
              </div>
              {/* <!-- /box_news --> */}
              <div className="col-lg-6">
                <a className="box_news" href="#0">
                  <figure>
                    <img src="assets/images/news_home_2.jpg" alt="" />
                    <figcaption>
                      <strong>28</strong>Dec
                    </figcaption>
                  </figure>
                  <ul>
                    <li>Jhon Doe</li>
                    <li>20.11.2017</li>
                  </ul>
                  <h4>Duo eius postea suscipit ad</h4>
                  <p>
                    Cu eum alia elit, usu in eius appareat, deleniti sapientem
                    honestatis eos ex. In ius esse ullum vidisse....
                  </p>
                </a>
              </div>
              {/* <!-- /box_news --> */}
              <div className="col-lg-6">
                <a className="box_news" href="#0">
                  <figure>
                    <img src="assets/images/news_home_3.jpg" alt="" />
                    <figcaption>
                      <strong>28</strong>Dec
                    </figcaption>
                  </figure>
                  <ul>
                    <li>Luca Robinson</li>
                    <li>20.11.2017</li>
                  </ul>
                  <h4>Elitr mandamus cu has</h4>
                  <p>
                    Cu eum alia elit, usu in eius appareat, deleniti sapientem
                    honestatis eos ex. In ius esse ullum vidisse....
                  </p>
                </a>
              </div>
              {/* <!-- /box_news --> */}
              <div className="col-lg-6">
                <a className="box_news" href="#0">
                  <figure>
                    <img src="assets/images/news_home_4.jpg" alt="" />
                    <figcaption>
                      <strong>28</strong>Dec
                    </figcaption>
                  </figure>
                  <ul>
                    <li>Paula Rodrigez</li>
                    <li>20.11.2017</li>
                  </ul>
                  <h4>Id est adhuc ignota delenit</h4>
                  <p>
                    Cu eum alia elit, usu in eius appareat, deleniti sapientem
                    honestatis eos ex. In ius esse ullum vidisse....
                  </p>
                </a>
              </div>
              {/* <!-- /box_news --> */}
            </div>
            {/* <!-- /row --> */}
            <p className="btn_home_align">
              <a href="blog.html" className="btn_1 rounded">
                View all news
              </a>
            </p>
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /bg_color_1 --> */}

        <div className="call_section">
          <div className="container clearfix">
            <div
              className="col-lg-5 col-md-6 float-end wow position-relative"
              data-wow-offset="250"
            >
              <div className="block-reveal">
                <div className="block-vertical"></div>
                <div className="box_1">
                  <h3>Enjoy a GREAT travel with us</h3>
                  <p>
                    Ius cu tamquam persequeris, eu veniam apeirian platonem qui,
                    id aliquip voluptatibus pri. Ei mea primis ornatus
                    disputationi. Menandri erroribus cu per, duo solet congue
                    ut.{" "}
                  </p>
                  <a href="#0" className="btn_1 rounded">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/call_section--> */}
      </main>
      {/* <!-- /main --> */}
      <Footer />
    </div>
  );
}
