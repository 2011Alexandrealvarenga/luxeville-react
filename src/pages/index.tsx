import { P_residents } from "@/components/parts-site/popular-residences";
import { Help } from "@/components/parts-site/help";
import { Testimonials } from "@/components/parts-site/testemonials";
// import imgXd from '../assets/img/XD PARA TESTAR.jpg';

export default function Home() {
  return (
   <>
   <Help/>
   <P_residents />
   <Testimonials/>
   {/* <img 
        src={imgXd.src}
        className='w-full img-card'
      /> */}
   </>
  );
}
