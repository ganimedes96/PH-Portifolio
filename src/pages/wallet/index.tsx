import { Box,Button,Divider,Flex,Text,Image, SimpleGrid,} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Prismic from '@prismicio/client'
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import Link from 'next/link'
import { useState } from "react";
import { Pagination } from "../../components/Pagination";

type Wallet = {
    slug: string;
    image: string;
    description: string;
    price: string;
}

interface WalletProps{
    wallets: Wallet[];
}


export default function PageWallets({wallets}:WalletProps) {
   
    const [itensPerpage,setItensPerpage] =useState(6) 
    const [currentPage,setCurrentPage]=useState(0)  

    const pages = Math.ceil(wallets.length / itensPerpage) 

    const startIndex = currentPage * itensPerpage
    const endIndex = startIndex + itensPerpage
    const currentItens = wallets.slice(startIndex, endIndex)
   
    return(
        <>
                <Box
            mt='3rem'
            d='flex'
            alignItems='center'
            justifyContent='center'
            gap='1rem'
            px='1rem'

        >
            <Divider 
                orientation="horizontal"
                bg="gray.800"
                height="2px"    
                />
            <Text 
                as='h2'
                fontSize='4xl'    
            
            >Carteiras</Text>
            <Divider
                bg="gray.800"

                height="2px"    
                orientation="horizontal"

            />


        </Box>
        <Box>
        <Flex 
          mx="auto" 
          align="center" 
          justify="center" 
          maxWidth={1200} 
          mt={10}>
          <SimpleGrid columns={[1, 2, 3]} mx="2rem">
            {currentItens.map((wallet) => (
              <Link key={wallet.slug} href={`/wallet/${wallet.slug}`}>
                <Box
                  p="1rem .8rem"
                  mb="2rem"
                  transition=".3s"
                  _hover={{
                    boxShadow: "1px 1px 5px ",
                    borderColor: "gray.500",
                    borderRadius: "8px",
                    bg: "white.100",
                  }}
                >
                  <Image
                    src={wallet.image}
                    w="100%"
                    h="260px"
                    objectFit="cover"
                    borderTopLeftRadius="10px"
                    borderTopRightRadius="10px"
                  />

                  <Text
                    as="p"
                    fontSize="18px"
                    wordBreak="break-word"
                    my=".8rem"
                    fontWeight="500"
                  >
                    {wallet.description}
                  </Text>
                  <Text as="h2" fontWeight="700" fontSize="22px" mb=".8rem">
                    R${wallet.price}
                  </Text>
                  <Button
                    w="100%"
                    bg="transparent"
                    border="2px"
                    color="gray.700"
                  >
                    Comprar
                  </Button>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Flex>
        <Pagination 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} 
            pages={pages}/>
      </Box>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () =>{
    const prismic = getPrismicClient()

    const response = await prismic.query<any>(
        [Prismic.predicates.at('document.type', 'wallet')]
        
    )

    const wallets = response.results.map(wallet =>{
        return{
            slug: wallet.uid,
            image: wallet.data.iamge.url,
            description: RichText.asText(wallet.data.description),
            price: RichText.asText(wallet.data.price)

        }
    })

    
    return{
        props:{
             wallets
        }
    }
}