import { Box, Flex,UnorderedList,ListItem,Text } from "@chakra-ui/react"
import Lottie from 'react-lottie';
import facebook from '../../../animation/facebook.json'
import instagram from '../../../animation/insta.json'
import email from '../../../animation/email.json'



export const Footer = () =>{
    
    const face ={
        
        loop: true,
        autoplay: true,
        animationData: facebook,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
        
       
    }
    const insta ={
        loop: true,
        autoplay: true,
        animationData: instagram,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        } 
    }
    const Email ={
        loop: true,
        autoplay: true,
        animationData: email,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        } 
    }
    
    return(
        <Flex 
            flexDirection='column'
            as='footer'
            bg='blue.900'
            w='100%'
            h='15rem'
            mt='5rem'
            align='center'
            justify='center'
        >
       <Box
        w='300px'
        mt='-5rem'    
        d='flex'
        alignItems='center'
        justifyContent='center'
       >
           
                <Lottie
                    options={face}
                    height='50px'
                    width='50px'
                />
                <Lottie
                    options={insta}
                    height='50px'
                    width='50px'
                    
                />
                <Lottie
                    options={Email}
                    height='50px'
                    width='50px'
                   
                />
           </Box>   
           <Flex
            mt='2rem'
           >
                <UnorderedList 
                    listStyleType='none'
                    d='flex'
                    gap='3rem'
                    color='gray.150'
                    fontSize='20px'
                >
                    <ListItem>
                        Home
                    </ListItem>
                    <ListItem>Relogio</ListItem>
                    <ListItem>Carteira</ListItem>
                    <ListItem>Perfume</ListItem>
                </UnorderedList>   
            </Flex>  
            <Box
                w='100%'
                h='2.5rem'
                bg='gray.900'
                position='absolute'
                bottom='0'
                textAlign='center'

            >
                <Text
                    color='gray.150'
                    mt='.4rem'
                >
                    Copyright &copy; 2022 Hudson Felix | All Rights Reserved</Text>
            </Box>


        </Flex>
    )
}