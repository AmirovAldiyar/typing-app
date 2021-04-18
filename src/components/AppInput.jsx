import { Input } from '@chakra-ui/input'
import React from 'react'

export default function AppInput({onChange, value}) {
    return (
        <Input value={value} onChange={onChange} mt={1} placeholder='Start typing!' size='md' variant='filled' onChange={onChange}/>
    )
}
