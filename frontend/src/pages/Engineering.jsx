import React from 'react'
import {motion} from 'framer-motion'
import SplitText from '../components/SplitText'

function Engineering() {
  return (
    <>
        <div className=''>
{/* hero section for engineering */}
          <section className="engg-hero max-w-8xl mx-auto">
                <div className="w-full pt-12">
                                    <video  src="itservicesdraft.webm" autoPlay loop muted></video>
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
              
                              className='font-bold py-5 px-5 sm:px-0 sm:py-3 text-[0px]   md:text-2xl text-center sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl sm:text-white sm:text-left '
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
                    
                                    className='px-20 text-[0px] font-normal text-center sm:text-white sm:px-0 md:pr-30 font-bold  md:text-lg lg:text-xl 2xl:text-2xl sm:text-left 2xl:py-20 '>Fuel Your Future with Innovation. At the intersection of challenges and passion, we redefine industries with advanced technologies. <br /><br />
                                    Partner with us to transform your business into a power house to bring best products & services.
                                </motion.h4>
                  </div>
          


          </section>
          {/* hero section ends here */}


          {/* Engineering Excell section */}
          <section className="EnggExcell max-w-8xl mx-auto h-screen pt-10 px-5 md:pt-20 2xl:pt-30 md:px-10 2xl:px-20">
                <div className=" 2xl:px-30 heading-engg  w-full flex-col items-center justify-center text-center ">
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
                      className='w-full md:py-2 font-semibold lg:font-bold sm:font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl '>
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
                         className='text-[12px] py-2 px-5 md:py-4  lg:px-50 2xl:px-0 sm:text-sm md:text-lg md:px-40  2xl:text-xl'>
                             From concepts to designs and designs to product optimization, our engineering team brings your ideas to life.
                         </motion.h4>
                </div>

                <div className="container engg stack"></div>

                <div className="content flex flex-col justify-start p-5 md:p-10 lg:p-20 2xl:p-30">
                    <div className="head">
                        <h1 className='py-2 md:py-5 font-semibold text-gray-600 text-[12px] sm:text-md md:text-lg lg:pt-5 lg:py-0 text-center lg:text-left lg:text-2xl'>
                          CONCEPT DESIGN</h1>
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
                                   className=' py-2 md:py-4 lg:pr-10  md:pt-3 text-[12px] sm:text-sm md:text-lg md:px-20 lg:px-0 lg:text-lg 2xl:text-xl'>
                                      We help businesses transform ideas into feasible designs by leveraging cutting-edge technologies, industry insights, and creative problem-solving.                                    </motion.h4>
                                  
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
                                    {/* heading in middle creating seamless */}
                  <div className='blog flex flex-col items-center justify-center'>
                                   <h1 className='font-semibold lg:font-bold text-3xl sm:text-3xl md:text-5xl md:px-20 lg:px-0 lg:text-7xl text-center'>
                                   
                                    <SplitText text=" Creating seamless & integrated systems" className="text-black" />
                                    </h1>

                  </div>    


                  {/* This is second stack of engg section section 3 */}

                  
                  <div className="content flex flex-col justify-start p-5 md:p-10 lg:p-20 2xl:p-30">
                    <div className="head">
                        <h1 className='py-2 md:py-5 font-semibold text-gray-600 text-[12px] sm:text-md md:text-lg lg:pt-5 lg:py-0 text-center lg:text-left lg:text-2xl'>
                          SYSTEM ENGINEERING</h1>
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
                                     Providing 
                                     enhanced performance
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
                                        We offer end to end system integration, enhancing functionality, safety, and efficiency. <br />
                                        Our system engineering process optimizes performance, minimizes risks, and enhances system reliability through comprehensive analysis, modelling, and simulation.    <br />
                                        Our decade of experience in diverse system integration ensures that every component within a product works seamlessly together.                     
                                  </motion.h4>
                                  
                                 </div>         
                       </div>
                  </div>
                  {/* This is third stack of engg section section 3 */}
                  <div className="content bg-[#F7F7F7] rounded-2xl flex flex-col justify-start p-5 md:p-10 lg:p-20 2xl:p-30">
                    <div className="head">
                        <h1 className='py-2 md:py-5 font-semibold text-gray-600 text-[12px] sm:text-md md:text-lg lg:pt-5 lg:py-0 text-center lg:text-left lg:text-2xl'>
                          PRODUCT ENGINEERING</h1>
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
                                     Peak performance beyond Sales
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
                                   className=' py-2 md:py-4 lg:pr-10  md:pt-3 text-[12px] sm:text-sm md:text-lg md:px-20 lg:px-0 lg:text-lg 2xl:text-xl'>
                                     We ensure long-term product performance with post-launch support, upgrades and predictive maintenance using IoT & AI analytics. <br />
                                     We focus on reliability & customer satisfaction through Reverse Engineering & design improvements for continued excellence.

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

                  {/* This is fourth stack of engg section section 4 */}
                  <div className='blog pt-5 lg:py-10 flex flex-col items-center justify-center'>
                                   <h1 className='font-semibold lg:font-bold text-3xl sm:text-3xl md:text-5xl md:px-20 lg:px-0 lg:text-7xl text-center'>
                                   
                                    <SplitText text="Delivering high-quality, efficient cost  & effective products" className="text-black" />
                                    </h1>

                  </div>  

          </section>


          {/* end of this page */}
        </div>
    
    </>
  )
}

export default Engineering
