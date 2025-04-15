import Link from 'next/link'
import Image from 'next/image';


export default function Home() {
  return(
    <div>
      <section className='bg-red-500 sm:grid sm:grid-cols-2 sm:items-center
'>
      <div id="img-cont" className='bg-yellow-500'>
      <Image src="/assets/hero.jpeg" width={500} height={500} alt="Your alt text"  className="w-full h-auto" />
        </div>
        <div id='text-cont' className='bg-green-500 sm:p-6'>
          <div id="heading">
            <h1 className="text-4xl font-bold text-center">
              Solving problems using AI and programming.One problem at a time.
            </h1>
          </div>
          <div id="paragraph" className='sm:p-6'>
            <p>
              I use my programming and problem solving skills to solve everyday problems by coming up with cost effective and evnironment friendly solutions.
            </p>
          </div>
          <div id="buttons-cont">
            <button className='bg-blue-500 px-4 py-2'>
              Get in Touch
            </button>
            <button className='bg-blue-500 px-4 py-2'>
              View my Projects
            </button>
          </div>
        </div>
      </section>
      <section className='bg-orange-600 py-12 flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>
          I am changing world
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eum eos aliquam ducimus dolor explicabo.
        </p>
        <button className='bg-gray-950 text-white py-2 px-4 '>
          More about me
        </button>        
      </section>
    </div>
  )
}
