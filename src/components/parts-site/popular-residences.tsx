
import Img_p_residences1 from '../../assets/img/popular-house-1.png'; 
import imgXd from '../../assets/img/XD PARA TESTAR.jpg';
import Icon_location from '../../assets/img/icons/marcador-50.png'; 

export const P_residents = () =>{
  return(
    <div id="popular_residents" className="bg_claro bg_bege_claro border-4 py-20">
      {/* <img 
        src={imgXd.src}
        className='w-full img-card'
      /> */}
      <div className="container mx-auto text-center mb-5">
        <h2 className='sub_title'>Our Popular Residences</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {/* itens */}
            <div className="itens border-radius-card bs  m-2">
              <div className="img">
                <img 
                  src={Img_p_residences1.src}
                  className='w-full img-card border-top'
                />
              </div>
              <div className="bg_bege p-3 border-bottom">
                <div className="flex mb-4">
                  <img 
                    src={Icon_location.src}
                    className='icon-size'
                  />
                  <span className='font-medium'>San Francisco, California</span>
                </div>
                <div className="w-full flex justify-between items-center  mb-4">                  
                  <div className="flex">
                    <img 
                      src={Icon_location.src}
                      className='icon-size'
                    />
                    <span className='font-medium'>4 rooms</span>
                  </div>
                  <div className="flex">
                    <img 
                      src={Icon_location.src}
                      className='icon-size'
                    />
                    <span className='font-medium'>3,500 Sq Ft</span>
                  </div>
                </div>
                <div className="flex justify-between content-center items-center mt-4">
                  <button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm">Sign Up</button>
                  <span className='font-medium'>$2,500,00</span>
                </div>
              </div>
            </div>
          {/* End - itens */}
          {/* itens */}
            <div className="itens border-radius-card bs  m-2">
              <div className="img">
                <img 
                  src={Img_p_residences1.src}
                  className='w-full img-card border-top'
                />
              </div>
              <div className="bg_bege p-3 border-bottom">
                <div className="flex mb-4">
                  <img 
                    src={Icon_location.src}
                    className='icon-size'
                  />
                  <span className='font-medium'>San Francisco, California</span>
                </div>
                <div className="w-full flex justify-between items-center  mb-4">                  
                  <div className="flex">
                    <img 
                      src={Icon_location.src}
                      className='icon-size'
                    />
                    <span className='font-medium'>4 rooms</span>
                  </div>
                  <div className="flex">
                    <img 
                      src={Icon_location.src}
                      className='icon-size'
                    />
                    <span className='font-medium'>3,500 Sq Ft</span>
                  </div>
                </div>
                <div className="flex justify-between content-center items-center mt-4">
                  <button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm">Sign Up</button>
                  <span className='font-medium'>$2,500,00</span>
                </div>
              </div>
            </div>
          {/* End - itens */}
          {/* itens */}
            <div className="itens border-radius-card bs  m-2">
              <div className="img">
                <img 
                  src={Img_p_residences1.src}
                  className='w-full img-card border-top'
                />
              </div>
              <div className="bg_bege p-3 border-bottom">
                <div className="flex mb-4">
                  <img 
                    src={Icon_location.src}
                    className='icon-size'
                  />
                  <span className='font-medium'>San Francisco, California</span>
                </div>
                <div className="w-full flex justify-between items-center  mb-4">                  
                  <div className="flex">
                    <img 
                      src={Icon_location.src}
                      className='icon-size'
                    />
                    <span className='font-medium'>4 rooms</span>
                  </div>
                  <div className="flex">
                    <img 
                      src={Icon_location.src}
                      className='icon-size'
                    />
                    <span className='font-medium'>3,500 Sq Ft</span>
                  </div>
                </div>
                <div className="flex justify-between content-center items-center mt-4">
                  <button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm">Sign Up</button>
                  <span className='font-medium'>$2,500,00</span>
                </div>
              </div>
            </div>
          {/* End - itens */}

        </div>

      </div>

    </div>
    
  )
}