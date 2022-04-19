import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import {Image, Slider} from '@chakra-ui/react'
import styled from './style.slide.module.scss'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


type Slider = {
    
  slug: string;
  slider1: string;
  slider2: string;
  slider3: string;
  slider4: string;

}

interface SliderProps{
    sliders:Slider[];
}


export default function Home ({sliders}:SliderProps)  {
  return (
    <>  
       <div className={styled.container}>
       {sliders.map(slider =>(
                 <Swiper
             key={slider.slug}
             className={styled.mySwiper}   
             slidesPerView={1}
             spaceBetween={30}
             loop={true}
             pagination={{
             clickable: true,
             }}
             navigation={true}
             modules={[Pagination, Navigation]}
             
         >
            

             <SwiperSlide className={styled.swiperSlide}>
              <Image
                
                 
                src={slider.slider1}
                />
            </SwiperSlide>
             <SwiperSlide className={styled.swiperSlide}><Image objectFit='cover' src={slider.slider2}/></SwiperSlide>
             <SwiperSlide className={styled.swiperSlide}><Image objectFit='cover' src={slider.slider3}/></SwiperSlide>
             <SwiperSlide className={styled.swiperSlide}><Image objectFit='cover' src={slider.slider4}/></SwiperSlide>
         </Swiper> 
            ))}

             
     </div>    
    
      
      
    </>
  )
}




export const getStaticProps: GetStaticProps = async () =>{

  const prismic = getPrismicClient()
  const response = await prismic.query<any>(
      [Prismic.predicates.at('document.type','slider')]
      
      
  )
  
      const sliders = response.results.map(slider =>{
          return{
              slug: slider.uid,
              slider1: slider.data.slider1.url,
              slider2: slider.data.slider2.url,
              slider3: slider.data.slider3.url,
              slider4: slider.data.slider4.url,
          }
      })

      console.log(sliders)

  return{
      props:{sliders}
  }    
}