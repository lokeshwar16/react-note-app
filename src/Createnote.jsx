import React, { useState } from "react";



function Createnote(props){
    const[note,setNote]=useState({
        title:"",
        content:""
    });
    
    function handlechange(event){
        const{name,value} = event.target;
    
        setNote(prevNote =>{
            return{ ...prevNote,
                [name]:value
    
        }})
    }
    function submitNote(event){
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    return <div>
        <form>
            <input type="text" placeholder="Note Title" name="title" value={note.title} onChange={handlechange} />
            <input type="text" placeholder="Note Content" name="content" row="3" value={note.content} onChange={handlechange}/>
            <button onClick={submitNote}>Add</button>
        </form>
    </div>
};

export default Createnote;