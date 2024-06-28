import React, { useEffect } from 'react'
import image from "../assets/OFFICAL-1.svg"
import pcIcon from "../../icons/pc.svg"
import reactIcon from "../../icons/reactjs.svg"
import resIcon from "../../icons/responsive.svg"
import { useInterSectionObserver } from '../Hooks/observer'

const Skill_items = [
    {
        images: resIcon,
        title : "Responsive Website Design",
        text : "I create websites that provide an optimal viewing experience across a wide range of devices, from desktop computer monitors to mobile phones. With a responsive design, your website will look great and function perfectly on any screen size, ensuring a seamless user experience for all visitors."

    },
    {
        images: pcIcon,
        title : "Website Redesign",
        text : "If your current website feels outdated or isn't performing as well as it should, I offer comprehensive redesign services. I'll work with you to revamp your site's look and feel, update its functionality, and improve its overall performance. The goal is to ensure your website reflects your brand's identity and meets your business objectives."
        
    },
    {
        images: reactIcon,
        title : "React Website Development",
        text : "Using the powerful React framework, I build dynamic and highly interactive websites that are fast, scalable, and maintainable. React's component-based architecture allows for efficient development and updates, ensuring your website remains cutting-edge and responsive to user needs."
        
    }

]

     function Skills(props) {

    const {pageNav,setPageNav} = props
    const [isVisible,skillsRef,onceVisible] = useInterSectionObserver({threshold : 1})

    useEffect(() => {
        
        if(isVisible) {
            setPageNav("skills")
  }
    },[pageNav,isVisible,onceVisible,setPageNav])


  return (
    <div ref={skillsRef} id='skills' className=' w-full max-md:mt-12'>
        <h1 className=' text-justify font-poppins ml-20 max-md:ml-8 text-2xl text-blue-700 font-bold drop-shadow-blueShadow'>What i do ?</h1>
        <section className={`${onceVisible ? "flex" : "hidden"} mt-16  items-start justify-evenly flex-wrap`}>
            {
                Skill_items.map((items,index) => {
                    return (
                    <div key={index} id='columns' className="col animate-leftToRight flex items-center flex-col w-3/12 max-sm:w-3/4 *:capitalize m-6">
                        <div className=' select-none flex align-middle justify-center mb-4'> 
                            <img src={items.images} className=' w-24' alt="" />
                        </div>
                        <div id='text-div' className=' text-left font-poppins'>
                            <h4 className='text-lg font-semibold'>{items.title}</h4>
                            <p className=' animate-[upToDown_1s_ease-out_forwards_.5s] opacity-0 text-xs '>{items.text}</p>
                        </div>
                    </div>
                )
                })
            }
        </section>
    </div>
  )
}

export default Skills