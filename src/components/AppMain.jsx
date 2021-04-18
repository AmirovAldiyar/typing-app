import { useColorModeValue } from '@chakra-ui/react'
import { useForceUpdate } from '@chakra-ui/hooks'
import { SimpleGrid } from '@chakra-ui/layout'
import React, { useState } from 'react'
import AppInput from './AppInput'
import AppText from './AppText'

const requestMode ={
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
  }

export default function AppMain() {
    const [highlightEnd, setHighlightEnd] = useState(0)
    const [text, setText] = useState('Hello World')
    const [color, setColor] = useState('green')
    const [saved, setSaved] = useState('')
    const [input, setInput] = useState('')
    const textBackgroundColor = useColorModeValue("gray.300", 'gray.700')
    
    const onChange = async (event) => {
        setInput(event.target.value)
        let value = saved + event.target.value;
        let size = 0
        for(let i = 0; i < value.length; i++){
            if(value[i] === text[i]){
                size++;
            }else{
                break;
            }
        }
        console.log(size);
        console.log(value.length);
        if(size !== value.length){
            setColor('tomato')
        }else{
            if(value[value.length-1] === ' '){
                setSaved(value)
                setInput('')
            }
            if(size===text.length){
                setSaved('')
                setInput('')
                value=''
                setText(await (await fetch("https://typing-backend.vercel.app/v1/randomtext", requestMode)).text())
            }
            setColor('green')
        }
        setHighlightEnd(value.length)
    }

    return (
        <SimpleGrid columns={1} width='50%' height='30vh' spacing='0px'>
          <AppText text={text} fontSize='2vh' backgroundColor={textBackgroundColor} highlightBegin={0} highlightEnd={highlightEnd} highlightColor={color}/>
          <AppInput value={input} onChange={onChange}/>
        </SimpleGrid> 
    )
}
