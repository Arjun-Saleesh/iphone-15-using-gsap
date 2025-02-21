import React, { useState } from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
import { heroVideo,smallHeroVideo } from '../utils'

function Hero() {


  const [videoSrc,setvideoSrc]=useState(window.innerWidth<760 ? smallHeroVideo :heroVideo)

    const handlevideoSrc=()=>{
      if(window.innerWidth<760){
        setvideoSrc(smallHeroVideo)
      }else{
        setvideoSrc(heroVideo)
      }
    }
    useEffect(()=>{
      window.addEventListener('resize',handlevideoSrc)
      return()=>{
        window.removeEventListener('resize',handlevideoSrc)
      }
    },[])

  useEffect(()=>{
    gsap.to('#hero',{opacity:1,delay:2})
    gsap.to('#cta',{opacity:1,y:-50,delay:2})
  },[])
  return (
   <>
   <section className='w-full nav-height bg-black relative'>
    <div className="h-5/6 w-full flex-center flex-col">
    <p id='hero' className='hero-tittle'>iphone 15 Pro</p>
    <div className="md:w-10/12 w-9/12">
    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc} src={videoSrc}></video>
    </div>
    </div>
    <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
    <a href="#hightlights" className='btn'>Buy</a>
    <p>From $199/month or $999</p>
    </div>
   </section>
   </>
  )
}

export default Hero
