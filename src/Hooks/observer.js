import React, { useEffect, useRef, useState } from 'react'

export const useInterSectionObserver = (options) => {
    const [isVisible,setIsVisible] = useState(false)
    const targetRef = useRef(null)
    const [oneView,setOneView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setIsVisible(true)
                    setOneView(true)

                }else{
                    setIsVisible(false)
                }
            })
        },options);
        
        if(targetRef.current) {
            observer.observe(targetRef.current)
        }

        
    },[options])

    return [isVisible,targetRef,oneView]

} 