import Image from 'next/image';
import HL from '@/public/assets/HL.png';
import Banner from '@/public/assets/BBB.png';
import ProjectSide from './projectSide';
import ContactMe from './contact';

export default function Homepage() {
  return (
    <div className='flex flex-col justify-center items-stertch gap-2'>
      <div className='overflow-hidden z-[99999] bg-image bg-contain bg-no-repeat bg-left-top'>
       <div className='overflow-hidden flex flex-col justify-between'>
        <Image 
          src={HL}
          width={500}
          className="responsive-image w-[900px] lg:left-[50vw] md:left-[35vw] left-[50vw] "
        />
       </div>
        <div className='absolute md:top-[45vh] top-[30vh] lg:left-[-100px] md:left-[-19vh] left-[-350px] w-[400px] mx-[250px] md:text-4xl font-bold'>
          <h1 className='text-center font-blanka'>
            Welcome To <br />My Portofolio Web
          </h1>
          <button className="tagline-btn home mx-10 my-10">
                <span className='text-black font-azadliq md:text-3xl text-xl'>SEE MORE BELOW</span>
                <span aria-hidden className="tagline-btn__glitch font-azadliq">SEE MORE </span>
                {/* <span aria-hidden class="tagline-btn__tag">R25</span> */}
          </button>
        </div>
      </div>
      <div className='flex flex-wrap md:gap-10 gap-5 items-center content-center justify-center bg-red-600 w-full lg:bottom-[-380px] md:bottom-[-500px] lg:h-[100vh] md:h-[80vh] h-[600px]'>
        <ProjectSide />
      </div>
      <div className=' bg-gray-800 w-full md:h-[60vh] lg:bottom-[-380px] md:bottom-[-500px] md:h-[400px] h-[250px]'>
        <ContactMe />
      </div>
    </div>
  )
}