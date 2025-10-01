import banner_topo from '../../assets/img/first-house.png';
export const Banner = () =>{
  return(
    <section id="banner" className="bg_bege_claro">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="content">
            <h1 className="title font-bold">Trusted Real <br/>Estate Solutions</h1>
            <p>Discover premium properties tailored to your lifstyle.</p>
            <p>From buying to renting, we make deals simple.</p>
            <p>Your perfect home is just a click away.</p>
            <button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm cursor-pointer">Click here</button>
          </div>
          <img src={banner_topo.src} className="img-banner" />
        </div>
      </div>
    </section>
  )
}