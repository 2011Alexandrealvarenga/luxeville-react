// import imgBanner from '../../assets/img/img-help.png';
import Icon_location from '../../assets/img/icons/marcador-50.png';
import User_icon from '../../assets/img/icons/user.png';
import Check_icon from '../../assets/img/icons/check-list.png';
import Hands_icon from '../../assets/img/icons/aperto-maos.png'

export const Help = () =>{
  return(
    <section id="help" className="">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2">
         
          <div className="content">
            <h2 className="title mb-4">We Help You To Find Your Dream Home</h2>
            <p className='mb-4'>Discover premium properties tailored to your lifestyle. From bying to renting, we make deals simple. Your perfect home is just a click away.</p>
            <div className="k-itens flex justify-center">
              <div className="itens text-center p-2">
                <h3 className="subtitle">
                  8K
                </h3>
                <p>Houses available</p>
              </div>
              <div className="itens text-center p-2">
                <h3 className="subtitle">
                  6K
                </h3>
                <p>Houses sold</p>
              </div>
              <div className="itens text-center p-2">
                <h3 className="subtitle">
                  2K
                </h3>
                <p>Trusted Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 text-center">
          <h2 className="subtitle mb-2">Why Choose Us</h2>
          <p>We combine years of expertise to deliver seamless property solutions.</p>
          <p>From dream homes to smart investments, and professionalism</p>
        </div>
      </div>
      <div className="container mx-auto choose">
        <div className="grid sm:grid-cols-4">
          <div className="itens bg_bege br-16 m-2">
            <img src={Icon_location.src} />
            <h3 className="sub-title2 font-bold mt-4">Expert Guidance</h3>
            <p>With years of experience and market knowledge, our experts prvide valuable insights to help you make confident decisions.</p>
          </div>
          <div className="itens bg_bege br-16 m-2">
            <img src={User_icon.src} />
            <h3 className="sub-title2 font-bold mt-4">Personalized Services</h3>
            <p>Every client is unique, and so are our solutions. We tailor our services to match your needs, preferences, and goals.</p>
          </div>
          <div className="itens bg_bege br-16 m-2">
            <img src={Check_icon.src} />
            <h3 className="sub-title2 font-bold mt-4">Trnsparent Process</h3>
            <p>We believe in honestly and clarity no hidden costs, no surprises, just smooth and reliable real estate transactions.</p>
          </div>
          <div className="itens bg_bege br-16 m-2">
            <img src={Hands_icon.src} />
            <h3 className="sub-title2 font-bold mt-4">Exceptional Support</h3>
            <p>With years of experience and market knowledge, our experts prvide valuable insights to help you make confident decisions.</p>
          </div>          
        </div>
      </div>
    </section>
  )
}