import { CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Heading, Icon, Input, Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Spacer } from '@chakra-ui/react'
import React, {useState} from 'react'


interface TaskElementinputParam {
    TaskDescription : string,

}



export default function TaskElement(props : TaskElementinputParam) {

//States
const [TaskDescription,setTaskDescription] = useState(props.TaskDescription);


//Variables


//Handlerfunctions
const clickEditButtonHandler = (event : any) => {
    console.log(event.target)
}




  return (

        <Box margin={'0.3cm'} padding={'0.2cm'} border='1px' borderColor={'facebook.100'} borderRadius={'5px'}>
            <Flex>
                <Box background={'white'}>
                    <Heading padding={2} size='md' color={'facebook.500'}>{TaskDescription}</Heading>
                </Box>
                <Spacer></Spacer>
                <Box>
                    <Popover>
                        <PopoverTrigger>
                            <Button type='button' colorScheme='blue' variant={'solid'} size='md' marginLeft={2} marginRight={2}>Edit</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverBody>
                                <Flex>
                                    
                                    <Input type='text' placeholder={TaskDescription.toString()}></Input>
                                    <Button type='submit' onClick={clickEditButtonHandler}>OK</Button>
                                
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Button type='button' colorScheme={'red'} variant={'solid'} size='md' marginRight={2}>Delete</Button>
                </Box>
            </Flex>
        </Box>
  )
}
