import React from 'react';
import {Center, Text} from '@chakra-ui/react'

function AppStats({wpm}) {
  return (
    <Center >
      <Text fontStyle='bold' fontSize='3vh'>{wpm} WPM</Text>
    </Center>
  );
}

export default AppStats;