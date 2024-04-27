import { faXTwitter, faInstagram, faSignalMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import envelope from '@/public/assets/envelope-regular.svg';
import Image from "next/image";
import { Paytone_One } from "next/font/google";

const righteous = Paytone_One({ subsets: ["latin"], weight: '400' });

export default function ContactMe() {

  library.add(faXTwitter, faInstagram, faSignalMessenger )

  return (
    <div className="flex flex-col relative justify-start items-start left-0 m-10 md:ml-40">
      <div className="relative mb-20 md:text-8xl text-6xl font-blanka w-10 z-40">
        <div className="anima3 text-purple-500 absolute">
          <h1 >Start with say hi</h1>
        </div>
        <div className="anima2 text-red-500 absolute">
          <h1 >Start with say hi</h1>
        </div>
        <div className="anima text-yellow-500 absolute">
          <h1 >Start with say hi</h1>
        </div>
        <div className="anima4">
          <h1 >Start with say hi</h1>
        </div>
      </div>
      <div>
        <h1 className="font-blanka md:text-4xl text-2xl">Contact ME</h1>
        <ul className={`mt-5 block ${righteous.className} text-sm`}>
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
    </div>
  )
}