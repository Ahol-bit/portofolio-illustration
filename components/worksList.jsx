import WorkBasket from '@/public/itemsWorks.json';
import Image from 'next/image';


export default function Works() {
  
  
  console.log(WorkBasket)
  
  return (
    <div>
      <section className="flex flex-wrap gap-1 items-center content-center justify-center h-auto w-[85vw] my-[200px] m-auto py-20 bg-gray-800 rounded-3xl overflow-hidden">
        <h1 className="absolute lg:text-3xl text-lg text-white top-40 mt-[65px] z-100 font-blanka">List of Works</h1>
        {WorkBasket.items.responsive.map((item, index) => (
          <div className='md:p-2 p-1'>
            <div key={index} className="md:w-[500px] md:w-[200px] w-[100px] w-[250px]  shadow-lg overflow-hidden rounded-lg">
              <div className='group box'>
                <Image 
                  src={item.imageUrl}
                  width={800}
                  height={600}
                  className='relative rounded-lg transition-transform duration-700 transform group-hover:scale-110 bg-cover mt-[-25px]'
                  alt={item.id}
                  onHover='lg:w-[900px] w-[850px] w-[300px]'
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>

  )
}