'use client'

import Carousel  from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import img1 from '@/public/assets/img/1.png';
import img2 from '@/public/assets/img/8.png';
import img3 from '@/public/assets/img/3.png';
import img4 from '@/public/assets/img/4.png';
import img10 from '@/public/assets/img/10.png';
import img11 from '@/public/assets/img/11.png';

export default function ProjectSide() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className=' skills m-auto lg:my-[6em] md:my-[0] my-[1em]'>
      <div className="skill-bx p-5 w-[80vw] bg-yellow-400 border-t border-l border-gray-800 border-[5px] shadow-lg">
        <h2 id="more" className='md:text-4xl text-xl font-bold m-5 text-black'>
          SOME OF PROJECTS
        </h2>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2000}
            centerMode={false}
            className="owl-carousel owl-theme overflow-visible"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind
            rewindWithAnimation={true}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
          <div className='m-2 md:p-5 p-3'>
            <Image src={img1} alt="Image 1" />
          </div>
          <div className='m-2 md:p-5 p-3'>
            <Image src={img2} alt="Image 2" />
          </div>
          <div className='m-2 md:p-5 p-3'>
            <Image src={img10} alt="Image 2" />
          </div>
          <div className='m-2 md:p-5 p-3'>
            <Image src={img3} alt="Image 3" />
          </div>
          <div className='m-2 md:p-5 p-3'> 
            <Image src={img11} alt="Image 4" />
          </div>
          <div className='m-2 md:p-5 p-3'> 
            <Image src={img4} alt="Image 4" />
          </div>
        </Carousel>
        <button className="more-btn tagline-btn">
          <div className='mt-[-11px]'>
            
          <span className="more-s">MORE PROJECT</span>
          <span aria-hidden class="tagline-btn__glitch">MORE</span>
          </div>
        </button>
      </div>
    </section>
  );
}
