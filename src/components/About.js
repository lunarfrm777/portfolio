import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-gradient-to-b from-pink-300
    to-orange-500 text-black font-bold'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-green-500'>About</p>
            </div>

            <p className='text-xl mb-20'>
                I began my career as a freelance photographer and painter before the pandemic. During that time, an interest in crypto and smart contracts led me to explore how software is built. 
                After taking time away due to a concussion, I started learning to code and discovered a passion for software development. 
                I’ve since transitioned into tech, collaborating with developers, building client projects, and creating work aligned with my interests. 
                Outside of tech, I enjoy chess, bird listening and photography, and yoga.
            </p>
        </div>
    </div>
  )
}

export default About
