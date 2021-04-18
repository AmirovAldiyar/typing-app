import { Button } from '@chakra-ui/button'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function AppNavbar() {
    const { toggleColorMode } = useColorMode()
    const buttonColor = useColorModeValue("white", 'gray.600')
    const navbarColor = useColorModeValue("gray.300", 'gray.700')
    return (
        <Box width='100%' height='4vh' backgroundColor={navbarColor} position='absolute'>
            <Button onClick={toggleColorMode} backgroundColor={buttonColor} size='sm' mt='0.5vh' right={10} position='absolute'>Color Mode</Button>
        </Box>
    )
}
