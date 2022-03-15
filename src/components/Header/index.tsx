import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex,Icon,IconButton,Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react"
import Link from 'next/link'
import { RiMenuLine } from "react-icons/ri"
import { ListHeader } from "../ListHeader"
import { Search } from "../Search"

export const Header = ()=>{

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true
    })

    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
            <Drawer  size='md' isOpen={isOpen} placement='right' onClose={onClose}>
          <DrawerOverlay >
              <DrawerContent  bg='blue.900'>
                    <DrawerCloseButton mt={2} color='purple.500' />
                    <DrawerHeader 
                      d='flex'
                      alignItems='center'
                      gap={2}
                      borderBottomWidth='1px'
                      borderColor='blue.700' 
                      color='white.100'
                      >
                      
                      
                      Store
                    </DrawerHeader> 
                    <DrawerBody  mt='5'>
                    <ListHeader/>
                    </DrawerBody>              
              </DrawerContent>
          </DrawerOverlay>
        </Drawer>


            <Box
                as='header'
                bg='blue.900'
            >

                <Flex
                    
                    w='100%'
                    maxWidth={1480}
                    h={{base:'90px',md:'160px'}}
                    mx='auto'
                    justify='space-between'
                    align='center'
                    px='3rem'
                    pb={{base:'2rem', md:'0'}}

                >

                   <Link href={`/`}>
                    <Text 
                        cursor='pointer'
                        color='white.100'
                        fontSize={{base: '3xl', md:'4xl', lg:'5xl'}}
                        fontWeight='bold'    
                        as='h1'>
                        Store
                    </Text>
                   </Link> 
                {isWideVersion &&(

                    <Search/>
                )}

                {!isWideVersion && (
                  <IconButton

                      color='purple.500'
                      aria-label="Open navigation"
                      fontSize="24"
                      variant="unstyled"
                      onClick={onOpen}
                      mt='.7rem'             
                  >
                      <Icon
                          as={RiMenuLine}
                      />
                  </IconButton>
                )}
                </Flex>
                
                 {isWideVersion||(
                    <Flex
                        pb='1rem'
                        align='center'
                        justify='center'
                        px={{base:'1rem'}}
                    >

                        <Search/>
                    </Flex>
                    
                 ) }   

                {isWideVersion &&(

                   <ListHeader/> 
                )}
            </Box>
            
        </>
    )
}