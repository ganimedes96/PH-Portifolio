import { Box ,Button,Image,Text} from "@chakra-ui/react";
import Link from "next/link";

interface ProductItemProps{

    product:{
        slug: string;
        image: string;
        description: string;
        price: number;
    }

}


export function ProductItem ({product}: ProductItemProps){
    return(
        <Link key={product.slug} href={`/wallet/${product.slug}`}>
                <Box 
                    width='280px'
                    p='1rem .8rem'
                    transition='.3s'
                    _hover={{
                        boxShadow:'1px 1px 5px ',
                        borderColor:'gray.500',
                        borderRadius:'8px',
                        bg:'white.100'
                    }}
                        
                    
                >
                    <Image 
                        src={product.image} 
                        w="100%" h="260px" 
                        objectFit="cover" 
                        borderTopLeftRadius='10px'
                        borderTopRightRadius='10px'/>
                        
                    <Text 
                        as="p"
                        fontSize='18px'
                        wordBreak='break-word'
                        my='.8rem'
                        fontWeight='500'
                    >
                        {product.description}
                    </Text>
                    <Text 
                    as="h2"
                    fontWeight='700'
                    fontSize='22px'
                    mb='.8rem'
                    >{product.price}</Text>
                    <Button
                        w='100%'
                        bg='transparent'
                        border='2px'
                        color='gray.700'   
                        >
                            Comprar</Button>
                </Box>
            </Link>
    )
}