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

type ClocksProps = {
  clocks: {
    slug: string;
    image: string;
    image1: string;
    image2: string;
    image3: string;
    description: string;
    price: string;
    split: number;
  };
};

export default function wallet({ clocks }: ClocksProps) {
  
  
  return (
    <>
      <Head>
        <title>Relogios</title>
      </Head>
      <Flex
        maxWidth={1400}
        mx="auto"
        mt={{ base: "5rem", md: "10rem" }}
        d={{ base: "block", md: "flex" }}
      >
        <Box
          position="relative"
          maxWidth={{ base: "100%", md: "50%" }}
          alignItems="center"
          justifyContent="center"
          mb={{ base: "1rem", md: "0" }}
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
            <SwiperSlide className={styles.swiperSlide}>
              <img src={clocks.image} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src={clocks.image1} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src={clocks.image2} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src={clocks.image3} alt="" />
            </SwiperSlide>
          </Swiper>
        </Box>

        <Box mx={{ base: "1.5rem" }}>
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
              {clocks.description}
            </Text>
            <Text as="h2" fontSize="20px" mb="1rem" fontWeight="500">
              R${clocks.price}
            </Text>
            <Text as="span" mb="3rem">
              <Text fontSize="25px" as="strong" mx=".3rem">
                3x
              </Text>
              de
              <Text fontSize="25px" as="strong" mx=".3rem">
                R${clocks.split}
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
  const watchs = await prismic.query([
    Prismic.predicates.at("document.type", "cloc"),
  ]);

  const paths = watchs.results.map((watch) => ({
    params: {
      slug: watch.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();

  const { slug }:any = context.params;

  const response = await prismic.getByUID<any>("cloc", String(slug), {});

  const split = RichText.asText(response.data.price);
  
  console.log(response)

  const clocks = {
    slug: response.uid,
    image: response.data.image.url,
    image1: response.data.image1.url,
    image2: response.data.image2.url,
    image3: response.data.image3.url,
    description: RichText.asText(response.data.description),
    price: RichText.asText(response.data.price),
    split: Math.round(parseInt(split) / 3),
  };

 

  return {
    props: { clocks },
  };
};
