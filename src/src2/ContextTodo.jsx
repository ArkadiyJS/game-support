import React,{useState,createContext} from "react";
import { v4 as uuidv4 } from 'uuid';


export const ContextTodo = createContext();

export const ProviderTodo=({children})=>{

    const [todo,setTodo]= useState([
        {id:`1111` , title:`ura magazine` , complited:false},
        {id:`2222` , title:`u1111111` , complited:false},
        {id:`3333` , title:`u2222222` , complited:false},
        {id:`4444` , title:`u3333ne` , complited:false}
    ])

    const addTodo = (title)=>{
        const newTask = { id:uuidv4() , title:title,complited:false}
        setTodo((todo)=>[...todo,newTask])

        }

    const removeTodo = (id)=>{
        setTodo((prevTodo) => prevTodo.filter((prevTodo)=>prevTodo.id != id ))
        

        }
    const complitedTodo = (id)=>{
        setTodo((prevTodos) => prevTodos.map((todo) =>todo.id === id ? { ...todo, complited: !todo.complited } : todo
        )
    );}


    return(
        <ContextTodo.Provider  value={{todo,addTodo,removeTodo,complitedTodo}}>
            {children}
        </ContextTodo.Provider>
    )





}