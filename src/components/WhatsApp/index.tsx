import { Box,Icon,Text } from '@chakra-ui/react'
import { RiWhatsappFill } from 'react-icons/ri'





export const WhatsApp = () =>{
    
    
    
    return(

          <Box
            zIndex='100'
            position='fixed'
            bottom='0'
            right='0'
            padding='2rem'

          >
              <Text as='a' href='http://web.whatsapp.com/send?phone=5586999520517' target='_blank'>
              <Icon
                            as={RiWhatsappFill}
                            boxSize="60px"
                            color="green.500"
                          
                          />
              </Text>
          </Box>  
    )
}