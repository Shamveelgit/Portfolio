import React, { useEffect } from 'react'
import { useInterSectionObserver } from '../Hooks/observer';
import mail from "../../icons/mail.svg"
import docs from "../../icons/docs.svg"
import github from "../../icons/github.svg"
import linkdln from "../../icons/linkdln.svg"
import instagram from "../../icons/instagram.svg"

export default function Connect(props) {


  const {pageNav,setPageNav} = props

  const [isVisible,connectRef,onceVisible] = useInterSectionObserver({threshold : 0.5})

  useEffect(() => {

      if(isVisible) {
          setPageNav("connect")
}
  },[isVisible])



  return (
    <main ref={connectRef} className='w-full min-h-72'>
      <section id='connect' className={` flex w-full items-center justify-center mt-10 mb-24`}>
        <div className={`${onceVisible ? "block" : "hidden"} animate-leftToRight w-2/5 h-72 outline-1 outline outline-blue-700 rounded-2xl max-md:m-[1rem] max-md:w-[400px] overflow-hidden *:font-inter`}>
          <div className='w-full h-3/4 flex flex-col items-center justify-center'>
          <h1 className=' animate-upToDown opacity-0 h-20 font-extrabold text-2xl text-blue-600 drop-shadow-blueShadow' >Lets'talk</h1>
              <div className='w-full p-2 flex justify-around'>
                  <div className='flex items-center'>
                      <a href="mailto:shamveelmdr@gmail.com"><img className='hover:scale-110' src={mail} alt="" /></a>
                      <div className='m-2'>
                        <a href="mailto:shamveelmdr@gmail.com" className=' animate-leftToRight opacity-0 text-xl font-bold underline'>Email</a><br />
                        <a className='text-sm animate-upToDown opacity-0' href="mailto:shamveelmdr@gmail.com">shamveelmdr@gmail.com</a>
                      </div>
                  </div>
                  <div className='flex items-center'>
                      <a href="#"><img className='hover:scale-110' src={docs} alt="" /></a>
                      <div>
                        <a href='#' className=' animate-leftToRight opacity-0 text-xl font-bold underline' >Resume</a> <br />
                      </div>
                  </div>
              </div>
          </div>
          <div className='w-full h-1/4 justify-center'>
                  <div className='flex justify-center'>
                    <a target='blank' href="https://www.instagram.com/_shmv.eel/">
                      <img className='hover:scale-110' src={instagram} alt="" />
                    </a>
                    <a target='blank' href="https://www.linkedin.com/in/dev-shamveel">
                      <img className='hover:scale-110' src={linkdln} alt="" />
                    </a>
                    <a target='blank' href="#">
                      <img className='hover:scale-110' src={github} alt="" />
                    </a>
                  </div>
              </div>  
        </div>

      </section>
    </main>
  )
}
