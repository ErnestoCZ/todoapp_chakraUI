import * as React from "react"
import {
  ChakraProvider, Divider,
} from "@chakra-ui/react"
import TaskInput from "./Components/UI/TaskInput"
import TaskElement from "./Components/UI/TaskElement"
import TaskElementList from "./Components/UI/TaskElementList";

const listOfTasks:string[] = ["Task 1", "Task 2"];


export const App = () => (

    
    //TODO declare a array with Task(Objects)
    
    //Handler
    //TODO implement a addTaskToElemeneListHandler
    
    <div>
      <ChakraProvider >
        <TaskInput addTaskToElementListHandler={(newSavedTask:string):any => {console.log(newSavedTask)}} message="Please Enter a new Task"></TaskInput>
        <Divider orientation="horizontal" colorScheme={'gray'} variant='solid' pr={'0.3cm'} pl={'0.3cm'}/>
        <TaskElementList tasks={listOfTasks}></TaskElementList>
    </ChakraProvider>

    </div>
);
