import { Box,Button,Divider,Flex,Text,Image, SimpleGrid,} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Prismic from '@prismicio/client'
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import Link from 'next/link'

type Watch = {
    slug: string;
    image: string;
    description: string;
    price: string;
}

interface WatchProps{
    watchs: Watch[];
}


export default function PageWatch({watchs}:WatchProps) {
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
                fontSize={{base:'3xl',md:'4xl'}}    
            
            >Relógios</Text>
            <Divider
                bg="gray.800"

                height="2px"    
                orientation="horizontal"

            />


        </Box>
            <Box>
            <Flex
                mx='auto'
                align="center"
                justify="center"
                maxWidth={1200}
                mt={10}
                
            >
        <SimpleGrid columns={[1,2,3]} mx='2rem' >

        {watchs.map(watch =>(
            <Link key={watch.slug} href={`/watch/${watch.slug}`}>
                <Box 
                   
                    p='1rem .8rem'
                    mb='2rem'
                    transition='.3s'
                    _hover={{
                        boxShadow:'1px 1px 5px ',
                        borderColor:'gray.500',
                        borderRadius:'8px',
                        bg:'white.100'
                    }}
                        
                    
                >
                    <Image 
                        src={watch.image} 
                        w="100%" h="260px" 
                        objectFit='cover'
                        borderTopLeftRadius='10px'
                        borderTopRightRadius='10px'/>
                        
                    <Text 
                        as="p"
                        fontSize='18px'
                        wordBreak='break-word'
                        my='.8rem'
                        fontWeight='500'
                    >
                        {watch.description}
                    </Text>
                    <Text 
                    as="h2"
                    fontWeight='700'
                    fontSize='22px'
                    mb='.8rem'
                    >{watch.price}</Text>
                    <Button
                        w='100%'
                        bg='transparent'
                        border='2px'
                        color='gray.700'   
                        >
                            Comprar</Button>
                </Box>
            </Link>
        ))}
        </SimpleGrid>

      
      
    </Flex>
            </Box>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () =>{
    const prismic = getPrismicClient()

    const response = await prismic.query<any>(
        [Prismic.predicates.at('document.type', 'card')],
        {
            fetch: ['card.image','card.description','card.price']
        }
    )

    const watchs = response.results.map(watch =>{
        return{
            slug: watch.uid,
            image: watch.data.image.url,
            description: RichText.asText(watch.data.description),
            price: RichText.asText(watch.data.price)

        }
    })

    return{
        props:{
            watchs
        }
    }
}