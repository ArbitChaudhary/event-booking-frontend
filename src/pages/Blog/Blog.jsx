import React from 'react'
import "../../assets/css/blog.css"
import "../../assets/css/style.css"
import "../../assets/sass/style.scss"
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'

export default function Blog() {
  return (
    <div>
		<Header />
      <main>
		<section className="hero_in general">
			<div className="wrapper">
				<div className="container">
					<h1 className="fadeInUp"><span></span>Funtastic Blogs</h1>
				</div>
			</div>
		</section>
		{/* <!--/hero_in--> */}

		<div className="container margin_60_35">
			<div className="row">
				<div className="col-lg-9">
					<article className="blog wow fadeIn">
						<div className="row g-0">
							<div className="col-lg-7">
								<figure>
									<a href="blog-post.html"><img src="assets/images/blog-1.jpg" alt="" />
										<div className="preview"><span>Read more</span></div>
									</a>
								</figure>
							</div>
							<div className="col-lg-5">
								<div className="post_info">
									<small>20 Nov. 2017</small>
									<h3><a href="blog-post.html">Nec nihil menandri appellantur ut</a></h3>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="assets/images/thumb_blog.jpg" alt="" /></div> Jessica Hoops
										</li>
										<li><i className="icon_comment_alt"></i> 20</li>
									</ul>
								</div>
							</div>
						</div>
					</article>
					{/* <!-- /article --> */}

					<article className="blog wow fadeIn">
						<div className="row g-0">
							<div className="col-lg-7">
								<figure>
									<a href="blog-post.html"><img src="assets/images/blog-2.jpg" alt="" />
										<div className="preview"><span>Read more</span></div>
									</a>
								</figure>
							</div>
							<div className="col-lg-5">
								<div className="post_info">
									<small>20 Nov. 2017</small>
									<h3><a href="blog-post.html">Nec nihil menandri appellantur ut</a></h3>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="assets/images/thumb_blog.jpg" alt="" /></div> Jessica Hoops
										</li>
										<li><i className="icon_comment_alt"></i> 20</li>
									</ul>
								</div>
							</div>
						</div>
					</article>
					{/* <!-- /article --> */}

					<article className="blog wow fadeIn">
						<div className="row g-0">
							<div className="col-lg-7">
								<figure>
									<a href="blog-post.html"><img src="assets/images/blog-3.jpg" alt="" />
										<div className="preview"><span>Read more</span></div>
									</a>
								</figure>
							</div>
							<div className="col-lg-5">
								<div className="post_info">
									<small>20 Nov. 2017</small>
									<h3><a href="blog-post.html">Nec nihil menandri appellantur ut</a></h3>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="assets/images/thumb_blog.jpg" alt="" /></div> Jessica Hoops
										</li>
										<li><i className="icon_comment_alt"></i> 20</li>
									</ul>
								</div>
							</div>
						</div>
					</article>
					{/* <!-- /article --> */}

					<article className="blog wow fadeIn">
						<div className="row g-0">
							<div className="col-lg-7">
								<figure>
									<a href="blog-post.html"><img src="assets/images/blog-4.jpg" alt="" />
										<div className="preview"><span>Read more</span></div>
									</a>
								</figure>
							</div>
							<div className="col-lg-5">
								<div className="post_info">
									<small>20 Nov. 2017</small>
									<h3><a href="blog-post.html">Nec nihil menandri appellantur ut</a></h3>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="assets/images/thumb_blog.jpg" alt="" /></div> Jessica Hoops
										</li>
										<li><i className="icon_comment_alt"></i> 20</li>
									</ul>
								</div>
							</div>
						</div>
					</article>
					{/* <!-- /article --> */}

					<nav aria-label="...">
						<ul className="pagination pagination-sm">
							<li className="page-item disabled">
								<a className="page-link" href="#" tabindex="-1">Previous</a>
							</li>
							<li className="page-item"><a className="page-link" href="#">1</a></li>
							<li className="page-item"><a className="page-link" href="#">2</a></li>
							<li className="page-item"><a className="page-link" href="#">3</a></li>
							<li className="page-item">
								<a className="page-link" href="#">Next</a>
							</li>
						</ul>
					</nav>
					{/* <!-- /pagination --> */}
				</div>
				{/* <!-- /col --> */}

				<aside className="col-lg-3">
					<div className="widget">
						<form>
							<div className="form-group">
								<input type="text" name="search" id="search" className="form-control" placeholder="Search..." />
							</div>
							<button type="submit" id="submit" className="btn_1 rounded"> Search</button>
						</form>
					</div>
					{/* <!-- /widget --> */}
					<div className="widget">
						<div className="widget-title">
							<h4>Recent Posts</h4>
						</div>
						<ul className="comments-list">
							<li>
								<div className="alignleft">
									<a href="#0"><img src="assets/images/blog-5.jpg" alt="" /></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
							<li>
								<div className="alignleft">
									<a href="#0"><img src="assets/images/blog-6.jpg" alt="" /></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
							<li>
								<div className="alignleft">
									<a href="#0"><img src="assets/images/blog-4.jpg" alt="" /></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
						</ul>
					</div>
					{/* <!-- /widget --> */}
					<div className="widget">
						<div className="widget-title">
							<h4>Blog Categories</h4>
						</div>
						<ul className="cats">
							<li><a href="#">Admissions <span>(12)</span></a></li>
							<li><a href="#">News <span>(21)</span></a></li>
							<li><a href="#">Events <span>(44)</span></a></li>
							<li><a href="#">Focus in the lab <span>(31)</span></a></li>
						</ul>
					</div>
					{/* <!-- /widget --> */}
					<div className="widget">
						<div className="widget-title">
							<h4>Popular Tags</h4>
						</div>
						<div className="tags">
							<a href="#">Information tecnology</a>
							<a href="#">Students</a>
							<a href="#">Community</a>
							<a href="#">Carreers</a>
							<a href="#">Literature</a>
							<a href="#">Seminars</a>
						</div>
					</div>
					{/* <!-- /widget --> */}
				</aside>
				{/* <!-- /aside --> */}
			</div>
			{/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
	</main>
	{/* <!--/main--> */}
	<Footer />
    </div>
  )
}
