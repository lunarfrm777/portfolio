import React from 'react'
import HeroImage from '../assets/hero-image.jpeg'
import {RiArrowRightSLine} from 'react-icons/ri'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name ='home' className='h-screen w-full bg-gradient-to-b from-orange-500 to-pink-300'>

       <div className='max-w-screen-lg mx-auto flex flex-col 
       items-center justify-center h-full px-4 md:flex-row xs:mt-7 sm'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold 
          text-black'>
           𓆩♡𓆪 Hi! Welcome to my world 𓆩♡𓆪 </h2>
          <p className='text-black font-bold py-4 max-w-md'>
            I have a passion for building responsive 
            full stack web applications and websites.
            Currently, I love using technologies such as Astro, TypeScript, React, JavaScript, Node and SQL!!
          </p>
          
          <div>
            <Link to="portfolio" 
            smooth 
            duration={500}
            className='group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500
            to-blue-500 cursor-pointer'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300'>
                <RiArrowRightSLine size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div className="border-pink-500"> 
          {/* w-3/4 md:w-2/3 → width is 75% on small, 66% on medium+ screens
sm:max-h-[50vh] → only applies on small screens (sm: = ≥640px)
object-contain → maintains aspect ratio
Large screens → no height cap → uses natural image height */}
{/* If your “viewport on Windows” is big (say 1440px), then you don’t want the height restriction applied there. Use max-h only below md: or lg::

max-h-[50vh] md:max-h-none */}
            <img src={HeroImage} alt="Lune profile" className=" rounded-2xl mx-auto 
    w-3/4 md:w-2/3
    sm:max-h-[50vh] 
    object-contain
    mb-10 max-h-[50vh] md:max-h-none"/>
        </div>
       </div>
    </div>
  )
}

export default Home
