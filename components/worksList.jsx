import WorkBasket from '@/public/itemsWorks.json';
import Image from 'next/image';

export default function Works() {
  const { responsive } = WorkBasket.items;

  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 
    
  // Shuffle the array
  const shuffledArray = shuffle(responsive); 
  
  console.log(shuffledArray); 
  
  return (
    <div>
      <section className="flex flex-wrap gap-1 items-center content-center justify-center h-auto w-[85vw] my-[200px] m-auto py-20 bg-gray-800 rounded-3xl overflow-hidden">
        <div className="absolute lg:text-3xl text-lg text-white top-40 mt-[65px] z-100 font-blanka">
          <span className='text-white'>List of Works</span>
        </div>
        {/* Additional glitch effect text */}
        <div className="absolute lg:text-3xl text-lg text-white top-40 mt-[65px] z-100 font-blanka h1-list">
          <span className='text-white '>List of Works</span>
        </div>
        <div className="absolute lg:text-3xl text-lg text-white z-100 font-blanka h1-list__glitch top-[220px]">
          <span className='text-white'>List of Works</span>
        </div>
        <div className="absolute lg:text-3xl text-lg text-white top-[220px] mt-[65px] z-100 font-blanka h1-list__glitch">
          <span className='text-white'>List of</span>
        </div>
        {/* Mapping over the array to display works */}
        {shuffledArray.map((item, index) => (
          <div key={item.id} className='md:p-2 p-[3px]'>
            <div className="lg:w-[500px] md:w-[180px] w-[100px] shadow-lg overflow-hidden rounded-lg">
              <div className='group box'>
                {/* Using Next.js Image Optimization */}
                <Image 
                  src={item.imageUrl}
                  width={800}
                  height={600}
                  className='box-img relative rounded-lg transition-all duration-700 transform group-hover:scale-110 group-hover:contrast-[160%] group-hover:saturate-[130%] group-hover:grayscale-[1] group-hover:sepia-[80%] bg-cover mt-[-25px]'
                  alt={item.id}
                  onHover='lg:w-[900px] w-[850px] w-[300px]'
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
