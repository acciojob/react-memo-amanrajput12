import React, {  useRef, useState } from "react"
import ReactMemo from "./ReactMemo.js";
import Usememo from "./Usememo.js";
const App =()=>{
    console.log("app render");
    const [todo,setTodo]= useState("")
    const [count,setCount]= useState(0)
    const [todos,setTodos] = useState([])
    const [taskval,setTaskVal] = useState("");

    function todosAdd(){
      
        if(taskval.length>=5){
            setTodos((prev)=>[...prev,taskval])
            setTaskVal("");
        }
        else{
            alert("task must be more than 5 char")
        }
    }

    return(
        <div>
            <h2>React.useMemo</h2>
            <h3>My todo</h3>
            <p>{todo}</p>
            <button onClick={()=>setTodo("New Todo")} >Add Todo</button>
            <p>count: {count} <span onClick={()=>setCount(count+1)}>+</span></p>
           <Usememo count={count} />
           <h3>React.Memo</h3>
           <input value={taskval}  onChange={(e)=>setTaskVal(e.target.value)} type="text" />
           <button onClick={todosAdd}>Add Skill</button>
           <ReactMemo todos={todos} />
        </div>
    )
}


export default App