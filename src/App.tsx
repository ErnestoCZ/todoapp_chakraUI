import * as React from "react"
import {
  ChakraProvider, Divider,
} from "@chakra-ui/react"
import TaskInput from "./Components/UI/TaskInput"
import TaskElement from "./Components/UI/TaskElement"

export const App = () => (
  <ChakraProvider >

    <TaskInput message="Please Enter a new Task"></TaskInput>
    <Divider orientation="horizontal" colorScheme={'gray'} variant='solid' pr={'0.3cm'} pl={'0.3cm'}/>
    <TaskElement TaskDescription="Some Task"></TaskElement>
  </ChakraProvider>
)
