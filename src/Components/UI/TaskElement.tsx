import { Box, Button, Container, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

interface TaskElementinputParam {
    TaskDescription : string
}

export default function TaskElement(props : TaskElementinputParam) {

  return (

        <Box margin={'0.3cm'} padding={'0.2cm'} border='1px' borderColor={'facebook.100'} borderRadius={'5px'}>
            <Flex>
                <Box background={'beige'} width='80%'>
                    <Heading padding={2} size='md' color={'facebook.500'}>{props.TaskDescription}</Heading>
                </Box>
                <Spacer></Spacer>
                <Box>
                    <Button type='button' colorScheme='blue' variant={'solid'} size='md' marginRight={2}>Edit</Button>
                    <Button type='button' colorScheme={'red'} variant={'solid'} size='md' marginRight={2}>Delete</Button>
                </Box>
            </Flex>
        </Box>
  )
}
