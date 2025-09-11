
import Img_p_residences1 from '../../assets/img/popular-house-1.png'; 
import Img_p_residences2 from '../../assets/img/popular-house-2.png'; 
import Img_p_residences3 from '../../assets/img/popular-house-3.png'; 

import Icon_location from '../../assets/img/icons/marcador-50.png';
import Icon_room from '../../assets/img/icons/cama-50.png';
import Icon_meter from '../../assets/img/icons/squad.png'; 

export const P_residents = () =>{
  return(
    <section id="popular_residents" className="bg_claro bg_bege_claro">
      
      <div className="container mx-auto text-center mb-5">
        <h2 className='title'>Our Popular Residences</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3">

          <div className="itens border-radius-card bs  m-2 ">
            <div className="img">
              <img 
                src={Img_p_residences1.src}
                className='w-full img-card border-top'
              />
            </div>
            <div className="bg_bege p-3 border-bottom">
              <div className="flex mb-4 content-center items-center">                      
                <img 
                    src={Icon_location.src}
                    className='icon-size'
                  />
                <span className='font-medium'>San Francisco, California</span>
              </div>
              <div className="w-full flex justify-between items-center  mb-4">                  
                <div className="flex content-center items-center">
                  <img 
                    src={Icon_room.src}
                    className='icon-size'
                  />
                  <span className='font-medium'>4 Rooms</span>
                </div>
                <div className="flex content-center items-center">
                  <img 
                    src={Icon_meter.src}
                    className='icon-size'
                  />
                  <span className='font-medium'>3,500 Sq Ft</span>
                </div>
              </div>
              <div className="flex justify-between content-center items-center mt-4">
                <button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm cursor-pointer">Sign Up</button>
                <span className='font-medium'>$2,500,00</span>
              </div>
            </div>
          </div>
          <div className="itens border-radius-card bs  m-2">
            <div className="img">
              <img 
                src={Img_p_residences2.src}
                className='w-full img-card border-top'
              />
            </div>
            <div className="bg_bege p-3 border-bottom">
              <div className="flex mb-4 content-center items-center">                      
                <img 
                    src={Icon_location.src}
                    className='icon-size'
                  />
                <span className='font-medium'>Los Angeles, California</span>
              </div>
              <div className="w-full flex justify-between items-center  mb-4">                  
                <div className="flex content-center items-center">
                  <img 
                    src={Icon_room.src}
                    className='icon-size'
                  />
                  <span className='font-medium'>3 Rooms</span>
                </div>
                <div className="flex content-center items-center">
                  <img 
                    src={Icon_meter.src}
                    className='icon-size'
                  />
                  <span className='font-medium'>2,200 Sq Ft</span>
                </div>
              </div>
              <div className="flex justify-between content-center items-center mt-4">
                <button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm cursor-pointer">Sign Up</button>
                <span className='font-medium'>$2,500,00</span>
              </div>
            </div>
          </div>
          <div className="itens border-radius-card bs  m-2">
            <div className="img">
              <img 
                src={Img_p_residences1.src}
                className='w-full img-card border-top'
              />
            </div>
            <div className="bg_bege p-3 border-bottom">
              <div className="flex mb-4 content-center items-center">                      
                <img 
                    src={Icon_location.src}
                    className='icon-size'
                  />
                <span className='font-medium'>Bakersfiled, California</span>
              </div>
              <div className="w-full flex justify-between items-center  mb-4">                  
                <div className="flex content-center items-center">
                  <img 
                    src={Icon_room.src}
                    className='icon-size'
                  />
                  <span className='font-medium'>6 Rooms</span>
                </div>
                <div className="flex content-center items-center">
                  <img 
                    src={Icon_meter.src}
                    className='icon-size'
                  />
                  <span className='font-medium'>5,500 Sq Ft</span>
                </div>
              </div>
              <div className="flex justify-between content-center items-center mt-4">
                <button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm cursor-pointer">Sign Up</button>
                <span className='font-medium'>$3,500,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  )
}