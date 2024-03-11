"use client";
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button} from 'flowbite-react';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import { Pagination , Navigation} from 'swiper/modules';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Slider from 'react-slick';
const images = ["/jee adv1.jpg", "/jee adv2.jpg", "/jee adv3.jpg"];
const links = [

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Organic%20Chemistry.",

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Physical%20Chemistry.",

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20inorganic%20Chemistry."
];
const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
   
    <div>
       <div>
        
           
    <section className="lg:pt-6 lg:pb-24 pb-10 items-center flex-col flex md:px-8 md:flex-row justify-left lg:bg-none bg-cover bg-center lg:mr-14 ">
        
    <div className="space-x-3xl flex-1 sm:text-left lg:text-left">
       <h1 className="text-slate-800 text-justify font-extrabold lg:text-6xl text-3xl mb-6 tracking-tighter">
            Premium chemistry coaching <br/>for JEE (Main & Advanced), <br />NEET & Boards.
        </h1>
        <p className='text-6xl font-extrabold text-chemisphere tracking-tighter'>ADMISSIONS OPEN</p>
        {/* <p className="text-gray-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 md:text-left">
        Hi. I am Chandan Biswas. I am a professor of Chemistry, and CEO, Chemisphere and I have mentored over 15000 students in the last decade for JEE Main and Advanced, NEET, MHCET and Class 12th boards and I know inside out of all these exams. I have the honor to be the mentor for over 1000 IITians, and medical professionals.
<br /></p> */}
         <div className="flex pt-1 mt-0 items-center justify-left md:space-y-0 md:mt-0 md:pb-0 md:justify-start ">
     <Link target="__blank" href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20classes%20of%20Chemisphere!" className="flex items-center rounded-full">
 <div className='justify-center flex'>
  <Button className=' bg-chemisphere transition hover:bg-gray-100 hover:text-gray smooth border-chemisphere border-2  shadow '>
      <Image src="/whatsapp-logo.svg" width={34} height={24} alt="chat on whatsapp button"/>
      <p className='text-black font-semibold text-2xl pl-4 px-42'>Connect now to get more class info</p>
  </Button>
 </div>

     
  </Link>

</div>

    </div>   
    <section className='lg:w-96 w-80 lg:ml-14 '>
       
    {/* <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
    <Slider {...settings} className='mr-14'>
      <SwiperSlide>
            <div className='  text-chemisphere flex-col gap-12 justify-center p-9 '>
              <a href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Organic%20Chemistry.">
                 <img src="/jee adv1.jpg" alt="organic chemistry poster" />
                <div className=' bg-gray-100 rounded-br-lg rounded-bl-lg text-center hover:bg-white transition transform hover:text-chemisphere'>
                <button className=" hover:underline font-bold py-2 px-4 rounded-full">
                  BOOK NOW!
                </button>
                </div> 
              </a>
             
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='  text-chemisphere flex-col gap-12 justify-center p-9 '>
              <a href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Physical%20Chemistry.">
                 <img src="/jee adv2.jpg" alt="physical chemistry poster" />
                <div className=' bg-gray-100 rounded-br-lg rounded-bl-lg text-center hover:bg-white transition transform hover:text-chemisphere'>
                <button className=" hover:underline font-bold py-2 px-4 rounded-full">
                  BOOK NOW!
                </button>
                </div> 
              </a>
             
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='  text-chemisphere flex-col gap-12 justify-center p-9 '>
              <a href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20inorganic%20Chemistry.">
                 <img src="/jee adv3.jpg" alt="inorganic chemistry poster" />
                <div className=' bg-gray-100 rounded-br-lg rounded-bl-lg text-center hover:bg-white transition transform hover:text-chemisphere'>
                <button className=" hover:underline font-bold py-2 px-4 rounded-full">
                  BOOK NOW!
                </button>
                </div> 
              </a>
             
            </div>
        </SwiperSlide>
                </Slider>
            
      </Swiper> */}
</section>
  
    </section>
    <div className="flex-1 text-center lg:mt-0 lg:ml-3">
   
            
     
  </div>
    
</div>
</div>

  )
}

export default Hero
