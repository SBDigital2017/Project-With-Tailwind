import React from 'react'
import {motion} from 'framer-motion'

function Engineering() {
  return (
    <>
        <div className=''>
{/* hero section for engineering */}
          <section className="engg-hero max-w-8xl mx-auto">
                <div className="w-full">
                                    <img
                                    className='overflow-hidden  w-full pt-10' src="/draftlogopress1.png" alt="Engineering Model" />
                  </div>

                  {/* text herosection */}
                  <div className="text-hero absolute z-1 top:10 sm:top-20 sm:left-70 md:top-30 md:left-90 lg:top-40 2xl:top-70 lg:left-120 2xl:left-180 2xl:top-50">
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
              
                              className='font-bold py-5 px-5 sm:px-0 sm:py-3   text-2xl text-center sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl sm:text-white sm:text-left '
                              >
                                  Innovative Solutions for Your Every need
                              </motion.h1>

                              <motion.h4
                                    initial={{
                                        opacity: 0,
                                        y: -400
                                    }}
                    
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                    
                                    transition={{
                                        delay: 0,
                                        duration: 0.8,
                                        ease:'easeInOut'
                                    }}
                    
                                    className='px-20 font-normal text-center sm:text-white sm:px-0 md:pr-30 font-bold text-sm sm:text-md md:text-lg lg:text-xl 2xl:text-2xl sm:text-left 2xl:py-20 '>Fuel Your Future with Innovation. At the intersection of challenges and passion, we redefine industries with advanced technologies. <br /><br />
                                    Partner with us to transform your business into a power house to bring best products & services.
                                </motion.h4>
                  </div>
          


          </section>
          {/* hero section ends here */}


          {/* Engineering Excell section */}
          <section className="EnggExcell max-w-8xl mx-auto h-screen py-20">
                <div className=" px-30 heading-engg  w-full flex-col items-center justify-center text-center ">
                    <motion.h1
                    initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)
                    
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
                      className='w-full py-2 font-bold sm:font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                       Engineering Excellence tailored for a smarter tomorrow
                    </motion.h1>

                    <motion.h4
                         initial={{ y: 100, opacity: 0 }} // Start position (off-screen bottom)
                    
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
                         className='text-md py-4 px-40 pt-3 sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>
                             From concepts to designs and designs to product optimization, our engineering team brings your ideas to life.
                         </motion.h4>
                </div>

                <div className="content flex flex-col items-center justify-center lg:pt-20">
                    <div className="head">
                        <h1 className='font-bold lg:text-2xl'>Concept Design</h1>
                    </div>
                   <div className="py-12 px-10 sm:py-30 sm:px-20 lg:px-0 lg:py-0 2xl:pb-25 lg:pb-18 grid grid-cols-1 lg:grid-cols-[1fr_1fr] ">
                              <div className='lg:pl-20 2xl:pl-50 lg:gap-5  text text-center lg:text-left flex flex-col items-center justify-center lg:items-start '>
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
                                   className='w-full pt-5 font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                                      Innovative Ideas, Transformed into Reality
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
                                   className='text-[12px] py-4 lg:pr-10  pt-3 sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>
                                      We help businesses transform ideas into feasible designs by leveraging cutting-edge technologies, industry insights, and creative problem-solving.                                    </motion.h4>
                                  
                                 </div>
                   
                                 <div className='flex flex-col items-center justify-center lg:p-10 lg:pl-0 2xl:pl-0 2xl:p-30'>
                                   <img
                                   className='w-full h-100 object-contain bg-black rounded-xl'
                                   src="/.png" alt="platform" />
                   
                                   </div>    
                       </div>
                  </div>

                  <div className='blog flex flex-col items-center justify-center'>
                                   <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center'>Creating seamless & integrated systems</h1>
                  </div>

                  <div className="content flex flex-col items-center justify-center lg:pt-20">
                    <div className="head">
                        <h1 className='font-bold lg:text-2xl'>Concept Design</h1>
                    </div>
                   <div className="py-12 px-10 sm:py-30 sm:px-20 lg:px-0 lg:py-0 2xl:pb-25 lg:pb-18 grid grid-cols-1 lg:grid-cols-[1fr_1fr] ">
                              <div className='lg:pl-20 2xl:pl-50 lg:gap-5  text text-center lg:text-left flex flex-col items-center justify-center lg:items-start '>
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
                                   className='w-full pt-5 font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
                                      Innovative Ideas, Transformed into Reality
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
                                   className='text-[12px] py-4 lg:pr-10  pt-3 sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>
                                      We help businesses transform ideas into feasible designs by leveraging cutting-edge technologies, industry insights, and creative problem-solving.                                    </motion.h4>
                                  
                                 </div>
                   
                                 <div className='flex flex-col items-center justify-center lg:p-10 lg:pl-0 2xl:pl-0 2xl:p-30'>
                                   <img
                                   className='w-full h-100 object-contain bg-black rounded-xl'
                                   src="/.png" alt="platform" />
                   
                                   </div>    
                       </div>
                  </div>
                                   

                  
          </section>


          {/* end of this page */}
        </div>
    
    </>
  )
}

export default Engineering
