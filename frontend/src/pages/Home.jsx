import React, { useEffect, useState } from 'react'
import { AnimatePresence, useScroll } from "motion/react"
import * as motion from "motion/react-client"
import Navbar from '../components/Navbar'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Footer from '../components/Footer'
import { useRef } from "react";
import VariableProximity from '../components/VariableProximity'
import ShinyTextBlue from '../components/ShinyTextBlue'
import useLenis from '../components/lenins'
import {FeatureStepsDemo} from '../components/Features'
import {AuroraBackground} from '../components/ui/aurora-background'
import {ShimmerButton} from '../components/ui/shimmer-button'


function Home() {
    useLenis();

    const [selectedTab, setSelectedTab] = useState(1);
    const DesignEngg = [
        
        { index:1, label: "One-Stop Solution", desc:"Your all-in-one partner for smart, scalable business solutions.", img:"/onestop.png" },
        { index:2, label: "Quality Assurance", desc:"Delivering excellence with every project quality you can trust.", img:"/qa.png" },
        { index:3, label: "Bespoke Process", desc:"Custom crafted processes tailored to meet your unique business needs.", img:"/bespoke.png" },
        { index:4, label: "Time line", desc:"We respect your time delivering every solution on schedule.", img:"/timeline.png" },
        { index:5, label: "Accountability", desc:"Empowering transparency and responsibility at every level.", img:"/accountability.png" }
    
    ]

    const containerRef = useRef(null);
  return (
    <>
    <motion.div
    className=" scroll-smooth  w-full min-w-100 max-w-8xl " >
    
    
    {/* This is hero section */}
        <div className='w-full px-10 py-45 bg-[linear-gradient(110deg,#12006A_25.77%,#2300D0_99.2%)] text-white text-left sm:text-left 2xl:py-40 lg:py-30 lg:px-2-0, md:py-25 md:px-20 md:px-auto, sm:py-40'>

    <section className='container mx-auto max-w-8xl ' id='home-hero'>
        <main className='container mx-auto max-w-8xl grid lg:grid-cols-2 sm:grid-cols-1 gap-10 justify-between'>
            <div className="" id='text-con'>

                <motion.h1 
                initial={{
                    y: -400,
                    opacity: 0
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    delay: 0.1,
                    duration: 1,
                    ease:'easeInOut'
                }}

                className='leading-13 sm:leading-20 2xl:leading-25 text-5xl 2xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl font-bold'
                >
                    INNOVATION <br />THAT INSPIRES <br /> THE FUTURE
                </motion.h1>

                <motion.h4
                initial={{
                    opacity: 0,
                    y: 400
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease:'easeInOut'
                }}

                className='w-full  sm:pl-0 text-left  sm:text-left text-sm leading-5 sm:leading-6 2xl:leading-8 2xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-[#d4d4d8] font-normal w-full  py-8'>Fuel Your Future with Innovation. At the intersection of challenges and passion, we redefine industries with advanced technologies. <br /><br />
                Partner with us to transform your business into a power house to bring best products & services.
                </motion.h4>


                <div className="w-full  justify-start md:justify-start flex">
                    <motion.button 
                     initial={{
                        opacity: 0,
                        y: 100,

                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                         transition:{
                        delay: 1,
                        duration: 0.3,
                        
                    }
                    }}
                    
                    whileHover={{
                        scale: 0.9,
                        cursor:'pointer',
                       backgroundColor: "#12006A",
                       border: "1px solid rgb(255, 255, 255)",
                       color:"white"
                    }}
                    
                    className=' bg-white text-black  font-semibold py-3 text-md px-10 md:px-20 md:py-4 md:text-xl rounded-md'>
                        Get Started
                        
                    </motion.button>
                </div>
            </div>


            <div className="my-auto " id='image'>
                <img src={""} className='' alt="" />
            </div>
        </main>
    </section>
        </div>
    {/* hero section ends */}
        
    {/* This is Design Excellence (Section 2) */}

    <motion.section
    smooth={'true'} delay={800} 
     initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)

     whileInView={{
       y: 0,
       opacity: 1,
       transition: {
         delay: 0.1,
         duration: 0.8,
         ease: "easeInOut",
       },
     }} 

     // heading
     className='container  text-center max-w-8xl mx-auto mt-15 md: px-5 sm:px-10 xl:px-20 ' id='design excellence DE'>  
        <motion.div
 
        className="Heading">
            <h1
            className='w-full font-bold sm:font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                  Start with a Design Excellence
                </div>
            </h1>
           

            <motion.h4
            initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)

            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0,
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-[12px] py-4 px-5 pt-3 sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>
                From engineering marvels to IT breakthroughs, our expertise spans across  PLM services, <br /> Cloud Integration, and beyond. 
            </motion.h4>
        </motion.div>
        
        <motion.div className='feature'>

        <FeatureStepsDemo/>

        </motion.div>
        
    </motion.section>
{/* Design Excellence ends */}
    {/* Section 2 ends here */}


{/* Section 3 (Solutions starts here) */}
<motion.section
    smooth={'true'} delay={800} 
     initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)

     whileInView={{
       y: 0,
       opacity: 1,
       transition: {
         delay: 0.1,
         duration: 0.8,
         ease: "easeInOut",
       },
     }}
     

    // heading
    className=' max-w-8xl bg py-15 bg-[#F7F7F7] text-center max-w-8xl mx-auto my-10 md: px-5 sm:px-10 xl:px-20 ' id='design excellence DE'> 
    <motion.div
 
 className="Heading solution-section">
     <h1
     className='w-full font-bold sm:font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
         Empowering Your Business with <br /> Tailored Solutions
     </h1>

     <motion.h4
     initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)

     whileInView={{
       y: 0,
       opacity: 1,
       transition: {
         delay: 0,
         duration: 0.3,
         ease: "easeInOut",
       },
     }}
     viewport={{ once: false, amount: 0.1 }}
     className='text-[12px] py-4 px-5 pt-3 sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>
         Our approach ensures that clients receive tailored, end-to-end solutions that not <br />only boost productivity but also drive sustainable, long-term success.
     </motion.h4>

     <div className='mt-4'>
            <motion.button
            initial={{ y: 40, opacity: 0 }} // Start position (off-screen bottom)
            
            whileHover={{
                scale: 0.95,
                cursor:'pointer',
                backgroundColor: "transparent",
               border: "1px solid rgb(0, 0, 0)",
               color:"black",
            }}
            
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                  delay: 0.1,
                  duration: 0.4,
                  ease: "easeInOut",
                },
            }}
            viewport={{ once: false, amount: 0.1 }}
            className='bg-black text-white font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl px-5 py-3  sm:px-10 sm:py-4 md:px-8 md:py-3  lg:px-15 lg:py-3 2xl:px-12 2xl:py-3  rounded-full'>
                About Us
            </motion.button>
                </div>
    </motion.div>
    {/* //end of header Partner */}

    {/* Solutions stack starts */}

            <motion.div className='container mx-auto max-w-8xl  md:w-full flex flex-col gap-80 my-15'>
            <div className="stack1 h-auto bg-white md:mx-5 2xl:mx-30 text-black grid grid-cols-1 lg:grid-cols-[1fr_1fr] rounded-4xl">
                <div className=" p-10 md:px-12 md:py-5 flex flex-col justify-center gap-8 2xl:gap-6">
                    <motion.h1
                     initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)

                     whileInView={{
                       y: 0,
                       opacity: 1,
                       transition: {

                         duration: 0.3,
                         ease: "easeInOut",
                       },
                     }}
                     viewport={{ once: false, amount: 0.1 }}
                     className='text-center lg:text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:font-semibold'>
                        Innovative Solutions for Your Every Need</motion.h1>
                    <motion.p
                     initial={{ y: 150, opacity: 0 }} // Start position (off-screen bottom)

                     whileInView={{
                       y: 0,
                       opacity: 1,
                       transition: {

                         duration: 0.2,
                         ease: "easeInOut",
                       },
                     }}
                     viewport={{ once: false, amount: 0.1 }}
                     className='text-center lg:text-left'>We provide a comprehensive range of essential engineering services to help our clients</motion.p>
                    <div className="w-full  justify-center lg:justify-start flex">
                    <motion.button 
                     initial={{
                        opacity: 0,
                        y:100,

                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                         transition:{
                            delay: 0.1,
                        duration: 0.3,
                        
                    }
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                    
                    whileHover={{
                        scale: 0.9,
                        cursor:'pointer',
                       backgroundColor: "transparent",
                       border: "1px solid rgb(0, 0, 0)",
                       color:"black"
                    }}
                    
                    className=' bg-black text-white font-bold py-3 text-md px-10 md:px-18 md:py-4 md:text-xl rounded-full'>
                        Engineering  
                    </motion.button>
                </div>


                </div>
                <div className="w-full p-5 ">
                    <motion.video
                    initial={{ y: 100, opacity: 0, scale:1.1 }} // Start position (off-screen bottom)

                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0,
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: false, amount: 0.1 }}
                    className='object-contain h-full lg:h-100 2xl:h-120' autoPlay loop muted  src="/itfinalfront.webm" alt="Engineering Model" />
                </div>
            </div>


            

            {/* Cloud computing */}
            <div className="stack2 cloudComputing h-auto md:py-5 2xl:py-15  bg-[#030264] md:mx-5 2xl:mx-30 text-white grid grid-cols-1 lg:grid-cols-[1fr_1fr] rounded-4xl">
                <div className="p-10 md:px-12 md:py-5 flex flex-col justify-center gap-8 md:gap-10 2xl:gap-8">
                    <motion.h1
                     initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)

                     whileInView={{
                       y: 0,
                       opacity: 1,
                       transition: {

                         duration: 0.3,
                         ease: "easeInOut",
                       },
                     }}
                     viewport={{ once: false, amount: 0.1 }}
                     className='text-center lg:text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:font-semibold'>
                       Your Data is <br /> Safe With Us & Cloud</motion.h1>
                    <motion.p
                     initial={{ y: 150, opacity: 0 }} // Start position (off-screen bottom)

                     whileInView={{
                       y: 0,
                       opacity: 1,
                       transition: {

                         duration: 0.3,
                         ease: "easeInOut",
                       },
                     }}
                     viewport={{ once: false, amount: 0.1 }}
                     className='text-center lg:text-left'>
                        Our cloud solutions provide businesses with enhanced flexibility, robust security, and scalable infrastructure.
                        </motion.p>
                    <div className="w-full  justify-center lg:justify-start flex">
                    <motion.button 
                     initial={{
                        opacity: 0,
                        y:100,

                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                         transition:{
                            delay: 0.1,
                        duration: 0.3,
                        
                    }
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                    
                    whileHover={{
                        scale: 0.9,
                        cursor:'pointer',
                       backgroundColor: "#12006A",
                       border: "1px solid rgb(255, 255, 255)",
                       color:"white"
                    }}
                    
                    className=' bg-white text-black font-bold py-3 text-md px-10 md:px-18 md:py-4 md:text-xl rounded-full'>
                        Cloud Computing  
                    </motion.button>
                </div>
                </div>
                <div className="overflow-hidden  w-full">
                    <motion.video
                    initial={{ y: 100, opacity: 0, scale:1.3 }} // Start position (off-screen bottom)

                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0,
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                    }}
                    className="h-full"
                    src="/ccfinalfront.webm" 
                    autoPlay
                    loop
                    muted />
                </div>
            </div>
            {/* Cloud computing Ends */}
        
            {/* IT Services */}
            <div className="stack3 itServices h-auto bg-white md:mx-5 2xl:mx-30 text-black grid grid-cols-1 lg:grid-cols-[1fr_1fr] rounded-4xl">
                <div className="p-10 md:px-12 md:py-5 flex flex-col justify-center gap-8 2xl:gap-6">
                    <motion.h1
                     initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)

                     whileInView={{
                       y: 0,
                       opacity: 1,
                       transition: {

                         duration: 0.3,
                         ease: "easeInOut",
                       },
                     }}
                     viewport={{ once: false, amount: 0.1 }}
                     className='text-center lg:text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:font-semibold'>
                        Your Information Meets Our Technology</motion.h1>
                    <motion.p
                     initial={{ y: 150, opacity: 0 }} // Start position (off-screen bottom)

                     whileInView={{
                       y: 0,
                       opacity: 1,
                       transition: {

                         duration: 0.3,
                         ease: "easeInOut",
                       },
                     }}
                     viewport={{ once: false, amount: 0.1 }}
                     className='text-center lg:text-left'>
                        We build high-performance applications and websites tailored to meet business  objectives</motion.p>
                    <div className="w-full  justify-center lg:justify-start flex">
                    <motion.button 
                     initial={{
                        opacity: 0,
                        y:100,

                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                         transition:{
                            delay: 0.1,
                        duration: 0.3,
                        
                    }
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                    
                    whileHover={{
                        scale: 0.9,
                        cursor:'pointer',
                       backgroundColor: "transparent",
                       border: "1px solid rgb(0, 0, 0)",
                       color:"black"
                    }}
                    
                    className=' bg-black text-white font-bold py-3 text-md px-10 md:px-18 md:py-4 md:text-xl rounded-full'>
                        IT Services  
                    </motion.button>
                </div>
                </div>
                <div className="  w-full">
                    <motion.video
                    initial={{ y: 100, opacity: 0, scale: 1.1 }} // Start position (off-screen bottom)

                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0,
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                    }}
                    className="h-full lg:h-100 2xl:h-125"
                    src="itfinalfront.webm" 
                    autoPlay
                    loop
                    muted />
                </div>
            </div>
            {/* IT Services Ends */}
            {/* PLM Services Starts */}
            <div className="stack4 plm h-auto bg-[#030264] md:mx-5 2xl:mx-30 text-white grid grid-cols-1 lg:grid-cols-[1fr_1fr] rounded-4xl">
                <div className="p-10 md:px-12 md:py-5 flex flex-col justify-center gap-8 2xl:gap-8">
                    <motion.h1
                     initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)

                     whileInView={{ 
                       y: 0,
                       opacity: 1,
                       transition: {

                         duration: 0.3,
                         ease: "easeInOut",
                       },
                     }}
                     viewport={{ once: false, amount: 0.1 }}
                     className='text-center lg:text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:font-semibold'>
                        Product Development & Management</motion.h1>
                    <motion.p
                     initial={{ y: 150, opacity: 0 }} // Start position (off-screen bottom)

                     whileInView={{
                       y: 0,
                       opacity: 1,
                       transition: {

                         duration: 0.3,
                         ease: "easeInOut",
                       },
                     }}
                     viewport={{ once: false, amount: 0.1 }}
                     className='text-center lg:text-left'>
                      We help you manage every stage of the product lifecycle with seamless integration, automation, and intelligence.</motion.p>
                    <div className="w-full  justify-center lg:justify-start flex">
                    <motion.button 
                     initial={{
                        opacity: 0,
                        y:100,

                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                         transition:{
                            delay: 0.1,
                        duration: 0.3,
                        
                    }
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                    
                    whileHover={{
                        scale: 0.9,
                        cursor:'pointer',
                       backgroundColor: "#12006A",
                       border: "1px solid rgb(255, 255, 255)",
                       color:"white"
                    }}
                    
                    className=' bg-white text-black font-bold py-3 text-md px-10 md:px-18 md:py-4 md:text-xl rounded-full'>
                        PLM
                    </motion.button>
                </div>
                </div>
                <div className="w-full p-5 ">
                    <motion.img
                    initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)

                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0,
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: false, amount: 0.1 }}
                    className='object-contain h-full lg:h-90 2xl:h-110' src="/plmdraft.png" alt="Engineering Model" />
                </div>
            </div>
            {/* PLM Service Ends */}


            </motion.div>
    </motion.section>
    {/* Section 3 ends here */}

    {/* <section className="4platform bg-[#f7f7f7] py-12 px-10 sm:py-30 sm:px-20 lg:px-0 lg:pt-25 2xl:pb-25 lg:pb-18 grid grid-cols-1 lg:grid-cols-[1fr_1fr] ">
           <div className='lg:pl-20 bg-white rounded-4xl 2xl:pl-50 lg:gap-5  text text-center lg:text-left flex flex-col items-center justify-center lg:items-start '>
              <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0,
                        duration: 0.3,
                        ease: "easeInOut",
                    },
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                className='w-full  font-bold sm:font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                    Need a platform tailored for Enterprise needs?
                </motion.h1>
                <motion.h4
                initial={{ y: 100, opacity: 0 }}

                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0,
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: false, amount: 0.1 }}
                className='text-[12px] py-4  pt-3 sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>
                    Our approach ensures that clients receive tailored, end-to-end solutions that not only boost productivity but also drive sustainable, long-term success.
                </motion.h4>
                <motion.button
                initial={{ y: 40, opacity: 0 }} // Start position (off-screen bottom)
                
                whileHover={{
                    scale: 0.95,
                    cursor:'pointer',
                    backgroundColor: "transparent",
                  border: "1px solid rgb(0, 0, 0)",
                  color:"black",
                }}
                
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                      delay: 0.1,
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                }}
                viewport={{ once: false, amount: 0.1 }}
                className='bg-black text-white font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl px-5 py-3  sm:px-10 sm:py-4 md:px-8 md:py-3  lg:px-20 lg:py-3 2xl:px-22 2xl:py-5  rounded-full'>
                    About Us
                </motion.button>
              </div>

              <div className='flex flex-col items-center justify-center lg:p-10 lg:pl-0 2xl:pl-0 2xl:p-30'>
                <img
                className='w-full h-full object-contain rounded-xl'
                src="/platform.png" alt="platform" />

                </div>    
    </section> */}
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Need a platform tailored for Enterprise needs?
        </div>
        <div className="font-extralight text-center md:text-3xl dark:text-neutral-200 py-4">
        Our approach ensures that clients <br />receive tailored, end-to-end <br /> solutions 
        </div>
        <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Join us
        </span>
      </ShimmerButton>
      </motion.div>
    </AuroraBackground>
    {/* Section 4 ends here */}

    {/* partner */}

        <div className='py-20 px-10 sm:py-22 sm:px-20 lg:px-10 lg:py-10 2xl:py-50 2xl:px-40 flex flex-col items-center justify-center'
          ref={containerRef}
          style={{position: 'relative'}}
          >
            <VariableProximity
              label={'Partner With Us to Transform Your Business into a Power House of Creativity & Efficiency'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 300, 'opsz' 90"
              toFontVariationSettings="'wght' 1500, 'opsz' 50"
              containerRef={containerRef}
              radius={200}
              falloff='linear'
              />  

              <div className='my-2'>
            <motion.button
            initial={{ y: 40, opacity: 0 }} // Start position (off-screen bottom)
            
            whileHover={{
                scale: 0.95,
                cursor:'pointer',
                backgroundColor: "transparent",
               border: "1px solid rgb(0, 0, 0)",
               color:"black",
            }}
            
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                  delay: 0.1,
                  duration: 0.7,
                  ease: "easeInOut",
                },
            }}
            viewport={{ once: false, amount: 0.1 }}
            className='bg-black text-white font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl px-5 py-3  sm:px-10 sm:py-4 md:px-8 md:py-3  lg:px-15 lg:py-3 2xl:px-12 2xl:py-5  rounded-full'>
                Partner with Us
            </motion.button>
                </div>  
        </div>
        


    {/* partner ends here */}

    {/* our values */}
    <section className="values mx-auto py-10 bg-[#f7f7f7] overflow-hidden py-12 px-10 sm:py-30 sm:px-20 lg:px-0 lg:py-10 2xl:py-40 grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
        <div className=' pl-20 2xl:pl-50 lg:gap-5  text text-center lg:text-left flex flex-col items-center justify-center lg:items-start '>
           <motion.h1
                initial={{ y: 100, opacity: 0 }}s

                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0,
                    duration: 0.7,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: false, amount: 0.1 }}
            className='w-full font-bold sm:font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                Values that drive us forward 
            </motion.h1>
            <motion.h4
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0,
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false, amount: 0.1 }}
            className='text-[12px] py-4  pt-3 sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>
               We focus on delivering innovative, efficient, and sustainable automation solutions tailored to your business needs.
            </motion.h4>
            <motion.button
            initial={{ y: 40, opacity: 0 }} // Start position (off-screen bottom)
            
            whileHover={{
                scale: 0.95,
                cursor:'pointer',
                backgroundColor: "transparent",
               border: "1px solid rgb(0, 0, 0)",
               color:"black",
            }}
            
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                  delay: 0.1,
                  duration: 0.7,
                  ease: "easeInOut",
                },
            }}
            viewport={{ once: false, amount: 0.1 }}
            className='bg-black text-white font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl px-5 py-3  sm:px-10 sm:py-4 md:px-8 md:py-3  lg:px-20 lg:py-3 2xl:px-22 2xl:py-5  rounded-full'>
              Know More
            </motion.button>
        </div>

        <motion.div 

           className=''>
                <div className='flex lg:px-10 2xl:pr-50 justify-center items-center  w-full'>
                    <div className='grid grid-cols-4 lg:grid-cols-2  py-10 gap-25 sm:gap-40 md:50 lg:gap-10 xl:25 '>
                        <motion.div
                        initial={{y:200, opacity:0}}
                        whileInView={{
                          y: 0,
                          opacity: 1,
                          transition: {
                              delay: 0,
                              duration: 0.8,
                              ease: "easeInOut",
                            },
                        }}
                        viewport={{ once: false, amount: 0.1 }}
                        className='flex gap-5 pt-10 flex-col justify-center items-center font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl '>
                            <div
                            className=''
                            >
                             <motion.video
                                    initial={{ scale: 1.3}}
                                    animate={{
                                      // rotate: [0, 360], // Continuous rotation
                                    }}
                                    transition={{
                                      duration: 3,
                                      
                                      ease: "anticipate",
                                    }}
                                    whileHover={{
                                      
                                      transition: { duration: 0.1 },
                                      cursor: "grab",
                                    }}
                                    drag
                                    whileDrag={{
                                      cursor: "grabbing",
                                    }}
                                    dragConstraints={{
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                    }}
                                    className="min-w-18 sm:min-w-20 md:min-w-20 w-30"
                                    src="/competence1.webm" 
                                    autoPlay
                                    loop
                                    muted
                                  />
                            </div>
                            <div>
                              <h1 className='font-semibold lg:font-bold text-lg sm:text-xl md:text-lg lg:text-xl text-center '>
                                Competence </h1>
                            </div>
                          </motion.div>
                        <motion.div 
                        initial={{y:200, opacity:0}}
                        whileInView={{
                          y: 0,
                          opacity: 1,
                          transition: {
                              delay: 0,
                              duration: 0.8,
                              ease: "easeInOut",
                            },
                        }}
                        viewport={{ once: false, amount: 0.1 }}
                        className='flex gap-5 flex-col justify-center items-center font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl '>
                            <div
                            className=''
                            >
                               <motion.img
                              initial={{ scale:1 }}
                              animate={{
                                // rotate: [0, 360],

                                transition:{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease:'anticipate'
                                }
                              }}
  
                              whileHover={{
                                scale: 1.1,
                                transition:{
                                  duration:0.1
                                },
                                cursor:'grab'
                              }}
  
                              drag
                              whileDrag={{
                                cursor:'grabbing'
                              }}
                              dragConstraints={{
                                top:0,
                                left:0,
                                right:0,
                                bottom:0             
                              }}
                              className='min-w-18 sm:min-w-20 md:min-w-20 w-30' src="/stakeHolder.png" alt="" />
                    
                             
                            </div>
                            <div>
                              <h1 className='font-semibold lg:font-bold text-lg sm:text-xl md:text-lg lg:text-xl text-center '>
                                Stakeholders Trust</h1>
                            </div>
                          </motion.div>
                          <motion.div
                        initial={{y:100, opacity:0}}
                        whileInView={{
                          y: 0,
                          opacity: 1,
                          transition: {
                              delay: 0,
                              duration: 0.8,
                              ease: "easeInOut",
                            },
                        }}
                        viewport={{ once: false, amount: 0.1 }}
                        className='flex gap-5  flex-col justify-center items-center font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl '>
                            <div
                            className=''
                            >
                               <motion.video
                                    initial={{ scale: 1.3}}
                                    animate={{
                                      // rotate: [0, 360], // Continuous rotation
                                    }}
                                    transition={{
                                      duration: 3,
                                      
                                      ease: "anticipate",
                                    }}
                                    whileHover={{
                                      
                                      transition: { duration: 0.1 },
                                      cursor: "grab",
                                    }}
                                    drag
                                    whileDrag={{
                                      cursor: "grabbing",
                                    }}
                                    dragConstraints={{
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                    }}
                                    className="min-w-10 sm:min-w-10 md:min-w-15 w-20  "
                                    src="/deligence.webm" 
                                    autoPlay
                                    loop
                                    muted
                                  />
                            </div>
                            <div>
                              <h1 className='font-semibold  lg:font-bold text-lg sm:text-xl md:text-lg lg:text-xl text-center '>
                                Diligence</h1>
                            </div>
                          </motion.div>
                        <motion.div
                        initial={{y:100, opacity:0}}
                        whileInView={{
                          y: 0,
                          opacity: 1,
                          transition: {
                              delay: 0,
                              duration: 0.8,
                              ease: "easeInOut",
                            },
                        }}
                        className='flex gap-5 flex-col justify-center items-center font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl '>
                            <div
                            className=''
                            >
                                 <motion.video
                                    initial={{ scale: 1 }}
                                    animate={{
                                      // rotate: [0, 360], // Continuous rotation
                                    }}
                                    transition={{
                                      duration: 3,
                                      repeat: Infinity,
                                      ease: "anticipate",
                                    }}
                                    whileHover={{
                                      scale: 1.1,
                                      transition: { duration: 0.1 },
                                      cursor: "grab",
                                    }}
                                    drag
                                    whileDrag={{
                                      cursor: "grabbing",
                                    }}
                                    dragConstraints={{
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                    }}
                                    className="min-w-18 sm:min-w-20 md:min-w-20 w-30"
                                    src="/clock.webm" // Replace with your actual video source
                                    autoPlay
                                    loop
                                    muted
                                  />
                            </div>
                            <div>
                              <h1 className='font-semibold lg:font-bold text-lg sm:text-xl md:text-xl lg:text-xl text-center '>
                              Timely Service</h1>
                            </div>
                          </motion.div>
                    </div>
                </div>

                

       </motion.div>
            
    </section>
    {/* values ends here */}
    </motion.div>
              <motion.footer
                className=" w-full bottom-0">
                  <Footer/>
              </motion.footer>
    </>
  )
}


export default Home
