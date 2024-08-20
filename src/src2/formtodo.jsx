import React, { useState } from "react";




const FormTodo = ({addTodo})=>{

const [title,setTitle] = useState(``)

const handleSubmit = (event)=>{
    event.preventDefault()

    addTodo(title)
    setTitle(``)
}


    return(
        <form onSubmit={handleSubmit}>

 
            <input
             placeholder="название задачи"
             value={title}
             onChange={(event)=>setTitle(event.target.value)}
             
             />

            <button type="submit" disabled={title===``}>добавить задачу</button>


        </form>
    )
}

export default FormTodo