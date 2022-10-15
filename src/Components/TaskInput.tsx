import { Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'

interface inputParam {
    message:string,
}

export default function TaskInput(props:inputParam) {
  return (
    <div>
        <Flex padding='0.3cm'>
            <Button colorScheme='blue' variant='solid' size='lg'>Add</Button>
            <Input placeholder={props.message} color='facebook.100' size='lg'></Input>
        </Flex>
    </div>
    
  )
}
