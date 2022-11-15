import React, { useState } from 'react'
import TaskElement from './TaskElement'




export default function TaskElementList(props:any) {
  //State Hook to handle the changes regarding ListOfTasks
  const [currentTaskList,setTasklist] = useState(props.tasks)
    return (
    <div>
        {currentTaskList.map( (element:string) => <TaskElement TaskDescription={element.toString()}></TaskElement>)}
    </div>
  )
}
