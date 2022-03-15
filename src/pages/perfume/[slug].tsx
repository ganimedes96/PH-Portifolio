import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import Head from "next/head";
import Prismic from "@prismicio/client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./perfume.module.scss";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type Perfume = {
  slug: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
  price: string;
  split: number;
};
interface PerfumeProps {
  perfumes: Perfume[];
}

export default function perfume({ perfumes }: PerfumeProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Head>
        <title>Perfumes</title>
      </Head>
      <Flex
       maxWidth={1400} 
       mx='auto'
       mt='10rem'
      
       d={{base:'block', md:'flex'}}

         >
        <div className={styles.images}>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.mySwiper2}
          >
            <SwiperSlide className={styles.swiperSlider}>
              <img src={perfumes.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlider}>
              <img src={perfumes.image1} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlider}>
              <img src={perfumes.image2} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlider}>
              <img src={perfumes.image3} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={1}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.swiperBack}>
              <img src={perfumes.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperBack}>
              <img src={perfumes.image1} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperBack}>
              <img src={perfumes.image2} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperBack}>
              <img src={perfumes.image3} />
            </SwiperSlide>
          </Swiper>
        </div>
        <Box
          mx={{base:'1.8rem'}}
        >

          <Box
            w='100%'
            d='flex'
            flexDirection='column'
            
            p='4rem 2rem'
            borderRadius='8px'
            mr={{base:'1.8rem'}}
            
            
            boxShadow='2px -4px 20px 5px rgba(0,0,0,0.1),-17px 10px 10px -40px rgba(0,0,0,0.1);'
          >
            <Text
              as="p"
              fontFamily="Ubuntu"
              fontWeight="bold"
              mb="2rem"
              fontSize="22px"
            >
              {perfumes.description}
            </Text>
            <Text as="h2" fontSize="15px" mb="1rem">
              {perfumes.price}
            </Text>
            <Text as="span" mb="3rem">
              <Text fontSize="25px" as="strong">
                3x
              </Text>
              de
              <Text fontSize="25px" as="strong">
                R${perfumes.split}
              </Text>{" "}
              sem juros
            </Text>

            <Button
              fontSize="22px"
              bg="gray.800"
              py="2rem"
              color="white.100"
              _hover={{
                bg: "gray.700",
              }}
            >
              Comprar
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const perfumes = await prismic.query([
    Prismic.predicates.at("document.type", "perfume"),
  ]);

  const paths = perfumes.results.map((perfume) => ({
    params: {
      slug: perfume.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();

  const { slug } = context.params;

  const response = await prismic.getByUID<any>("perfume", String(slug), {});

  
  const split = RichText.asText(response.data.price)



  const perfumes = {
    slug: response.uid,
    image: response.data.image.url,
    image1: response.data.image1.url,
    image2: response.data.image2.url,
    image3: response.data.image3.url,
    description: RichText.asText(response.data.description),
    price: RichText.asText(response.data.price),
    split: Math.round( parseInt(split)/3)
  };



  return {
    props: { perfumes },
  };
};
