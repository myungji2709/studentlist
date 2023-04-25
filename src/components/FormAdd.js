import { useState } from "react"

export default function FormAdd(props){
    const [text,setText]=useState("")

    return (
        <form className="formAdd" onSubmit={(e)=>{
            e.preventDefault();
            props.addList(text);
            setText("")
        }}>
            <input type="text" placeholder="Enter your student" value={text} onChange={(e)=>{
                setText(e.target.value)
            }}/>
        </form>
    )
}