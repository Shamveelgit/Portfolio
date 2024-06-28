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
        
        const currentRef = targetRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };

        
    },[options])

    return [isVisible,targetRef,oneView]

} 