import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useColorModeValue,
  Text,
  useDisclosure,
  Center
} from "@chakra-ui/react"

function AppResultModal({isOpen, onClose, wpm}) {
  const buttonColor = useColorModeValue("gray.300", 'gray.700')
  return (
      <Modal isOpen={isOpen} onClose={onClose} position='absolute' isCentered={true} size='lg'>
          <ModalOverlay/>
          <ModalContent paddingBottom='4vh' position='absolute' justifySelf='center'  justifyContent='center'>
            <ModalHeader textAlign='center' fontSize='3vh'>Your result</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text textAlign='center' fontSize='3vh'>Your result is {wpm} WPM!!!</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
    
  );
}

export default AppResultModal;