import React, { useRef, useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const ToDo = () => {

const [tododata,setTododata] = useState(
  ["Add Post at 10:00pm","Chack Emails On 10:30pm","Restart Server At 11:00pm fkgnkl ghlfm kgnmfl kwtklwf klnfkbnwk f kwlnt" ]
);
const ref = useRef('');



  return (
      <>
        <div className="add_todo">
          <input type="text" id='add_todo_input' ref={ref} className='shadow' placeholder='Add New.....'/>
          <button id='add_btn' className='shadow' onClick={() => {
            if(ref.current.value !== ''){
              setTododata([ref.current.value,...tododata]);
              ref.current.value = '';
            }
            
          }}>Add</button>
        </div>
        <hr />
       <div className="todo_item_outer">
       <ul>
          {tododata.map((item,i) => {
            return <div className="todo_item">
              {/* <div><input type="checkbox" name="chack" id={i} /></div> */}
              <div><li key={i}>{item}</li></div>
              <div onClick={() => {
                setTododata(tododata.filter((nitem) => nitem !== item ))
              }}  className='danger_color del_icon'><FaTrashAlt /></div>
              </div>
          })}
        </ul>
       </div>
      </>
  )
}

export default ToDo