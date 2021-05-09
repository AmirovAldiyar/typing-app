import {Box, Spinner, Text, useColorModeValue} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'

const requestMode ={
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
}

function NewlineText(text) {
    const newText = text.split('\n').map(str => <p>{str}</p>);

    return newText;
}


export default function AppChangelog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const backgroundColor = useColorModeValue("gray.300", 'gray.700')
    const textColor = useColorModeValue("gray.700", 'gray.300')
    const getPosts = async () => {
        setLoading(true)
        setPosts(await (await fetch("https://typing-backend.vercel.app/v1/posts", requestMode)).json())
        setLoading(false)
    }

    useEffect(()=>{
        getPosts().then()
    }, [])

    return (
        <Box  height='100vh' width='60vw' ml='20vw' paddingTop='8vh'>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="gray.700"
                size="xl"
                visibility={loading ? 'visible' : "hidden"}
                position='absolute'
                right="50%"
                top="45%"
            />
            <Text fontSize='3vh' fontWeight="bold" mb='2vh'>Changelog:</Text>
            {posts.map((item, i) =>
                <Box key={i} mb='3vh' backgroundColor={backgroundColor} padding={'1vh'} borderRadius={"10"}>
                    <Text fontSize={'3vh'} mb={'1vh'}>{item.title}</Text>
                    <Text fontSize={'2.5vh'} color={textColor}>{NewlineText(item.content)}</Text>
                    <Text fontSize={'2vh'} color={'gray.500'} textAlign='right'>{(new Date(Date.parse(item.date))).toDateString()}</Text>
                </Box >
            )}
        </Box>
    )
}
