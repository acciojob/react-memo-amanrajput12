import React, { useMemo } from 'react'

const slowfunc=(num)=>{
    console.log("usememo slow fun")
    let total =0;
    for(let i=0;i<100000;i++){
        total+=i;
    }
    return num*2+total;
}

const Usememo = ({count}) => {
 const expenisivecal = useMemo(()=>slowfunc(count),[count])
  return (
    <div>
         <h3>Expensive calculation</h3>
         <p>Result of slow cal {expenisivecal}</p>
    </div>
  )
}

export default Usememo