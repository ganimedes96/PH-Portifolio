import { background, Box, Button } from "@chakra-ui/react"

type PaginationProps ={
    pages: number;
    setCurrentPage?:number;
    currentPage:number;
}



export const Pagination = ({pages,setCurrentPage,currentPage}:PaginationProps) =>{
    return(
        <Box 
            textAlign='center'
            py='2rem'
            
            >
            {Array.from(Array(pages),(item,index) => {
                return (
                    <Button
                        style={index === currentPage ?{bg:'blue.800'}:null}
                        bg='gray.400'  
                        color='white.100'   
                        value={index}
                        onClick={e=> setCurrentPage(Number(e.target.value))}
                        mx='.5rem'
                        transition='.8s'
                        _hover={{
                            bg:'blue.800'
                        }}
                        >{index + 1}
                        
                    </Button>
                )
            })}
        </Box>
    )
}