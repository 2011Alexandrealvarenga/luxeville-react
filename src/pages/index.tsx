import { P_residents } from "@/components/parts-site/popular-residences";
import { Help } from "@/components/parts-site/help";
// import imgXd from '../assets/img/XD PARA TESTAR.jpg';

export default function Home() {
  return (
   <>
   <Help/>
   <P_residents />
   {/* <img 
        src={imgXd.src}
        className='w-full img-card'
      /> */}
   </>
  );
}
