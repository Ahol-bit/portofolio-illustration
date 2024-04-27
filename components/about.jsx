import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faSignalMessenger } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
import envelope from '@/public/assets/envelope-regular.svg';
import { Paytone_One } from "next/font/google";

const righteous = Paytone_One({ subsets: ["latin"], weight: '400' });


export default function About() {
  library.add(faArrowRightLong, faXTwitter, faInstagram, faSignalMessenger)
  return (
    <div className="flex flex-wrap gap-6 items-start content-center justify-between p-10 h-auto w-[85vw] my-[200px] m-auto py-10 bg-gray-800 rounded-3xl overflow-hidden">
      <div className="w-full p-10 border-b border-gray-500">
        <h1 className="font-blanka text-3xl h1-list__glitch absolute mt-[-1099px]">ABOUT ME</h1>
        <h1 className="font-blanka text-3xl h1-list__glitch absolute mt-[-1099px]"> About</h1>
        <h1 className="font-blanka text-3xl h1-list absolute">ABOUT ME</h1>
        <h1 className="font-blanka text-3xl">ABOUT ME</h1>
      </div>
      <div className="lg:w-[700px] md:w-[300px] w-[400px] mt-5 md:px-10 md:text-base text-[12px] pb-10 md:border-r base:border-b border-gray-500">
        <p>I'm <span className="text-xl font-bold">Hoarah Lux</span>.<br></br> I specialize in creating unique character with most anime style. Alongside this, I create eye-catching posters and vibrant graphic designs. In addition to my artistic pursuits, I'm diving into the world of web development, blending creativity with technical skills to bring ideas to life online.</p>
        {/* <p>I'm Hoarah Lux, an illustrator known for crafting intricate character designs. Additionally, I create captivating posters and dynamic graphic designs. Beyond my artistic skills, I also delve into web development at a junior level, merging creativity with technical proficiency in my work.</p> */}
      </div>
      <div className=' md:mx-10 lg:left-[-90px] lg:text-2xl'>
        <h2 className=' mt-5 font-blanka mb-2'>Contact me</h2>
        <ul className={`text-sm relative block ${righteous.className}`}>
          <li className="mb-2">
            <Image 
              src={envelope}
              color="white"
              width={50}
              className="invert w-5 absolute"
            />
            <span className="ml-8">horarux99@gmail.com</span>
          </li>
          <li className="mb-2">
            <FontAwesomeIcon icon={faXTwitter} className="w-5 absolute" />
            <span className="ml-8">@horarux</span>
          </li>
          <li className="mb-2">
            <FontAwesomeIcon icon={faInstagram} className="w-5 absolute"/>
            <span className="ml-8">@horarux111</span>
          </li>
        </ul>
      </div>
      <div className=" mt-10 md:px-10 w-full">
       <h2>You can see all my works here</h2>
       <a className="pills font-bold text-2xl flex flex-wrap mt-2 p-5 w-[250px] text-center rounded-full border-white border" href="/works">
         <span className='ml-10'>WORKS</span>
          <FontAwesomeIcon icon={faArrowRightLong} size={12}    className='icons w-8 mx-1'/>
       </a>
      </div>
    </div>
  )
}