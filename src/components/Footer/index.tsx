import { Box, Flex,Text, Button, Icon } from "@chakra-ui/react"

import {
   
    RiMailSendLine,
    RiWhatsappLine,
    RiFacebookBoxLine,
    RiPhoneFill,
    RiMapPin2Line,
    RiInstagramLine

    
  } from "react-icons/ri";

export const Footer = () =>{
    
   
    
    return(
        <Flex 
            flexDirection='column'
            as='footer'
           bg='blue.900'
            w='100%'
            
            mt='5rem'
            
        >

            <Flex 
                d={{base:'block', md:'flex'}}
                align='center'
                justify='space-between'
                my='5rem'
                px={{base:'2rem', md:'4rem'}}
            
            >
                    <Box>
                    
                        <Text 
                            as='h2'
                            fontSize='27px'
                            fontWeight='600' 
                            color='gray.100'   
                            >
                            Entre em contato <br/> com a gente!
                        </Text>
                        <Text 
                            as='p'
                            fontWeight='400'
                            fontSize='18px'
                            color='gray.400'
                            my='1rem'
                        > 
                                Entre em contato com a Store,<br/>
                                para mais informacoes sobre produtos e formas de pagamentos
                        </Text>
                        <Button
                            backgroundColor='transparent'
                            color='green.300'
                            border='1px solid'
                            borderColor='green.400'
                            p='.7rem 1.3rem'
                            _hover={{ bg: "transparent" }}
                            _active={{
                              transform: "scale( 1.05)",
                              borderColor: "green.400",
                            }}
                            _focus={{
                              boxShadow: "0 0 1px 2px blue.400, 0 1px 1px rgba(0, 0, 0, .15)",
                            }}
                            leftIcon={
                              <Icon
                                as={RiWhatsappLine}
                                boxSize="25px"
                                color="green.500"
                              
                              />
                            }
                            >
                            Entrar em contato
                        </Button>

                    </Box>
                    <Box
                      mt={{base:"2rem", md:''}}
                      
                      
                     
                      
                     
                    >
                        <Text 
                            as='a'
                            d='flex'
                            gap='.7rem'
                            color='gray.300'
                            fontSize='19px'
                             fontWeight='400'
                            >
                                 <Icon
                                  as={RiPhoneFill}
                                  boxSize="25px"
                                  color="green.500"
                                
                                />
                                11 99565-5521</Text>
                        <Text
                             as='a'
                             d='flex'
                             gap='.7rem'
                             color='gray.300'
                             fontSize='19px'
                             fontWeight='400'
                             my='1rem'
                            >
                                <Icon
                                  as={RiMapPin2Line}
                                  boxSize="25px"
                                  color="blue.500"
                                
                                />
                                R. amura Souza, 5887</Text>
                        <Text
                             as='a'
                             d='flex'
                             gap='.7rem'
                             color='gray.300'
                             fontSize='19px'
                             fontWeight='400'
                            >
                                <Icon
                                  as={RiMailSendLine}
                                  boxSize="25px"
                                  color="red.500"
                                
                                />
                                contato@Store.com</Text>
                    </Box>
            </Flex>
            <Flex
                d={{base:'block', md:'flex'}}
                align="center"
                justify="center"
                px={{base:'2rem', md:'7rem'}}
                mb='2rem'
            >
              
                <Flex
                    mt={{base:'2rem',md:'' }}
                    align="center"
                    justify="center"
                    gap={{base:"5rem", md:'1.5rem'}}    
                    >
                    <Button
                        backgroundColor='transparent'
                        color='green.300'
                        border='2px solid'
                        borderColor='green.400'
                        p='.5rem'
                        _hover={{ bg: "transparent" }}
                        _active={{
                          transform: "scale( 1.09)",
                          borderColor: "green.400",
                        }}
                        _focus={{
                          boxShadow: "0 0 1px 2px blue.400, 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        
                        
                        
                        >
                              <Icon
                            as={RiWhatsappLine}
                            boxSize="30px"
                            color="green.500"
                          
                          />
                        </Button>    
                        <Button
                        backgroundColor='transparent'
                        border='2px solid'
                        borderColor='blue.400'
                        p='.5rem'
                        _hover={{ bg: "transparent" }}
                        _active={{
                          transform: "scale( 1.09)",
                          borderColor: "blue.400",
                        }}
                        _focus={{
                          boxShadow: "0 0 1px 2px blue.400, 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        
                        
                        
                        >
                              <Icon
                            as={RiFacebookBoxLine}
                            boxSize="30px"
                            color="blue.500"
                          
                          />
                        </Button>   
                        <Button
                        backgroundColor='transparent'
                        color='green.300'
                        border='2px solid'
                        borderColor='yellow.700'
                        p='.5rem'
                        _hover={{ bg: "transparent" }}
                        _active={{
                          transform: "scale( 1.09)",
                          borderColor: "yellow.700",
                        }}
                        _focus={{
                          boxShadow: "0 0 1px 2px blue.400, 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        
                        
                        
                        >
                              <Icon
                            as={RiInstagramLine}
                            boxSize="30px"
                            color="yellow.700"
                          
                          />
                        </Button>    
                         
                        
                    
                </Flex>    


            </Flex>

        </Flex>
    )
}