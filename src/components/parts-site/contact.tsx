import Check_icon from '../../assets/img/icons/check.svg';

export const Contact =()=>{
  return(
    <section id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 text-center">
          <h2 className="title pb-8">Do You Have Any Questions<br/>
          Get Help From Us</h2>
          <div className="content-chat pb-8">
            <div className="chat mr-8">
              <img src={Check_icon.src} className='chat-icon'/>
              <span>Chat Live With Our Support Team</span>
            </div>
            <div className="chat">
              <img src={Check_icon.src} className='chat-icon'/>
              <span>Browse our FAQ</span>
            </div>
          </div>
          <div className="form">
            <input type="text" className='input-text' placeholder='Enter Your Email Address' />
            <input type="submit" className='input-btn' value="Submit" />
          </div>
        </div>
      </div>
    </section>
  )
}