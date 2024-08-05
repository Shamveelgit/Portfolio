import React, { useEffect } from 'react';
import { useInterSectionObserver } from '../Hooks/observer';
import reactIcon from "../../icons/react.svg";
import html from "../../icons/html5.svg";
import css from "../../icons/css.svg";
import js from "../../icons/js.svg";
import tailwind from "../../icons/tailwind.svg";
import assets from '../assets/assets';

export default function About(props) {
  
  const { pageNav, setPageNav } = props;
  const [isVisible, aboutRef, onceVisible] = useInterSectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (isVisible) {
      setPageNav("about");
    }
    
  }, [isVisible, setPageNav]);

  return (
    <main ref={aboutRef} id='about' className='w-full min-h-screen capitalize flex items-center justify-center flex-wrap p-6'>
      <section id='' className={`${onceVisible ? "flex" : "hidden"} items-center justify-around w-full flex-wrap gap-10`}>
        <div className='w-full md:w-3/5 lg:w-2/5 h-48 flex items-center justify-center'>
          <div className='font-inter'>
            <h4 className='animate-downToUp opacity-0 text-blue-600 font-readex_pro text-left drop-shadow-blueShadow'>about me</h4>
            <h3 className='animate-leftToRight font-bold text-2xl text-left'>introduction</h3>
            <p className='animate-upToDown opacity-0 font-medium text-sm text-left'>
              Hello! I'm Muhammed Shamveel, a passionate web designer dedicated to creating visually stunning and highly functional websites.
              I specialize in crafting unique online experiences that captivate users and drive engagement.
            </p>
          </div>
        </div>
        <div className='w-full md:w-3/5 lg:w-2/5 bg-white-400 rounded-md h-20 relative flex justify-around'>
          <h1 className='animate-[dtu1_1s_ease_forwards_.3s] opacity-0 left-0 absolute text-left translate-y-[-2rem] font-inter font-bold text-blue-600 drop-shadow-blueShadow'>Tech Skills</h1>
          <img src={html} className='hover:drop-shadow-lightBlue mt-5 scale-90 hover:scale-125 ease-in duration-200' alt="HTML" />
          <img src={css} className='hover:drop-shadow-lightBlue mt-5 scale-90 opacity-0 animate-[popRight_.5s_ease_forwards] hover:scale-125 ease-in duration-200' alt="CSS" />
          <img src={js} className='hover:drop-shadow-lightBlue mt-5 scale-90 opacity-0 animate-[popRight_.5s_ease_forwards_.5s] hover:scale-125 ease-in duration-200' alt="JavaScript" />
          <img src={tailwind} className='hover:drop-shadow-lightBlue mt-5 scale-90 opacity-0 animate-[popRight_.5s_ease_forwards_1s] hover:scale-125 ease-in duration-200' alt="Tailwind CSS" />
          <img src={reactIcon} className='hover:drop-shadow-lightBlue text-blue-700 opacity-0 animate-[popRight_.5s_ease_forwards_1.5s] rounded-md mt-5 scale-90 hover:scale-125 ease-in duration-200' alt="React" />
        </div>
        <div className='font-inter w-full md:w-3/5 lg:w-2/5 h-48'>
          <h3 className='animate-leftToRight font-bold text-2xl text-left'>my journey</h3>
          <p className='font-medium text-sm text-left animate-upToDown opacity-0'>
            My journey into web design began with a curiosity and a desire to create. I immersed myself in online courses, tutorials, and design communities,
            learning everything I could about web design. Over the years, I’ve honed my skills through hands-on practice and real-world projects, working with a diverse range of clients from startups to established businesses.
          </p>
        </div>
        <div className='font-inter w-full md:w-3/5 lg:w-2/5 h-48'>
          <h3 className='font-bold text-2xl text-left text-blue-600 drop-shadow-blueShadow animate-leftToRight'>education</h3>
          <li className='animate-upToDown opacity-0 mt-2 list-disc text-left'>plus two computer commerce</li>
        </div>
      </section>
    </main>
  );
}
