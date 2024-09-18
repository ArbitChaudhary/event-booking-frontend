import { Link } from 'react-router-dom';
// import './sports.css';
import { CgHeart } from 'react-icons/cg';
// import Tag from '../../components/Tag';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import { useState,useEffect } from 'react';



export default function Sports() {
	const [sport, setSport] = useState(null)
	const[error, setError] = useState(null)
	const[loading, setLoading] = useState(true)
	const[sportsToSHow, setSportsToShow] = useState(9)
	

	useEffect(()=>{
		const fetchAllSports = async()=>{
			try{
			
			const res = await fetch('http://localhost:5000/sports')
			const sport_data = await res.json()
			setSport(sport_data)
			setLoading(false)
			}catch(err){
				setError(err)
				setLoading(false)
			}
		}
		fetchAllSports()
		},[])

		if(error){
			return <p>Error: {error.message}</p>
		}
		if(loading){
			return <p>Loading...</p>
		}
		if(!sport){
			return <p>No data available!</p>
		}

		const loadMore = () =>{
			setSportsToShow( sportsToSHow + 9 )
		}

  return (
    <div >
		<Header />
      <main>
		
		<section className="hero_in tours">
			<div className="wrapper">
				<div className="container">
					<h1 className="fadeInUp"><span></span>Paris tours grid</h1>
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
							<input type="radio" id="latest" name="listing_filter" value="latest" data-filter=".latest" />
							<label for="latest">Latest</label>
						</div>
					</li>
					<li>
						<div className="layout_view">
							<a href="#0" className="active"><i className="icon-th"></i></a>
							<a href="tours-list-isotope.html"><i className="icon-th-list"></i></a>
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
			<div className="col-lg-12">
				<div className="row g-0 custom-search-input-2 inner">
					<div className="col-lg-4">
						<div className="form-group">
							<input className="form-control" type="text" placeholder="What are you looking for..." />
							<i className="icon_search"></i>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="form-group">
							<input className="form-control" type="text" placeholder="Where" />
							<i className="icon_pin_alt"></i>
						</div>
					</div>
					{/* <div className="col-lg-3">
						<select className="wide">
							<option>All Categories</option>	
							<option>Churches</option>
							<option>Historic</option>
							<option>Museums</option>
							<option>Walking tours</option>
						</select>
					</div> */}
					<div className="col-lg-2">
						<Link to="/searched"><input type="submit" className="btn_search" value="Search"/></Link>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /custom-search-input-2 --> */}
			
			<div className="isotope-wrapper">
				{
					sport &&
			<div className="row">
				{
					sport.slice(0,sportsToSHow).map((sports)=>(

						<div className="col-xl-4 col-lg-6 col-md-6 isotope-item popular" key={sports.id}>
					<div className="box_grid">
						<figure>
							<a href="#0" className="wish_bt"></a>
							<a><Link to={`/sportsDetail/${sports.id}`}> <img src="assets/images/tour_1.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div> </Link></a>
							<small>Historic</small>
						</figure>
						<div className="wrapper">
							<h3><Link to={`/sportsDetail/${sport.id}`}><a>{sports.name}</a></Link></h3>
							<p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
							<span className="price">From <strong>$54</strong> /per person</span>
						</div>
						<ul>
						<li><div className="score"><strong> 5</strong><span>Days left</span></div></li>
							<li><div className="score"><strong>100 </strong><span>Pcs Left</span></div></li>
						</ul>
					</div>
				</div>
					))}
				{/* <!-- /box_grid --> */}
				{/* <!-- /box_grid --> */}
			</div>
			}
			{/* <!-- /row --> */}
			</div>
			{/* <!-- /isotope-wrapper --> */}
			
			
			<p className="text-center"  ><a href="#0" onClick={loadMore} className="btn_1 rounded add_top_30">Load more</a></p>
			
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
							<h4>Payments</h4>
							<p>Qui ea nemore eruditi, magna prima possit.</p>
						</a>
					</div>
					<div className="col-md-4">
						<a href="#0" className="boxed_list">
							<i className="pe-7s-note2"></i>
							<h4>Cancel Policy</h4>
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
  );
}
