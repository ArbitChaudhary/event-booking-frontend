import React from 'react'
import "../../assets/css/style.css"
import "../../assets/sass/style.scss"

export default function Footer() {
  return (
    <div>
      <footer>
		<div className="container margin_60_35">
			<div className="row">
				<div className="col-lg-5 col-md-12 pe-5">
					<p><img src="/assets/images/Funtastic-Events-Logo.png" width="150" height="80" alt="" /></p>
					<p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis vis.</p>
					<div className="follow_us">
						<ul>
							<li>Follow us</li>
							<li><a href="#0"><i className="ti-facebook"></i></a></li>
							<li><a href="#0"><i className="ti-twitter-alt"></i></a></li>
							<li><a href="#0"><i className="ti-google"></i></a></li>
							<li><a href="#0"><i className="ti-pinterest"></i></a></li>
							<li><a href="#0"><i className="ti-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 ms-lg-auto">
					<h5>Useful links</h5>
					<ul className="links">
						<li><a href="about.html">About</a></li>
						<li><a href="login.html">Login</a></li>
						<li><a href="register.html">Register</a></li>
						<li><a href="blog.html">News &amp; Events</a></li>
						<li><a href="contacts.html">Contacts</a></li>
					</ul>
				</div>
				<div className="col-lg-3 col-md-6">
					<h5>Contact with Us</h5>
					<ul className="contacts">
						<li><a href="tel://61280932400"><i className="ti-mobile"></i> + 61 23 8093 3400</a></li>
						<li><a href="mailto:info@funtastictickets.com"><i className="ti-email"></i> info@funtastictickets.com</a></li>
					</ul>
					<div id="newsletter">
					<h6>Newsletter</h6>
					<div id="message-newsletter"></div>
					<form method="post" action="phpmailer/newsletter_template_email.php" name="newsletter_form" id="newsletter_form">
						<div className="form-group">
							<input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
							<input type="submit" value="Submit" id="submit-newsletter" />
						</div>
					</form>
					</div>
				</div>
			</div>
			{/* <!--/row--> */}
			<hr />
			<div className="row">
				<div className="col-lg-6">
					<ul id="footer-selector">
						<li>
							<div className="styled-select" id="lang-selector">
								
									<option value="English" selected>English</option>
									
								
							</div>
						</li>
						
						<li><img src="assets/images/cards_all.svg" alt="" /></li>
					</ul>
				</div>
				<div className="col-lg-6">
					<ul id="additional_links">
						<li><a href="/terms-conditions">Terms and conditions</a></li>
						<li><a href="/privacy-policy">Privacy</a></li>
						<li><span>© Funtastic Tickets </span></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	{/* <!--/footer--> */}
    </div>
  )
}
