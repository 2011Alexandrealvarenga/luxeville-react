import Img_logo from '../../assets/img/logo.png';

import Img_search from '../../assets/img/icons/search.png';
import Img_user from '../../assets/img/icons/user.png';



export const Menu = () =>{
  return(
    <header>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1">
          <nav className='flex justify-center'>
            <img src={Img_logo.src} alt="" className="logo" />
            <ul>
              <li><a href="#banner">Home</a></li>
              <li><a href="#help">Services</a></li>
              <li><a href="#popular_residents">Products</a></li>
              <li><a href="#testemonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="buttons">
              <ul>
                <li><a href=""><img src={Img_search.src} /></a></li>
                <li><a href=""><img src={Img_user.src} /></a></li>
                <li><button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm cursor-pointer">Sign up</button></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}