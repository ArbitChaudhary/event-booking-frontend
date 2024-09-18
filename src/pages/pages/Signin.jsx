import React from "react";
import "../../assets/css/style.css";

export default function Signin() {
  return (
    <div id="register_bg">
      <div id="login">
        <aside>
          <figure>
            <a href="/">
              <img
                src="/assets/images/Funtastic-Events-Logo.png"
                width="155"
                height="50"
                alt=""
                className="logo_sticky"
              />
            </a>
          </figure>
          <form>
            <div className="access_social">
              <a href="#0" className="social_bt facebook">
                Login with Facebook
              </a>
              <a href="#0" className="social_bt google">
                Login with Google
              </a>
              <a href="#0" className="social_bt linkedin">
                Login with Linkedin
              </a>
            </div>
            <div className="divider">
              <span>Or</span>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
              />
              <i className="icon_mail_alt"></i>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value=""
              />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="clearfix add_bottom_30">
              <div className="checkboxes float-start">
                <label className="container_check">
                  Remember me
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-end mt-1">
                <a id="forgot" href="javascript:void(0);">
                  Forgot Password?
                </a>
              </div>
            </div>
            <a href="#0" className="btn_1 rounded full-width">
              Login
            </a>
            <div className="text-center add_top_10">
              New to Funtastic?{" "}
              <strong>
                <a href="/singup">Sign up!</a>
              </strong>
            </div>
          </form>
          <div className="copy">© Funtastic Events</div>
        </aside>
		  {/* <img src="/assets/images/backImg.jpg" alt="" height="80%" width="100%"/> */}
      </div>
      {/* <!-- /login --> */}
    </div>
  );
}
