import { Button, Flex, Icon, Input } from "@chakra-ui/react"
import { FormEvent, useState } from "react"
import { RiSearchLine } from "react-icons/ri"
import Prismic from '@prismicio/client'
import { getPrismicClient } from "../../services/prismic";





export const Search  = () =>{
   

    const prismic = getPrismicClient()
    const [search, setSearch] = useState('')
   
  const handleSearch = () =>{
      
  }

        
    


    return(
                <Flex
                       
                        as='form'
                        flex='1'
                        p='3'
                        color='gray.900'
                        bg='white.100'
                        borderRadius={{base:'8px',md:'full'}}
                        align='center'
                        ml={{base:'0',md:'10'}}
                        maxWidth={{base:'100%', md:'350px'}}
                    >
                        <Input
                            type='search'
                            
                            color='gray.800'
                            variant='unstyled'
                            px='4'
                            mr='4'
                            placeholder='Buscar'
                            _placeholder={{color:'gary.700'}}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <Button
                            type='submit'
                            bg='transparent'
                        >
                        <Icon as={RiSearchLine}
                           fontSize='20'
                           color='gray.500'
                           cursor='pointer'
                        />
                            
                        </Button>
                        
                    </Flex>


    )

}