import { ListItem, UnorderedList } from "@chakra-ui/react"
import Link from "next/link"


export const ListHeader = () =>{
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
             <Link href='/wallet'>
                <a>Carteira</a>
             </Link>
         </ListItem>
         <ListItem 
             
             borderBottomWidth={{base:'1px', md:'0'}}
             pb='1rem'
            borderColor='gray.500'

             >
             <Link href='/perfume'>
                <a href="#">Perfume</a>
             </Link>
         </ListItem>
         <ListItem 
           
            borderBottomWidth={{base:'1px', md:'0'}}
            pb='1rem'
            borderColor='gray.500'

            >
             <Link href='/watch'>
                <a href="#">Relogio</a>
             </Link>
         </ListItem>
     </UnorderedList>   
    )
}