import React from 'react'
import "../../assets/css/style.css"
import "../../assets/sass/style.scss"
import "../../assets/css/bootstrap.css"
import Header from '../Header/Header'
import Footer from '../footer/Footer'

export default function Searched() {
  return (
    <div>
        <Header />
      <main>
		
		<section className="hero_in hotels">
			<div className="wrapper">
				<div className="container">
					<h1 className="fadeInUp"><span></span>Paris hotels list sidebar</h1>
				</div>
			</div>
		</section>
		{/* <!--/hero_in--> */}
		
		<div className="filters_listing sticky_horizontal">
			<div className="container">
				<ul className="clearfix">
					<li>
						<div className="switch-field">
							<input type="radio" id="all" name="listing_filter" value="all" checked data-filter="*" className="selected" />
							<label for="all">All</label>
							<input type="radio" id="popular" name="listing_filter" value="popular" data-filter=".popular" />
							<label for="popular">Popular</label>
							<input type="radio" id="latest" name="listing_filter" value="latest" data-filter=".latest"/>
							<label for="latest">Latest</label>
						</div>
					</li>
					<li>
						<div className="layout_view">
							<a href="hotels-grid-isotope.html"><i className="icon-th"></i></a>
							<a href="#0" className="active"><i className="icon-th-list"></i></a>
						</div>
					</li>
					<li>
						<a className="btn_map" data-bs-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
					</li>
				</ul>
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /filters --> */}
		
		<div className="collapse" id="collapseMap">
			<div id="map" className="map"></div>
		</div>
		{/* <!-- End Map --> */}

		<div className="container margin_60_35">
			<div className="row">
				<aside className="col-lg-3" id="sidebar">
					<div id="filters_col">
						<a data-bs-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filters </a>
						<div className="collapse show" id="collapseFilters">
							<div className="filter_type">
								<h6>District</h6>
								<ul>
									<li>
										<label className="container_check">All <small>(945)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
									<li>
										<label className="container_check">La Defanse <small>(45)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
									<li>
										<label className="container_check">Paris Center <small>(30)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
									<li>
										<label className="container_check">Latin Quartes<small>(25)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
								</ul>
							</div>
							<div className="filter_type">
                                <h6>Distance</h6>
                                <input type="text" id="range" name="range" value="" />
                            </div>
							<div className="filter_type">
								<h6>Star Category</h6>
								<ul>
									<li>
										<label className="container_check"><span className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></span> <small>(25)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
									<li>
										<label className="container_check"><span className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></span> <small>(26)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
									<li>
										<label className="container_check"><span className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></span> <small>(25)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
								</ul>
							</div>
							<div className="filter_type">
								<h6>Rating</h6>
								<ul>
									<li>
										<label className="container_check">Superb 9+ <small>(25)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
									<li>
										<label className="container_check">Very Good 8+ <small>(26)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
									<li>
										<label className="container_check">Good 7+ <small>(25)</small>
								            <input type="checkbox" />
								            <span className="checkmark"></span>
								        </label>
									</li>
									<li>
										<label className="container_check">Pleasant 6+ <small>(12)</small>
								            <input type="checkbox" /> 
								            <span className="checkmark"></span>
								        </label>
									</li>
								</ul>
							</div>
						</div>
						{/* <!--/collapse --> */}
					</div>
					{/* <!--/filters col--> */}
				</aside>
				{/* <!-- /aside --> */}

				<div className="col-lg-9" id="list_sidebar">
					<div className="isotope-wrapper">
					<div className="box_list isotope-item latest">
						<div className="row g-0">
							<div className="col-lg-5">
								<figure>
									<small>Parirs Centre</small>
									<a href="hotel-detail.html"><img src="assets/images/hotel_1.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div className="col-lg-7">
								<div className="wrapper">
									<a href="#0" className="wish_bt"></a>
									<div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
									<h3><a href="">Park Hyatt Hotel</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span className="price">From <strong>$54</strong> /per person</span>
								</div>
								<ul>
									<li><i className="ti-eye"></i> 164 views</li>
									<li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /box_list --> */}
					<div className="box_list isotope-item popular">
						<div className="row g-0">
							<div className="col-lg-5">
								<figure>
									<small>Parirs Centre</small>
									<a href="tour-detail.html"><img src="assets/images/hotel_2.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div className="col-lg-7">
								<div className="wrapper">
									<a href="#0" className="wish_bt"></a>
									<div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
									<h3><a href="hotel-detail.html">Mariott Hotel</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span className="price">From <strong>$124</strong> /per person</span>
								</div>
								<ul>
									<li><i className="ti-eye"></i> 164 views</li>
									<li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /box_list --> */}
					<div className="box_list isotope-item latest">
						<div className="row g-0">
							<div className="col-lg-5">
								<figure>
									<small>Parirs Centre</small>
									<a href=""><img src="assets/images/hotel_3.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div className="col-lg-7">
								<div className="wrapper">
									<a href="#0" className="wish_bt"></a>
									<div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
									<h3><a href="">Lumiere Hotel</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span className="price">From <strong>$45</strong> /per person</span>
								</div>
								<ul>
									<li><i className="ti-eye"></i> 164 views</li>
									<li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /box_list --> */}
					<div className="box_list isotope-item popular">
						<div className="row g-0">
							<div className="col-lg-5">
								<figure>
									<small>Parirs Centre</small>
									<a href="tour-detail.html"><img src="assets/images/hotel_4.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div className="col-lg-7">
								<div className="wrapper">
									<a href="#0" className="wish_bt"></a>
									<div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
									<h3><a href="">Louvre Hotel</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span className="price">From <strong>$25</strong> /per person</span>
								</div>
								<ul>
									<li><i className="ti-eye"></i> 164 views</li>
									<li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /box_list --> */}
					<div className="box_list isotope-item latest">
						<div className="row g-0">
							<div className="col-lg-5">
								<figure>
									<small>Parirs Centre</small>
									<a ><img src="assets/images/hotel_5.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div className="col-lg-7">
								<div className="wrapper">
									<a href="#0" className="wish_bt"></a>
									<div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
									<h3><a href="hotel-detail.html">Concorde Hotel</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span className="price">From <strong>$65</strong> /per person</span>
								</div>
								<ul>
									<li><i className="ti-eye"></i> 164 views</li>
									<li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /box_list --> */}
					</div>
					{/* <!-- /isotope-wrapper --> */}

					<p className="text-center add_top_30"><a href="#0" className="btn_1 rounded">Load more</a></p>
				</div>
				{/* <!-- /col --> */}
			</div>
			{/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
		<div className="bg_color_1">
			<div className="container margin_60_35">
				<div className="row">
					<div className="col-md-4">
						<a href="#0" className="boxed_list">
							<i className="pe-7s-help2"></i>
							<h4>Need Help? Contact us</h4>
							<p>Cum appareat maiestatis interpretaris et, et sit.</p>
						</a>
					</div>
					<div className="col-md-4">
						<a href="#0" className="boxed_list">
							<i className="pe-7s-wallet"></i>
							<h4>Payments and Refunds</h4>
							<p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
						</a>
					</div>
					<div className="col-md-4">
						<a href="#0" className="boxed_list">
							<i className="pe-7s-note2"></i>
							<h4>Quality Standards</h4>
							<p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
						</a>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /bg_color_1 --> */}
	</main>
	{/* <!--/main--> */}
	<Footer />
    </div>
  )
}
