import React, { useEffect, useRef, useState } from 'react'

export const useInterSectionObserver = (options) => {
    const [isVisible,setIsVisible] = useState(false)
    const targetRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }

            })
        },options);

        if(targetRef.current) {
            observer.observe(targetRef.current)
        }
    },[options])

    return [isVisible,targetRef]

} 