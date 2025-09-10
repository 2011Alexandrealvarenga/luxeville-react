import Img_logo from '../../assets/img/logo.png';

import instagram_icon from '../../assets/img/icons/instagram.png';
import facebook_icon from '../../assets/img/icons/facebook.png';
import twitter_icon from '../../assets/img/icons/twitter.png';

export const Footer = () =>{
  return(
    <footer id="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-5">
          <div className="logo">
            <img src={Img_logo.src} className="img-logo" />
            <p className="desc-logo">Bring you closer to your dream home one click at a time.</p>
          </div>
          <div className="item-social">
            <p className="main-item">About</p>
            <a href="">Our Story</a>
            <a href="">Career</a>
            <a href="">Our Team</a>
            <a href="">Resources</a>
          </div>
          <div className="item-social">
            <p className="main-item">Support</p>
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
            <a href="#">Help Center</a>
            <a href="#">Terms of Services</a>
          </div>
          <div className="item-social">
            <p className="main-item">Find Us</p>
            <a href="#">Events</a>
            <a href="#">Location</a>
            <a href="#">Newsletter</a>
          </div>
          <div className="item-social">
            <p className="main-item">Our Social</p>
            <div className="social">
              <img src={instagram_icon.src} />
              <a href="#">Instagram</a>
            </div>
            <div className="social">
              <img src={facebook_icon.src} />
              <a href="#">Facebook</a>
            </div>
            <div className="social">
              <img src={twitter_icon.src} />
              <a href="#">Twitter (x)</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 copiright text-center">
          <hr className="line mb-4" />
          <p>Copyright @ 2025 LuxeVilla</p>
        </div>
      </div>
    </footer>
  )
}