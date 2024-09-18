import React from 'react'
import "../../assets/css/style.css"
import "../../assets/sass/style.scss"
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'

export default function Contact() {
  return (
    <div>
		<Header />
      <main>
		<section class="hero_in contacts">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp"><span></span>Contact Us</h1>
				</div>
			</div>
		</section>
		{/* <!--/hero_in--> */}

		<div class="contact_info">
			<div class="container">
				<ul class="clearfix">
					<li>
						<i class="pe-7s-map-marker"></i>
						<h4>Address</h4>
						<span>Australia, Sydney <br/><small>Monday to Friday 9am - 7pm</small></span>
					</li>
					<li>
						<i class="pe-7s-mail-open-file"></i>
						<h4>Email address</h4>
						<span>support@funtastictickets.com <br/>info@funtastictickets.com<br /></span>

					</li>
					<li>
						<i class="pe-7s-phone"></i>
						<h4>Contacts info</h4>
						<span>+977-9880315550<br/> +977-9865050791<br/></span>
					</li>
				</ul>
			</div>
		</div>
		{/* <!--/contact_info--> */}

		<div class="bg_color_1">
			<div class="container margin_80_55">
				<div class="row justify-content-between">
					<div class="col-lg-5">
						<div class="map_contact">
						</div>
						{/* <!-- /map --> */}
					</div>
					<div class="col-lg-6">
						<h4>Send a message</h4>
						<p>Ex quem dicta delicata usu, zril vocibus maiestatis in qui.</p>
						<div id="message-contact"></div>
						<form method="post" action="phpmailer/contact_template_email.php" id="contactform" autocomplete="off">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label>Name</label>
										<input class="form-control" type="text" id="name_contact" name="name_contact" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Last name</label>
										<input class="form-control" type="text" id="lastname_contact" name="lastname_contact" />
									</div>
								</div>
							</div>
							{/* <!-- /row --> */}
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label>Email</label>
										<input class="form-control" type="email" id="email_contact" name="email_contact" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Telephone</label>
										<input class="form-control" type="text" id="phone_contact" name="phone_contact" />
									</div>
								</div>
							</div>
							{/* <!-- /row --> */}
							<div class="form-group">
								<label>Message</label>
								<textarea class="form-control" id="message_contact" name="message_contact"></textarea>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label>Are you human? 3 + 1 =</label>
										<input class="form-control" type="text" id="verify_contact" name="verify_contact" />
									</div>
								</div>
							</div>
							<p class="add_top_30"><input type="submit" value="Submit" class="btn_1 rounded" id="submit-contact" /></p>
						</form>
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
