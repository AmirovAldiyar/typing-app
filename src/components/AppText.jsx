import { useColorModeValue } from '@chakra-ui/react'
import { Box, Center, Text } from '@chakra-ui/layout'
import React from 'react'

export default function AppText({text, fontSize, backgroundColor, highlightBegin=0, highlightEnd=0, highlightColor}) {
    const textColor = useColorModeValue('gray.700', 'gray.300')
    return (
        <Box backgroundColor={backgroundColor} display='flex' height='20vh' width='100%' alignItems='center' rounded={5} pl='2vw'>
            <Text color={textColor} fontSize={fontSize} m={4} textAlign='left'>{text.slice(0,highlightBegin)}<strong style={{color: highlightColor}}>{text.slice(highlightBegin, highlightEnd)}</strong>{text.slice(highlightEnd, text.length)}</Text>
        </Box>
    )
}
