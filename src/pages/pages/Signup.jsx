import React from 'react'
import "../../assets/css/style.css"
import "../../assets/sass/style.scss"
import { useState } from 'react'
import { EventNoteTwoTone } from '@mui/icons-material'
// localhost:5000/api/V1/users/register
export default function Signup() {
	return (
    <div id='register_bg'>
      <div id="login">
		<aside>
			<figure>
				<a href="/"><img src="assets/images/Funtastic-Events-Logo.png" width="140" height="50" alt="" class="logo_sticky" /></a>
			</figure>
			<form method='POST'>
				<div class="form-group">
					<label>Your Name</label>
					<input class="form-control" type="text" name="f_name"/>
					<i class="ti-user"></i>
				</div>
				<div class="form-group">
					<label>Your Last Name</label>
					<input class="form-control" type="text" name='l_name' />
					<i class="ti-user"></i>
				</div>
				<div class="form-group">
					<label>Your Email</label>
					<input class="form-control" type="email" name='email' />
					<i class="icon_mail_alt"></i>
				</div>
				<div class="form-group">
					<label>Your password</label>
					<input class="form-control" type="password" id="password1" name='password1' />
					<i class="icon_lock_alt"></i>
				</div>
				<div class="form-group">
					<label>Confirm password</label>
					<input class="form-control" type="password" id="password2" name='password2' />
					<i class="icon_lock_alt"></i>
				</div>
				<div id="pass-info" class="clearfix"></div>
				<button href="#0" type='submit' class="btn_1 rounded full-width add_top_30">Register Now!</button>
				<div class="text-center add_top_10">Already have an acccount? <strong><a href="/login">Sign In</a></strong></div>
			</form>
			<div class="copy">© Funtastic Tickets</div>
		</aside>
	</div>
	{/* <!-- /login --> */}
    </div>
  )
}
