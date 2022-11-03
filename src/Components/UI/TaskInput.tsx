import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import React, { useState } from 'react'




interface inputParam {
  message:string,
}

export default function TaskInput(props:inputParam) {
  
  const inputHandler = (event:any) => {
    console.log(event.target.value)
  }
  
  
  return (
    <div>
      <FormControl>
        <Flex margin={'0.3cm'}>
            <Button type='submit' colorScheme='blue' variant='solid' size='lg' marginRight={2}>Add</Button>
            <Input onChange={inputHandler} placeholder={props.message} color='facebook.200' size='lg' textColor={'black'}></Input>
        </Flex>
      </FormControl>
    </div>
    
  )
}
