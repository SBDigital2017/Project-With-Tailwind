import React , { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SplitText from '../components/SplitText'
import { CpuArchitecture } from "@/components/ui/cpu-architecture"
import Footer from '../components/Footer'




function ITServices() {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 0.8; // Slow motion (0.5x)
        }
      }, []);
  return (
    <div className=''>
      <section className='hero w-full overflow-hidden max-w-8xl mx-auto h-screen bg-gradient-to-b from-blue-700 to-stone-950'>
            <div className="container grid lg:grid-cols-2 items-center justify-center gap-5  mx-auto max-w-8xl  w-full h-full">
                <div className="w-full h-full flex flex-col text-white bg-transparent  items-center lg:items-start justify-center  lg:px-20 2xl:px-10 ">
                    <motion.h1 
                    initial={{
                        y: -250,
                        opacity: 0
                    }}
    
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
    
                    transition={{
                        delay: 0.4,
                        duration: 1.5,
                        ease:'easeInOut'
                    }}
    
                    className='text-sm md:text-lg lg:text-xl pb-3 font-normal lg:pb-5 '>
                        Information Technology
                    </motion.h1>
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

                        className='leading-10 text-center lg:text-left sm:leading-15 lg:leading-18 2xl:leading-23 text-4xl 2xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-bold'
                        >
                    YOUR INFORMATION MEETS OUR TECHNOLOGY
                    
                </motion.h1>
                
                <motion.h1 
                    initial={{
                        y: 250,
                        opacity: 0
                    }}
    
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
    
                    transition={{
                        delay: 0.4,
                        duration: 1.5,
                        ease:'easeInOut'
                    }}
    
                    className='text-sm md:text-lg lg:text-xl pt-3 font-normal lg:pb-5 lg:pt-5'>
                        Solutions for better future
                    </motion.h1>

                </div>
                <div className=' z-1 lg:pt-15 overflow-hidden w-full flex items-center justify-center transition-all duration-700 ease-in-out   '>
                    <motion.video
                    initial={{
                        x: 800,
                        opacity: 0,
                        scale: 1.2
                    }}
    
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
    
                    transition={{
                        delay: 0.1,
                        duration: 1,
                        ease:'easeIn'
                    }}
                    src="globeIT.webm" autoPlay ref={videoRef} loop muted className="w-full hover:scale-110 transition-all duration-700 ease-in-out"></motion.video>
                </div>
            </div>
      </section>
      
      {/* hero section ends here */}
    {/*  */}
    <div  className="cpu p-4 max-w-8xl mx-auto  bg-gradient-to-b from-stone-950 to-stone-900  ">
        {/* <div className='hidden lg:block relative top-82.5 left-138 h-27 opacity-50 w-40 rounded-md shadow-[0_0_100px_rgba(0,0,255,0.7)]  '></div> */}

        <div className='px-20 lg:px-30 2xl:px-80 2xl:py-20 lg:py-5'>
            <CpuArchitecture className="lg:px-20"/>

        </div>
        <div className='blog flex flex-col items-center justify-center py-5 px-10 lg:py-20 lg:px-0 2xl:px-50 lg:pt-20 2xl:pt-0  '>
            <h1 className='font-normal text-2xl sm:text-3xl md:text-5xl md:px-20 lg:px-0   lg:text-6xl 2xl:text-7xl text-center'>
            <SplitText text=" Building powerful and user friendly mobile & desktop applications with us." className="text-white " />
            </h1>
        </div> 
    </div>

    <section className="max-w-8xl mx-auto " >
                    <div className="content flex flex-col justify-start p-5 md:px-10 lg:px-20 2xl:px-30">
                            <div className="head">
                                <h1 className='py-2 md:py-5 font-semibold text-gray-600 text-[12px] sm:text-md md:text-lg lg:pt-5 lg:py-0 text-center lg:text-left lg:text-2xl'>
                                    WEBSITE DEVELOPMENT</h1>
                            </div>

                            <div className=" grid grid-cols-1 lg:grid-cols-[1fr_1fr] ">
                                <div className=' gap-3 lg:gap-5 text-center lg:text-left flex flex-col items-center justify-center lg:items-start '>
                                    <motion.h1
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: 0,
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        },
                                        }}
                                        viewport={{ once: false, amount: 0.1 }}
                                    className='w-full lg:pt-5 font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                                        Virtual 
                                        Evolution Through
                                        Our Websites
                                    </motion.h1>
                                    <motion.h4
                                    initial={{ y: 100, opacity: 0 }}
                    
                                    whileInView={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                        delay: 0,
                                        duration: 0.5,
                                        ease: "easeInOut",
                                        },
                                    }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    className=' py-2 md:py-4 lg:pr-10 text-justify  md:pt-3 text-[12px] sm:text-sm md:text-lg md:px-20 lg:px-0 lg:text-lg 2xl:text-xl'>
                                        We design and develop responsive, SEO-friendly websites tailored to your brand. <br />
                                        With cutting-edge frameworks and modern UI/UX design, we create engaging, secure & fast-loading websites that makes you unforgettable.
                                        </motion.h4>
                                    </div>

                                    <div className='flex flex-col py-5 items-center justify-center'>
                                    <motion.img
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                        delay: 0,
                                        duration: 0.5,
                                        ease: "easeInOut",
                                        },
                                    }}
                                    className='w-full h-50 md:h-100 2xl:h-120 object-contain bg-black rounded-xl'
                                    src="/.png" alt="platform" />
                                </div>    
                        </div>

                    </div>
                    

                    <div className="content flex flex-col bg-[#f7f7f7] justify-start p-5 md:p-10 lg:p-20 2xl:p-30">
                                        <div className="head">
                                            <h1 className='py-2 md:py-5 font-semibold text-gray-600 text-[12px] sm:text-md md:text-lg lg:pt-5 lg:py-0 text-center lg:text-left lg:text-2xl'>
                                            IT SOLUTIONS</h1>
                                        </div>
                                       <div className=" grid grid-cols-1 lg:gap-10 2xl:gap-20 lg:grid-cols-[1fr_1fr] ">
                                                  <div className='flex flex-col py-5 items-center justify-center'>
                                                       <motion.img
                                                       initial={{ y: 100, opacity: 0 }}
                                                       whileInView={{
                                                         y: 0,
                                                         opacity: 1,
                                                         transition: {
                                                           delay: 0,
                                                           duration: 0.5,
                                                           ease: "easeInOut",
                                                         },
                                                       }}
                                                       className='w-full h-50 md:h-100 2xl:h-120 object-contain bg-black rounded-xl'
                                                       src="/.png" alt="platform" />
                                                       </div>  
                                                  <div className=' gap-3 lg:gap-5 text-center lg:text-left flex flex-col items-center justify-center lg:items-start '>
                                                     <motion.h1
                                                           initial={{ y: 100, opacity: 0 }}
                                                           whileInView={{
                                                           y: 0,
                                                           opacity: 1,
                                                           transition: {
                                                               delay: 0,
                                                               duration: 0.5,
                                                               ease: "easeInOut",
                                                           },
                                                           }}
                                                           viewport={{ once: false, amount: 0.1 }}
                                                       className='w-full lg:pt-5 font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                                                         Creating Your Digital Identity
                                                       </motion.h1>
                    
                    
                                                       <motion.h4
                                                          initial={{ y: 100, opacity: 0 }}
                                          
                                                          whileInView={{
                                                            y: 0,
                                                            opacity: 1,
                                                            transition: {
                                                              delay: 0,
                                                              duration: 0.5,
                                                              ease: "easeInOut",
                                                            },
                                                          }}
                                                          viewport={{ once: false, amount: 0.1 }}
                                                          className=' py-2 md:py-4 lg:pr-10  md:pt-3 text-[12px] text-justify sm:text-sm md:text-lg md:px-20 lg:px-0 lg:text-lg 2xl:text-xl'>
                                                            We build feature-rich, high-performance mobile and desktop applications tailored to meet your business goals and user needs. <br />
                                                            We create engaging mobile experience through our iOS & Android Applications.Enterprise-grade application with cloud integration, we build robust windows, macOS & Linux application for perfect user interaction
                                                             </motion.h4>
                                                     </div>         
                                           </div>
                                      </div>

                                      <div className="content flex flex-col justify-start p-5 md:px-10 lg:px-20 2xl:px-30">
                        <div className="head">
                            <h1 className='py-2 md:py-5 font-semibold text-gray-600 text-[12px] sm:text-md md:text-lg lg:pt-5 lg:py-0 text-center lg:text-left lg:text-2xl'>
                                APPLICATION DEVELOPMENT</h1>
                        </div>

                        <div className=" grid grid-cols-1 lg:grid-cols-[1fr_1fr] ">
                            <div className=' gap-3 lg:gap-5 text-center lg:text-left flex flex-col items-center justify-center lg:items-start '>
                                <motion.h1
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0,
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    },
                                    }}
                                    viewport={{ once: false, amount: 0.1 }}
                                className='w-full lg:pt-5 lg:pr-5 font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                                    Building Next-Gen Apps to connect the World
                                </motion.h1>
                                <motion.h4
                                initial={{ y: 100, opacity: 0 }}
                
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                    delay: 0,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    },
                                }}
                                viewport={{ once: false, amount: 0.1 }}
                                className=' py-2 md:py-4 lg:pr-10 text-justify  md:pt-3 text-[12px] sm:text-sm md:text-lg md:px-20 lg:px-0 lg:text-lg 2xl:text-xl'>
                                   We build feature-rich, high-performance mobile and desktop applications tailored to meet your business goals and user needs. <br />
                                   Enterprise-grade application with cloud integration, we build robust windows, macOS & Linux application for perfect user interaction</motion.h4>
                                </div>

                                <div className='flex flex-col py-5 items-center justify-center'>
                                <motion.img
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                    delay: 0,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    },
                                }}
                                className='w-full h-50 md:h-100 2xl:h-120 object-contain bg-black rounded-xl'
                                src="/.png" alt="platform" />
                            </div>    
                        </div>

                    </div>
    </section>
    {/* It services section 2 ends here */}

    {/* video cloud video cloud computing video section 3 */}
    <section className='max-w-8xl mx-auto xl:py-10 '>
            <div className="ccvideo">
                <video src="itservicesdraft.webm" autoPlay loop muted className="w-full"></video>
            </div>
            <div className='blog flex flex-col items-center justify-center py-5 lg:px-30 2xl:px-40 lg:py-10 '>
                <h1 className='font-semibold text-2xl sm:text-3xl md:text-5xl md:px-20 lg:px-0 lg:text-7xl text-center'>
                <SplitText text="Embrace the Cloud with Confidence" className="text-black " />
            </h1>
        </div> 

        <div className="content flex flex-col justify-start p-5 md:p-10 lg:px-20 2xl:p-30">
                <div className=" grid grid-cols-1 lg:gap-10 2xl:gap-20 lg:grid-cols-[1fr_1fr] ">
                            <div className='flex flex-col py-5 items-center justify-center'>
                                <motion.img
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                    delay: 0,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    },
                                }}
                                className='w-full h-50 md:h-100 2xl:h-120 object-contain bg-black rounded-xl'
                                src="/.png" alt="platform" />
                                </div>  
                            <div className=' gap-3 lg:gap-5 text-center lg:text-left flex flex-col items-center justify-center lg:items-start '>
                                <motion.h1
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0,
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    },
                                    }}
                                    viewport={{ once: false, amount: 0.1 }}
                                className='w-full lg:pt-5 font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                                    Cloud Computing
                                </motion.h1>


                                <motion.h4
                                    initial={{ y: 100, opacity: 0 }}
                    
                                    whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0,
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    },
                                    }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    className=' py-2 md:py-4 lg:pr-10  md:pt-3 text-[12px] text-justify sm:text-sm md:text-lg md:px-20 lg:px-0 lg:text-lg 2xl:text-xl'>
                                    Leverage the power of the cloud to enhance security, scalability, and performance. Our cloud solutions ensure businesses stay agile, secure, and competitive in a digital-first world. <br />
                                    Empowering businesses with scalable, secure and agile cloud solutions. Our cloud solutions provide businesses with enhanced flexibility, robust security, and scalable infrastructure. Embrace the cloud with confidence and let us guide your transformation using Cloud Infrastructure.
                                    </motion.h4>
                                </div>         
                            </div>
                        </div>
                        
        
    </section>
    <Footer/>
    </div>
    
  )
}

export default ITServices
