import React from 'react'
import moodboard from "../assets/project-assets/moodboard.png"
import meowApi from '../assets/project-assets/meowApi.png'
import treesForLife from '../assets/project-assets/treesForLife.png'
import cohereGen from '../assets/project-assets/cohereGen.png'
import torontoJsVol from '../assets/project-assets/torontoJSVol.png'
import torontoJsBl from '../assets/project-assets/torontojs-blog.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: moodboard,
            demoLink: 'https://moodboard2026.netlify.app/'
        },
        {
            id: 2,
            src: torontoJsBl,
            codeLink: 'https://github.com/torontojs/blog',
            demoLink: 'https://blog.torontojs.com/'
        },
        {
            id: 3,
            src: torontoJsVol,
            codeLink: 'https://github.com/torontojs/torontojs.com',
            demoLink: 'https://torontojs.com/volunteers'
        },
        {
            id: 4,
            src: treesForLife,
            demoLink: 'https://treesareneededforlife.netlify.app/'
        },
        {
            id: 5,
            src: cohereGen,
            demoLink: 'https://cohere-appppp.netlify.app/'
        },
        {
            id: 6,
            src: meowApi,
            demoLink: 'https://meow-api-i9z4.onrender.com/'
        },
        
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-orange-500 via-orange to-pink-300 w-full h-full text-white'> 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div classname='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-20'>
                
            {
                portfolios.map(({ id, src, codeLink, demoLink }) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img
                            src={src}
                            alt="projects"
                            className="rounded-md w-22 h-22 duration-200 hover:scale-105"
                        />
                        <div className="flex items-center justify-center">
                            {demoLink && (
                                <button
                                    onClick={() => window.open(demoLink, "_blank")}
                                    rel="noreferrer"
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                >
                                    Demo
                                </button>
                            )}
                            {/* <button
                                onClick={() => window.open(codeLink, "_blank")}
                                rel="noreferrer"
                                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                            >
                                Code
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
