import { Menu } from "@/components/parts-site/menu";
import { P_residents } from "@/components/parts-site/popular-residences";
import { Help } from "@/components/parts-site/help";
import { Testimonials } from "@/components/parts-site/testemonials";
import { Contact } from "@/components/parts-site/contact";
import { Footer } from "@/components/parts-site/footer";
import { Banner } from "@/components/parts-site/banner";

// import imgXd from '../assets/img/XD PARA TESTAR.jpg';

export default function Home() {
  return (
   <>
   <Menu/>
   <body>
    <Banner />
    <Help/>
    <P_residents />
    <Testimonials/>
    <Contact/>
   </body>
   <Footer/>
   {/* <img 
        src={imgXd.src}
        className='w-full img-card'
      /> */}
   </>
  );
}
