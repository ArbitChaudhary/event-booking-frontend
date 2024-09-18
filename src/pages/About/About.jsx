import React from 'react'
import "../../assets/css/style.css"
import "../../assets/sass/style.scss"
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function About() {
	
	
  return (
    <div>
		<Header />
      <main>
		
		<section className="hero_in general">
			<div className="wrapper">
				<div className="container">
					<h1 className="fadeInUp"><span></span>About Our Company</h1>
				</div>
			</div>
		</section>
		{/* <!--/hero_in--> */}

		<div className="container margin_80_55">
			<div className="main_title_2">
				<span><em></em></span>
				<h2>Why Choose Funtastic Tickets</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<a className="box_feat" href="#0">
						<i className="pe-7s-medal"></i>
						<h3>+ 1000 Customers</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
					</a>
				</div>
				<div className="col-lg-4 col-md-6">
					<a className="box_feat" href="#0">
						<i className="pe-7s-help2"></i>
						<h3>H24 Support</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. </p>
					</a>
				</div>
				<div className="col-lg-4 col-md-6">
					<a className="box_feat" href="#0">
						<i className="pe-7s-culture"></i>
						<h3>+ 575 Locations</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
					</a>
				</div>
				<div className="col-lg-4 col-md-6">
					<a className="box_feat" href="#0">
						<i className="pe-7s-headphones"></i>
						<h3>Help Direct Line</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. </p>
					</a>
				</div>
				<div className="col-lg-4 col-md-6">
					<a className="box_feat" href="#0">
						<i className="pe-7s-credit"></i>
						<h3>Secure Payments</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
					</a>
				</div>
				<div className="col-lg-4 col-md-6">
					<a className="box_feat" href="#0">
						<i className="pe-7s-chat"></i>
						<h3>Support via Chat</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. </p>
					</a>
				</div>
			</div>
			{/* <!--/row--> */}
		</div>
		{/* <!-- /container --> */}

		<div className="bg_color_1">
			<div className="container margin_80_55">
				<div className="main_title_2">
					<span><em></em></span>
					<h2>Our Origins and Story</h2>
					<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
				</div>
				<div className="row justify-content-between">
					<div className="col-lg-6 wow position-relative" data-wow-offset="150">
						<figure className="block-reveal">
							<div className="block-horizzontal"></div>
							<img src="assets/images/about-1.jpg" className="img-fluid" alt="" />
						</figure>
					</div>
					<div className="col-lg-5">
						<p>Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos <strong>scaevola probatus</strong>. Nam atqui intellegat ei, sed ex graece essent delectus. Autem consul eum ea. Duo cu fabulas nonumes contentiones, nihil voluptaria pro id. Has graeci deterruisset ad, est no primis detracto pertinax, at cum malis vitae facilisis.</p>
						<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore <strong>percipitur definitiones</strong> ex, nihil utinam recusabo mel no. Dolores reprehendunt no sit, quo cu viris theophrastus. Sit unum efficiendi cu.</p>
						<p><em>CEO Marc Schumaker</em></p>
					</div>
				</div>
				{/* <!--/row--> */}
			</div>
			{/* <!--/container--> */}
		</div>
		{/* <!--/bg_color_1--> */}
	</main>
	{/* <!--/main--> */}
	<Footer />
    </div>
  )
}
