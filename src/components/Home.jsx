import React, { useEffect } from 'react';
import assets from '../assets/assets';
import Official from '../assets/OFFICAL-1.svg';
import { useInterSectionObserver } from '../Hooks/observer';

export default function Main(props) {

  const {pageNav,setPageNav} = props

  const [isVisible,homeRef] = useInterSectionObserver({threshold : 1})
  const [checkVisible,divRef] = useInterSectionObserver({threshold : 1})

  useEffect(() => {
    if(isVisible) {
      setPageNav("home")
    }
  },[isVisible,pageNav])


  const buttonStyle = "border-solid border-2 border-blue-700 text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all ease-linear duration-300 opacity-0 animate-[upToDown_1s_ease_forwards_.5s]";

  return (
    <main ref={homeRef} className="select-none w-full min-h-screen " id='home' >
      <section ref={divRef} className={`w-full min-h-screen flex items-center justify-center flex-wrap relative ${""}`}>
        <aside className='md:w-1/2' >
          <div className=" *:animate-leftToRight flex items-center justify-center p-4 h-4/5">
            <div className="  m-4 text-center">
              <h3 className=" text-lg md:text-2xl font-semibold font-inknut_antiqua text-left max-md:text-center">I am</h3>
              <h1 className=" text-2xl font-bold font-inknut_antiqua">Muhammed Shamveel</h1>
              <h3 className=" text-lg md:text-2xl font-semibold font-inder text-left max-md:text-center">Developer & Student</h3>
              <div className=" flex justify-center md:justify-start mt-3 ">
                <button className={`${assets.button} ${buttonStyle} mr-3 hover:shadow-lightL `}>Button 1</button>
                <button className={`${assets.button} ${buttonStyle} hover:shadow-lightR`}>Button 2</button>
                <a href=""><img src="" alt="" /></a>
              </div>
            </div>
          </div>
          
        </aside>
        <aside className="md:w-1/2 flex justify-center p-4">
          <div className=" image flex items-center justify-center border-2 border-blue-700 rounded-full w-[22rem]">
            <img src={Official} className="drop-shadow-blueShadow translate-x-2 translate-y-2 " alt="Official" />
            {/* {assets.image} */}
          </div>
        <span id='triangle' className={`${checkVisible ? "" : "block"} max-xl:hidden 2xl:hidden translate-y-[-10%]`} style={assets.triangle}></span>
        </aside>
      </section> 
    </main>
  );
}

