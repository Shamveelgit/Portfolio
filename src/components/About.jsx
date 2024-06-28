import React from 'react'
import { useInterSectionObserver } from '../Hooks/observer'
import reactIcon from "../../icons/react.svg"
import html from "../../icons/html5.svg"
import css from "../../icons/css.svg"
import js from "../../icons/js.svg"
import tailwind from "../../icons/tailwind.svg"
import assets from '../assets/assets'


export default function About(props) {

    const {pageNav,setPageNav} = props

    const [isVisible,aboutRef] = useInterSectionObserver({threshold : 1},false)

    if(isVisible) {
    setPageNav("about")
  }


  return (
    <main  ref={aboutRef} id='about' className='w-full h-screen capitalize flex items-center justify-center flex-wrap p-[24px]'>
        <section id='left-section' className='flex items-center justify-around w-full flex-wrap gap-10' >
            <div className='w-[30rem] h-48 flex items-center justify-center'>
                <div className='font-inter'>
                <h4 className='text-blue-600 font-readex_pro text-left drop-shadow-blueShadow'>about me</h4>
                    <h3 className=' font-bold text-2xl text-left '>indroduction</h3>
                    <p className=' font-medium text-sm text-left '>Hello! I'm Muhammed Shamveel, a passionate web designer dedicated to creating visually stunning and highly functional websites.I specialize in crafting unique online experiences that captivate users and drive engagement.</p>
                </div>   
            </div>
            <div className='w-[30rem] bg-white-400 rounded-md h-[5rem] relative flex justify-around'>
                <h1 className=' left-0 absolute text-left translate-y-[-2rem] font-inter font-bold text-blue-600 drop-shadow-blueShadow'>Tech Skills</h1>
                <img src={html} className=' hover:drop-shadow-lightBlue mt-5 scale-90  hover:scale-125 ease-in duration-200' alt="" />
                <img src={css} className=' hover:drop-shadow-lightBlue mt-5 scale-90  hover:scale-125 ease-in duration-200' alt="" />
                <img src={js} className=' hover:drop-shadow-lightBlue mt-5 scale-90  hover:scale-125 ease-in duration-200' alt="" />
                <img src={tailwind} className=' hover:drop-shadow-lightBlue mt-5 scale-90  hover:scale-125 ease-in duration-200' alt="" />
                <img src={reactIcon} className=' hover:drop-shadow-lightBlue text-blue-700 rounded-md mt-5 scale-90  hover:scale-125 ease-in duration-200' alt="" />
            </div>
            <div className='font-inter w-[30rem] h-48 '>
                <h3 className='font-bold text-2xl text-left  '>my journey</h3>
                <p className=' font-medium text-sm text-left '>My journey into web design began with a curiosity and a desire to create. I immersed myself in online courses, tutorials, and design communities, learning everything I could about web design. Over the years, I’ve honed my skills through hands-on practice and real-world projects, working with a diverse range of clients from startups to established businesses.</p>
   
            </div>
            <div className='font-inter w-[30rem] h-48 '>
                <h3 className='font-bold text-2xl text-left text-blue-600 drop-shadow-blueShadow '>education</h3>
                <li className=' mt-2 list-disc text-left'>plus two computer commerce</li>
   
            </div>
        </section>
    </main>
  )
}
