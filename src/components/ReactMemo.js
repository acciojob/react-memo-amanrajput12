import React from 'react'

const ReactMemo = ({todos}) => {
    console.log("react memo render",todos)
  return (
    <div>
        {todos.map((todo,i)=>{
          return <li key={i}>{todo}</li>
        })}
    </div>
  )
}

export default React.memo(ReactMemo)