import React, { useEffect, useState } from 'react'
import { AnimatePresence, useScroll } from "motion/react"
import * as motion from "motion/react-client"
import Navbar from '../components/Navbar'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Footer from '../components/Footer'
import { useRef } from "react";
import VariableProximity from '../components/VariableProximity'
import ScrollReveal from '../components/RevealText'
import ShinyTextBlue from '../components/ShinyTextBlue'


function Home() {

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
     className='container  text-center max-w-8xl mx-auto my-15 md: px-5 sm:px-10 xl:px-20 ' id='design excellence DE'>  
        <motion.div
 
        className="Heading">
            <h1
            className='w-full font-bold sm:font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                Start with a Design Excellence
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
        
        <div className='mb-8'>
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
            className='bg-black text-white font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl px-5 py-3  sm:px-10 sm:py-4 md:px-8 md:py-3  lg:px-10 lg:py-4 2xl:px-12 2xl:py-5  rounded-full'>
                Become a Partner
            </motion.button>
                </div>
        
        <div

        className="my-0 md:my-10 md:mx-25 grid md:grid-cols-[1fr_1.5fr] md:border md:border-gray-100 rounded-xl" id='Excellence'>
            <motion.div
                    initial={{ y: 50, opacity: 0 }} // Start position (off-screen bottom)

                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.1,
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                    viewport={{ once: false, amount: 0.1 }}
            className=" py-2 overflow-auto md:py-0 flex flex-row md:flex-col align-center justify-center">
                <div

                 onMouseEnter={() => setSelectedTab(1)} className=" text-[12px] text-white bg-black sm:text-black  py-2 px-5 rounded-sm sm:bg-[#f7f7f7] md:border border-gray-300 m-1 md:rounded-xl  md:py-3 2xl:py-5 font-semibold || 2xl:text-xl lg:text-lg lg:font-bold hover:bg-black hover:text-white cursor-pointer ">
                    One-Stop Solution
                </div>
                
                <div

                onMouseEnter={() => setSelectedTab(2)} className="text-[12px] text-white bg-black sm:text-black py-2 px-5 rounded-sm text-md sm:bg-[#f7f7f7] md:border border-gray-300 m-1 md:rounded-xl  md:py-3 2xl:py-5  font-semibold || 2xl:text-xl lg:text-lg lg:font-bold  hover:bg-black hover:text-white cursor-pointer ">
                    Assured Quality
                </div>
                <div 

                onMouseEnter={() => setSelectedTab(3)} className="text-[12px] text-white bg-black sm:text-black py-2 px-5 rounded-sm text-md sm:bg-[#f7f7f7] md:border border-gray-300 m-1 md:rounded-xl  md:py-3 2xl:py-5  font-semibold || 2xl:text-xl lg:text-lg lg:font-bold hover:bg-black hover:text-white cursor-pointer ">
                    Bespoke Process
                </div>    
                <div 

                onMouseEnter={() => setSelectedTab(4)} className="text-[12px] text-white bg-black sm:text-black py-2 px-5 rounded-sm text-md sm:bg-[#f7f7f7] md:border border-gray-300 m-1 md:rounded-xl  md:py-3 2xl:py-5  font-semibold || 2xl:text-xl lg:text-lg lg:font-bold hover:bg-black hover:text-white cursor-pointer ">
                    Time Line
                </div>    
                <div 

                onMouseEnter  ={() => setSelectedTab(5)} className="text-[12px] text-white bg-black sm:text-black py-2 px-5 rounded-sm text-md sm:bg-[#f7f7f7] md:border border-gray-300 m-1 md:rounded-xl  md:py-3 2xl:py-5  font-semibold || lg:text-lg 2xl:text-xl lg:font-bold hover:bg-black hover:text-white cursor-pointer ">
                    Accountability
                </div>    

              
            
            </motion.div>
            <div className="border border-gray-300 m-1 rounded-xl ">
                <div className="text pt-5  flex flex-col justify-center items-center">
                {/* <svg width="70" height="60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_86)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M110 0C115.523 0 120 4.47715 120 10V27.5736C120 36.4826 130.771 40.9443 137.071 34.6446L149.497 22.2182C153.403 18.313 159.734 18.313 163.64 22.2182L177.782 36.3604C181.687 40.2656 181.687 46.5973 177.782 50.5025L165.355 62.9289C159.056 69.2286 163.517 80 172.426 80H190C195.523 80 200 84.4771 200 90V110C200 115.523 195.523 120 190 120H172.426C163.517 120 159.056 130.771 165.355 137.071L177.782 149.497C181.687 153.403 181.687 159.734 177.782 163.64L163.64 177.782C159.734 181.687 153.403 181.687 149.497 177.782L137.071 165.355C130.771 159.056 120 163.517 120 172.426V190C120 195.523 115.523 200 110 200H90C84.4771 200 80 195.523 80 190V172.426C80 163.517 69.2286 159.056 62.9289 165.355L50.5025 177.782C46.5973 181.687 40.2656 181.687 36.3604 177.782L22.2183 163.64C18.313 159.734 18.313 153.403 22.2183 149.497L34.6447 137.071C40.9443 130.771 36.4827 120 27.5736 120H10C4.47716 120 0 115.523 0 110V90C0 84.4771 4.47715 80 10 80H27.5736C36.4826 80 40.9443 69.2286 34.6447 62.9289L22.2183 50.5025C18.313 46.5972 18.313 40.2656 22.2183 36.3604L36.3604 22.2182C40.2656 18.313 46.5973 18.313 50.5025 22.2182L62.9289 34.6446C69.2286 40.9443 80 36.4826 80 27.5736V10C80 4.47715 84.4771 0 90 0H110ZM100 150C127.614 150 150 127.614 150 100C150 72.3858 127.614 50 100 50C72.3858 50 50 72.3858 50 100C50 127.614 72.3858 150 100 150Z" fill="url(#paint0_linear_104_86)"/> </g> <defs> <linearGradient id="paint0_linear_104_86" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#3D9EF9"/> <stop offset="1" stop-color="#916CF8"/> </linearGradient> <clipPath id="clip0_104_86"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg> */}
                    
                    
                    {DesignEngg.map((item)=>{
                      return(
                        <div className='flex flex-col items-center justify-center'>

                        <motion.img
                              initial={{ scale:0}} // Start position (off-screen bottom)
                          
                            
                              whileInView={{
                                scale: 1,
                                transition: {
                                  delay: 0.1,
                                  duration: 0.8,
                                  ease: "easeInOut",
                                },
                              }}
                      
                            animate={{
                              y:[0, -15, 0],
                              transition: {
                                duration: 8,
                                repeat: Infinity,
                                repeatType: "easeInOut",
                              },
                            }}
                            className='w-80 lg:w-115 '  src={item.index === selectedTab ? item.img : ""} alt="" />
                              
                              <motion.h1
                            className='text-sm lg:text-md 2xl:text-lg font-semibold px-10 '>
                              {item.index === selectedTab && item.desc }
                          </motion.h1>
                              
                              </div>
                              
                              )
                            })}
                          

                      
                </div>
            </div>

        </div>
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
                  duration: 0.4,
                  ease: "easeInOut",
                },
            }}
            viewport={{ once: false, amount: 0.1 }}
            className='bg-black text-white font-semibold text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl px-5 py-3  sm:px-10 sm:py-4 md:px-8 md:py-3  lg:px-15 lg:py-3 2xl:px-12 2xl:py-5  rounded-full'>
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
                    className='object-contain h-full' src="/v6.png" alt="Engineering Model" />
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
                <div className="  w-full">
                    <motion.video
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
                    className="h-full"
                    src="/clockani.webm" 
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
                <div className=" w-full p-5">
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
                    className='object-contain h-full' src="/v6.png" alt="Engineering Model" />
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
                <div className=" w-full p-5 ">
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
                    className='object-contain h-full' src="/v6.png" alt="Engineering Model" />
                </div>
            </div>
            {/* PLM Service Ends */}


            </motion.div>
    </motion.section>
    {/* Section 3 ends here */}

    <section className="4platform overflow-hidden py-12 px-10 sm:py-30 sm:px-20 lg:px-0 lg:pt-25 2xl:pb-25 lg:pb-18 grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
           <div className='lg:pl-20 2xl:pl-50 lg:gap-5  text text-center lg:text-left flex flex-col items-center justify-center lg:items-start '>
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
            className='w-full font-bold sm:font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
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

           <motion.div 
           animate={{
            scale:1.4
           }}
           className='flex justify-center lg:justify-start mt-20 lg:mt-0 '>
                <motion.img
                initial={{ scale: 0, opacity: 0 }} // Start position (off-screen bottom)

                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: false, amount: 0.1 }}
                className="w-95 sm:w-120 md:w-150 lg:w-160 2xl:w-200 " src="/enterprise.png" alt=""  />
           </motion.div>
                            
    </section>
    {/* Scetion 4 ends here */}

    {/* partner */}

        <div className='py-20 px-10 sm:py-22 sm:px-20 lg:px-10 lg:py-10 2xl:py-40 flex flex-col items-center justify-center'
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
