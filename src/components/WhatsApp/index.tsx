import { Box,Text } from '@chakra-ui/react'
import whats from '../../../animation/whats.json'
import Lottie from 'react-lottie';
import Link from 'next/link';


export const WhatsApp = () =>{
    
    const whatsapp ={
        loop: true,
        autoplay: true,
        animationData: whats,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        } 
    }
    
    return(

          <Box
            zIndex='100'
            position='fixed'
            bottom='0'
            right='0'
            padding='2rem'

          >
              <Text as='a' href='http://web.whatsapp.com/send?phone=5586999520517' target='_blank'>
                <Lottie
                    options={whatsapp}
                    height='50px'
                    width='50px'
                />  
              </Text>
          </Box>  
    )
}