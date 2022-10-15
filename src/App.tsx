import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  GridItem,
} from "@chakra-ui/react"
import TaskInput from "./Components/TaskInput"

export const App = () => (
  <ChakraProvider >

    <TaskInput message="Please Enter a new Task"></TaskInput>

    <Box bg='beige' >

    </Box>
    
  </ChakraProvider>
)
