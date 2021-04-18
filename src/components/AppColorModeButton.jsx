import { IconButton } from '@chakra-ui/react'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'
import React from 'react'

export default function AppColorModeButton() {
    const { toggleColorMode } = useColorMode()
    const buttonColor = useColorModeValue("white", 'gray.600')
    const navbarColor = useColorModeValue("gray.300", 'gray.700')
    return (
        <IconButton aria-label='Change Color Mode' icon={<SunIcon/>} size='lg' position='absolute' right='2vw' top='2vh' onClick={toggleColorMode}/>
    )
}
