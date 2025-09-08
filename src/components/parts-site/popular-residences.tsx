
import Img_p_residences1 from '../../assets/img/popular-house-1.png'; 

import Icon_location from '../../assets/img/icons/marcador-50.png';
import Icon_room from '../../assets/img/icons/cama-50.png';
import Icon_meter from '../../assets/img/icons/squad.png'; 

const P_residents_data = [
  {
    id: 1,
    img: '',
    location: 'San Francisco, California',
    room: '4 Rooms',
    meter: '3,500 Sq Ft',
    price: '$2,500,00'
  },
    {
    id: 2,
    img: '',
    location: 'Los Angeles, California',
    room: '3 Rooms',
    meter: '2,200 Sq Ft',
    price: '$2,200,00'
  },
    {
    id: 3,
    img: '',
    location: 'Bakersfiled, California',
    room: '6 Rooms',
    meter: '5,500 Sq Ft',
    price: '$3,500,00'
  }
]

export const P_residents = () =>{
  return(
    <div id="popular_residents" className="bg_claro bg_bege_claro py-40">
      
      <div className="container mx-auto text-center mb-5">
        <h2 className='sub_title'>Our Popular Residences</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {/* itens */}
          {
            P_residents_data.map(residents=>{
              return(
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
                      <span className='font-medium'>{residents.location}</span>
                    </div>
                    <div className="w-full flex justify-between items-center  mb-4">                  
                      <div className="flex">
                        <img 
                          src={Icon_room.src}
                          className='icon-size'
                        />
                        <span className='font-medium'>{residents.room}</span>
                      </div>
                      <div className="flex">
                        <img 
                          src={Icon_meter.src}
                          className='icon-size'
                        />
                        <span className='font-medium'>{residents.meter}</span>
                      </div>
                    </div>
                    <div className="flex justify-between content-center items-center mt-4">
                      <button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm cursor-pointer">Sign Up</button>
                      <span className='font-medium'>{residents.price}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }


        </div>

      </div>

    </div>
    
  )
}