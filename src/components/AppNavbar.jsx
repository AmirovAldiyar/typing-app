import { Button } from '@chakra-ui/button'
import { Box, Text, SimpleGrid, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import AppColorModeButton from './AppColorModeButton'

export default function AppNavbar() {
    const { toggleColorMode } = useColorMode()
    const buttonColor = useColorModeValue("white", 'gray.600')
    const navbarColor = useColorModeValue("gray.300", 'gray.700')
    return (
        <Box width='100%' height='8vh' position='absolute' flexDirection='row' display='flex'>
            <Text fontSize='2vh' mt='2vh' ml='5vw' fontWeight='light' _hover={{textDecoration: 'underline'}} height='2vh'><Link to='/'>Type!!!</Link></Text>
            <Text fontSize='2vh' mt='2vh' ml='5vw' fontWeight='light' _hover={{textDecoration: 'underline'}} height='2vh'><Link to='/changelog'>Changelog</Link></Text>
                <AppColorModeButton/>
        </Box>
    )
}
