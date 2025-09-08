import imgBanner from '../../assets/img/popular-house-1.png';

export const Help = () =>{
  return(
    <section id="help" className="">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2">
          <img
            src={imgBanner.src}
            className='border-2 border-amber-600'
          />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem distinctio, nihil hic quo consectetur modi numquam accusamus rem quia necessitatibus debitis laborum perspiciatis quidem cupiditate, voluptatibus magni culpa a harum ea, consequatur pariatur alias? Rerum, distinctio? Molestias nisi inventore, maxime iure corporis, ab suscipit totam similique fugit officia cum eum aut corrupti autem sapiente non. Voluptas culpa architecto nesciunt enim praesentium quam eaque itaque officia, perferendis aliquam facilis et reprehenderit labore atque quasi sequi! Repudiandae esse, suscipit qui nihil dolorem repellat aut eveniet cumque dolores debitis a? Vel autem, officia, necessitatibus et accusantium quidem explicabo laboriosam, vero quia illum tempore.</p>
        </div>
      </div>
    </section>
  )
}