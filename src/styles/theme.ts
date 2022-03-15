import {extendTheme} from '@chakra-ui/react'

const colors={
    blue:{
        900:'#03041a',
        800:'#0c155e',
        500:'#3485ff'
    },
    gray:{
        800:'#242935',
        700:'#4d5e77',
        600:'#bcbcc0',
        150:'#e1e5ec',
        100:'#e5eaf1',
        50: '#eaecf2'
    },
    white:{
        100:'#fafafa'
    },
    purple:{
        900:'rgb(74,21,128,)',
        600:'#6818cf'
    }
}

const fonts={
    heading:'Ubuntu',
    body:'Ubuntu'
}

const styles={
   
    global:{
        body:{
        bg:'white.100',
        color:'gray.800'
      }  
    }

}
export const theme = extendTheme({colors, fonts, styles})