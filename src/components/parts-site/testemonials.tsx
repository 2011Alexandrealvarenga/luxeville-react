import Img_p_residences1 from '../../assets/img/popular-house-1.png'; 
import User_icon from '../../assets/img/icons/user.png';
import Star_icon from '../../assets/img/icons/star.svg';


export const Testimonials = () => {
  return(
    <section id="testemonials">
      <div className="container mx-auto text-center">
        <h2 className="title py-8">What People Say<br/>About Luxeville</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="item bg_bege bs mx-2">
            <img src={Img_p_residences1.src}  className='thumb' />
            <div className="content">
              <div className="icon-content flex items-center mb-2">
                <img src={User_icon.src} className='icon'/>
                <h3 className="subtitle font-bold ml-2">Michael Anderson</h3>
              </div>
              <p>The webiste made it so easy to brawse properties and compare options eerything was clear and user-friendly</p>
              <div className="content-stars">
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>                
              </div>
            </div>
          </div>
          <div className="item bg_bege bs mx-2">
            <img src={Img_p_residences1.src}  className='thumb' />
            <div className="content">
              <div className="icon-content flex items-center mb-2">
                <img src={User_icon.src} className='icon'/>
                <h3 className="subtitle font-bold ml-2">Jessica Ramirez</h3>
              </div>
              <p>The webiste made it so easy to brawse properties and compare options eerything was clear and user-friendly</p>
              <div className="content-stars">
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>                
              </div>
            </div>
          </div>
                    <div className="item bg_bege bs mx-2">
            <img src={Img_p_residences1.src}  className='thumb' />
            <div className="content">
              <div className="icon-content flex items-center mb-2">
                <img src={User_icon.src} className='icon'/>
                <h3 className="subtitle font-bold ml-2">David Thompson</h3>
              </div>
              <p>The webiste made it so easy to brawse properties and compare options eerything was clear and user-friendly</p>
              <div className="content-stars">
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>
                <img src={Star_icon.src} className='star'/>                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1">

        </div>
      </div>
    </section>
  )
}