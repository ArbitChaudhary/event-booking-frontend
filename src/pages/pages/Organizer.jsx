import React from 'react'
import "./Speaker.css"
import { Link } from 'react-router-dom'
import { BsPinterest, BsFacebook, BsTwitter, BsPlusLg } from 'react-icons/bs';

import {AiFillGoogleCircle,AiOutlineMinus} from "react-icons/ai"
import {CgMail} from 'react-icons/cg'
import {FaInstagramSquare} from 'react-icons/fa'



const OrganizerPage = () => {
  return (
    <div>
      <div className="profile-banner">
        <div className="hero-cover-block">
          <div className="hero-cover">
            <div className="hero-cover-img"></div>
          </div>
        </div>
        <div className="user-dt-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-12">
                <div className="main-card user-left-dt">
                  <div className="user-avatar-img">
                    <img src="assets/profile.png" alt="" />
                  </div>
                  <div className="user-dts">
                    <h4 className="user-name">
                      Arbeet Chaudhary
                      <span className="verify-badge">
                        <i className="fa-solid fa-circle-check"></i>
                      </span>
                    </h4>
                    <span className="user-email">info@example.com</span>
                  </div>
                  <div className="ff-block">
                    <a href="#" className="" role="button" data-bs-toggle="modal" data-bs-target="#FFModal">
                      <span>0</span>Followers
                    </a>
                    <a href="#" className="" role="button" data-bs-toggle="modal" data-bs-target="#FFModal">
                      <span>2</span>Following
                    </a>
                  </div>
                  <div className="user-description">
                    <p>Hey I am a Arbeet Chaudhary</p>
                  </div>
                  <div className="user-btns">
                    <button className="main-btn btn-hover min-width h_40 me-2">Follow</button>
                    <Link to ='/contactUsSpeaker'>
                    <button className="co-main-btn min-width h_40" data-bs-toggle="modal" data-bs-target="#contactModal">
                      Contact Us
                    </button> </Link>
                  </div>
                 
                </div>
              </div>
           
              <div className="col-xl-8 col-lg-7 col-md-12">
        <div className="user-tab-sec">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="user-profile-sec" role="tabpanel" aria-labelledby="user-profile">
              <div className="my-profile-content">
                <div className="content-block">
                  <h4 className="mb-3">About Me</h4>
                  <p>I am who i am and i don't bother</p>
                </div>
                {/* Add the events list cards */}
                <div className="speaker-event-list">
                  <EventCard image="assets/live-music.jpg" name="Event 1" location="Location 1" />
                  <EventCard image="assets/loginBackground.jpeg" name="Event 2" location="Location 2" />
                  <EventCard image="assets/dance-event.jpg" name="Event 3" location="Location 3" />
                  {/* Add more event cards as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}


const EventCard = ({ image, name, location }) => {
  return (
    <div className="speaker-event-card">
      <img src={image} alt={name} />
      <div className="speaker-event-details">
        <h4>{name}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default OrganizerPage;
