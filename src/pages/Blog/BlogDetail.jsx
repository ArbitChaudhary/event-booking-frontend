import './blogDetail.css'
import BlogSide from './BlogSide'
import './blog.css'
import {AiOutlineComment,AiOutlineShareAlt} from 'react-icons/ai'
import {BsPinterest,BsFacebook, BsTwitter} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'
import {FaInstagramSquare} from 'react-icons/fa'
import { Pinterest } from '@mui/icons-material'

export default function BlogDetail() {
  return (
    <>
      <div className="blogDetail-container-side">
        <div className="blogDetail-Containers">
        <div className="blogDetail-container">
          <img src="/assets/blog.png" alt="" className='blogDetail-image'/>
          <div className="blogDetail-Container">
            <div className="blogDetail-comment-share">
              <AiOutlineComment className='blogDetail-comment'/>
              <div>50</div>
              <AiOutlineShareAlt className='blogDetail-comment'/>
              <div>19</div>
            </div>
            <div className="logdetail">
            <div className="blogDetail">
            <div className="blogDetail-date">11 Nov, 2022</div>
            <div className="blogDetail-title">100 Classic Movies Blog Post Ideas</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tenetur consectetur necessitatibus voluptate illo nihil 
               perferendis et optio earum, aliquam vel adipisci quasi suscipit 
               laborum in ex asperiores perspiciatis nemo laboriosam. </p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil
                 qui non minima reprehenderit quae accusamus voluptatem, doloremque facere
                  itaque earum, exercitationem eaque ipsa iure harum repellendus vitae cum beatae?</p>
                <div className="blogDetail-subTitle">Sub Topic of 100 Classic Movies Blog Post Ideas</div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim aliquid 
                  voluptate perferendis perspiciatis natus voluptatum beatae, id accusamus maiores
                   consectetur voluptates sequi animi 
                  laborum quisquam obcaecati suscipit, impedit corrupti eos?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos tempore minima 
                    cupiditate autem corrupti esse perferendis beatae velit, veniam necessitatibus porro 
                    maxime dolorum, et modi quas? Provident, harum quibusdam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos tempore minima 
                    cupiditate autem corrupti esse perferendis beatae velit, veniam necessitatibus porro 
                    maxime dolorum, et modi quas? Provident, harum quibusdam?</p>
            </div>
            <div className='BlogDetail-tags-icons'>
              <div className="BlogDetail-tags">
                <div className="Blog-tag">Tag : </div>
                <div className="blogDetail-tags"> Tickets, Coming Soon, Movies</div>
              </div>
              <div className="blogDetail-icons">
                <li><BsPinterest className='blogDetail-iconsList' /> </li>
                <li> <BsFacebook className='blogDetail-iconsList'/></li>
                <li><FaInstagramSquare className='blogDetail-iconsList'/> </li>
                <li><CgMail className='blogDetail-iconsList'/></li>
                <li><BsTwitter className='blogDetail-iconsList'/></li>
              </div>

            </div>
            </div>
          </div>
        </div>
        <div className="blogDetail-by-container">
          <div className="blogDetail-by">
          <img src="/assets/profile.png" alt="" className='blogDetail-by-img'/>
            <div className="blogDetail-by-name">Raman</div>
          </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Rerum deleniti error, debitis ut numquam consequuntur reiciendis
                officiis sit unde itaque delectus ratione laudantium tenetur, 
              recusandae autem? Porro dolor aliquid similique.</p>
        </div>
        <div className="blogDetail-comments">
          <div className="blogDetail-comment-head">Comments</div>
          <div className="users-comment">
          <div className="img-and-name">
            <img src="/assets/profile.png" alt="" className='comment-image'/>
            <div className="user-days-name">
              <div className="user-days">5 min ago</div>
              <div className="user-name">Raman</div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptate facere.
               Quae aliquid laboriosam quas quia rem voluptatem modi debitis ipsa, earum
               ratione porro eos assumenda temporibus unde adipisci vitae?</p>
          </div>
          <div className="users-comment">
          <div className="img-and-name">
            <img src="/assets/profile.png" alt="" className='comment-image'/>
            <div className="user-days-name">
              <div className="user-days">5 min ago</div>
              <div className="user-name">Raman</div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptate facere.
               Quae aliquid laboriosam quas quia rem voluptatem modi debitis ipsa, earum
               ratione porro eos assumenda temporibus unde adipisci vitae?</p>
          </div>
          <div className="users-comment">
          <div className="img-and-name">
            <img src="/assets/profile.png" alt="" className='comment-image'/>
            <div className="user-days-name">
              <div className="user-days">5 min ago</div>
              <div className="user-name">Raman</div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptate facere.
               Quae aliquid laboriosam quas quia rem voluptatem modi debitis ipsa, earum
               ratione porro eos assumenda temporibus unde adipisci vitae?</p>
          </div>
          <div className="users-comment">
          <div className="img-and-name">
            <img src="/assets/profile.png" alt="" className='comment-image'/>
            <div className="user-days-name">
              <div className="user-days">5 min ago</div>
              <div className="user-name">Raman</div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptate facere.
               Quae aliquid laboriosam quas quia rem voluptatem modi debitis ipsa, earum
               ratione porro eos assumenda temporibus unde adipisci vitae?</p>
          </div>
        </div>
        <div className="blogDetail-commentSection">
          <div className="blogDetail-commentSection-head">leave comments</div>
          <form action="">
            <input type="text" name="" placeholder='Enter Your Full Name' className='blogDetail-commentSection-input'/>
            <br />
            <br />
            <input type="text" name="" id="" placeholder='Enter Your Email Address' className='blogDetail-commentSection-input'/>
            <br />
            <br />
            <textarea name="" id='' rows="5" placeholder='Write a Comment' className='blogDetail-commentSection-input'></textarea>
            <button type='submit' className='comment-leave'>Comment</button>
          </form>
        </div>
        </div>
        <BlogSide />
      </div>
    </>
  )
}
