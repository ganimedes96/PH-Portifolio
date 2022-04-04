import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import Head from "next/head";
import Prismic from "@prismicio/client";



import styles from "../../styles/style.module.scss";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



type WalletProps = {
  wallets:{
    slug: string;
    image: string;
    image1: string;
    image2: string;
    image3: string;
    description: string;
    price: string;
    split: number;

  }
};


export default function wallet({ wallets }: WalletProps) {
 

  return (
    <>
      <Head>
        <title>Relogios</title>
      </Head>
      <Flex
        maxWidth={1400}
        mx="auto"
        mt={{base:"5rem", md:'10rem'}}
        d={{ base: "block", md: "flex" }}
      >
         
               
          <Box 
            position='relative' 
            maxWidth={{base:'100%', md:'50%'}}
            alignItems='center'
            justifyContent='center'
            mb={{base:'1rem', md:'0'}}
            

          >
         
          <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}><img src={wallets.image} alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={wallets.image1} alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={wallets.image2} alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={wallets.image3} alt="" /></SwiperSlide>

       
        
      </Swiper>


      </Box>

        
        <Box 
          mx={{ base: "1.5rem" }}>
          <Box
            w="100%"
            d="flex"
            flexDirection="column"
            p="4rem 2rem"
            borderRadius="8px"
            mr={{ base: "1.8rem" }}
            boxShadow="2px -4px 20px 5px rgba(0,0,0,0.1),-17px 10px 10px -40px rgba(0,0,0,0.1);"
          >
            <Text
              as="p"
              fontFamily="Ubuntu"
              fontWeight="bold"
              mb="2rem"
              fontSize="22px"
            >
              {wallets.description}
            </Text>
            <Text as="h2" fontSize="18px" mb="1rem" fontWeight="500">
              R$ {wallets.price}
            </Text>
            <Text as="span" mb="3rem" >
              <Text fontSize="25px" as="strong" mx='.3rem'>
                3x
              </Text>
              de
              <Text fontSize="25px" as="strong" mx='.3rem'>
                R${wallets.split}
              </Text>
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
  const wallets = await prismic.query([
    Prismic.predicates.at("document.type", "wallet"),
  ]);

  const paths = wallets.results.map((wallet) => ({
    params: {
      slug: wallet.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();

  const { slug }: any = context.params;

  const response = await prismic.getByUID<any>("wallet", String(slug), {});

  const split = RichText.asText(response.data.price);
  const g = Math.round(parseInt(split) / 3)


  const wallets = {
    slug: response.uid,
    image: response.data.iamge.url,
    image1: response.data.image1.url,
    image2: response.data.image2.url,
    image3: response.data.image3.url,
    description: RichText.asText(response.data.description),
    price: RichText.asText(response.data.price),
    split: Math.round(parseInt(split) / 3),
  };

  console.log(g);

  return {
    props: { wallets },
  };
};
