import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

export default function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <hr/>
            <p>{props.content}</p>
            <button onClick={()=>{
                return props.onDelete(props.id);
            }}>
            <DeleteIcon/>
            </button>
        </div>
    );
}