import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import React, { useState } from 'react'




interface inputParam {
  message:string,
  addTaskToElementListHandler(newSavedTask:string):any
}

export default function TaskInput(props:inputParam) {

  //states
  const [inputFieldValue,setInputFieldValue] = useState('');
  

  //Handler
  const saveNewTaskHandler = (event:any) => {

    if(event.target.value !== ''){
      console.error("Inputfield is empty!");
    }else{
      props.addTaskToElementListHandler(inputFieldValue); //pass string from inputfield (child to parent)
      setInputFieldValue(''); // clear inputField
    }
  }

  const onChangeHandler = (event:any) => {
    setInputFieldValue(event.target.value);
  }
  
  
  return (
    <div>
      <FormControl onSubmit={saveNewTaskHandler} isRequired colorScheme={'gray'}>
        <Flex margin={'0.3cm'}>
            <Button type='submit' colorScheme='blue' variant='solid' size='lg' marginRight={2}>Add</Button>
            <Input type='text' onChange={onChangeHandler} value={inputFieldValue}  placeholder={props.message} color='facebook.200' size='lg' textColor={'black'}></Input>
        </Flex>
      </FormControl>
    </div>
    
  )
}
