import { ListItem, UnorderedList,Text } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

export const ListHeader = () =>{
   const router = useRouter() 
   
   return(
        <UnorderedList
        d={{base:'block', md:'flex'}}
        gap='4rem'
        justifyContent='center'
        fontSize='20px'
        fontWeight='400'
        listStyleType='none'
        color='white.100'
        pb='1rem'
        
     >
         <ListItem 
        
            borderBottomWidth={{base:'1px', md:'0'}}
            pb='1rem'
            borderColor='gray.500'

            
            >
             <Link href='/'>
                <a>Home</a>
             </Link>
         </ListItem>
         <ListItem 
           
            borderBottomWidth={{base:'1px', md:'0'}}
            pb='1rem'
            borderColor='gray.500'
            >
             <Text as='a'
               
              href='/wallet'
               cursor='pointer'
             >
                  Carteira
             </Text>
         </ListItem>
         <ListItem 
             
             borderBottomWidth={{base:'1px', md:'0'}}
             pb='1rem'
            borderColor='gray.500'

             >
            <Text as='a'
               
               href='/watch'
                cursor='pointer'
              >
                   Relogio
              </Text>
         </ListItem>
         <ListItem 
           
            borderBottomWidth={{base:'1px', md:'0'}}
            pb='1rem'
            borderColor='gray.500'

            >
             <Text as='a'
               
               href='/perfume'
                cursor='pointer'
              >
                   Perfume
              </Text>
         </ListItem>
     </UnorderedList>   
    )
}