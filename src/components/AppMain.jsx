import { useColorModeValue, Spinner, Box, Text, useDisclosure } from '@chakra-ui/react'
import { Center, SimpleGrid } from '@chakra-ui/layout'
import React, { useState, useEffect } from 'react'
import AppInput from './AppInput'
import AppText from './AppText'
import AppStats from './AppStats'
import AppResultModal from './AppResultModal'
import Cookies from 'universal-cookie'


const requestMode ={
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
  }

export default function AppMain() {
    const [highlightEnd, setHighlightEnd] = useState(0)
    const [text, setText] = useState('')
    const [color, setColor] = useState('green')
    const [saved, setSaved] = useState('')
    const [input, setInput] = useState('')
    const [startTime, setStartTime] = useState(-1)
    const [wpm, setWpm] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [interval, setInterval_] = useState(0)
    const [prev, setPrev] = useState('')
    const [best, setBest] = useState('')
    const [lastWPM, setLastWPM] = useState(0)
    const textBackgroundColor = useColorModeValue("gray.300", 'gray.700')
    const cookies = new Cookies();
    useEffect(async () => {
        setIsLoading(true)
        setText(await (await fetch("https://typing-backend.vercel.app/v1/randomtext", requestMode)).text())
        setIsLoading(false)
        setStartTime(Date.now())
        setInterval_(setInterval(() => {setWpm(Math.floor((saved.length/5)/((Date.now()-startTime)/1000)))}, 500))
 
    }, [])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onChange = async (event) => {
        setInput(event.target.value)
        if(startTime === -1){
            setStartTime(Date.now())
        }
        
        let value = saved + event.target.value;
        let size = 0
        for(let i = 0; i < value.length; i++){
            if(value[i] === text[i] || (text[i] === '\'' && (value[i] === '‘' || value[i] === '’'))){
                size++;
            }else{
                break;
            }
        }

        if(size !== value.length){
            setColor('tomato')
        }else{
            if(value[value.length-1] === ' '){
                setSaved(value)
                clearInterval(interval)
                setInterval_(setInterval(() => {console.log(Math.floor((value.length/5)/((Date.now()-startTime)/60000))); setWpm(Math.floor((saved.length/5)/((Date.now()-startTime)/60000)))}, 500))
                setInput('')
            }
            if(size===text.length){
                setSaved('')
                setInput('')
                setText('')
                setStartTime(-1)
                setIsLoading(true)
                value=''
                let last_wpm = Math.floor((saved.length/5)/((Date.now()-startTime)/60000))
                clearInterval(interval)
                setPrev(last_wpm)
                if(best < last_wpm) {
                    setBest(last_wpm)
                }
                setLastWPM(last_wpm)
                onOpen()
                setWpm(0)
                setText(await (await fetch("https://typing-backend.vercel.app/v1/randomtext", requestMode)).text())
                setIsLoading(false)
            }
            setColor('green')
        }
        setHighlightEnd(value.length)
    }

    return (
        <>
        <AppResultModal wpm = {lastWPM} onClose = {onClose} isOpen={isOpen}/>
        <SimpleGrid columns={1} width='50%' height='30vh' spacing='0px' >
            <Text position='absolute' fontSize='3vh' left='2vw' bottom = '2vh' visibility={prev === '' ? 'hidden' : 'visible'}>Previous: {prev} WPM</Text>
            <Text position='absolute' fontSize='3vh' left='2vw' bottom = '7vh' visibility={best === '' ? 'hidden' : 'visible'}>Best: {best} WPM</Text>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="gray.700"
                size="xl"
                visibility={isLoading ? 'visible' : "hidden"}
                position='absolute'
                right="50%"
                top="45%"
            />
            <AppStats wpm={wpm}/>
            <AppText text={text} fontSize='3vh' backgroundColor={textBackgroundColor} highlightBegin={0} highlightEnd={highlightEnd} highlightColor={color}/>
            <AppInput value={input} onChange={onChange}/>
        </SimpleGrid>
        </> 
    )
}
