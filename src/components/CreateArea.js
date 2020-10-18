import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

const [note, setNote] = useState({
  title: "",
  content: ""
})

const [isClicked, setClick] = useState(false);

function handleClick() {
  setClick(true);
}

function handleChange(event) {
  // here " {name, value} " need to be "{}" and not "[]" because we work with Object 
  const {name, value} = event.target;
  // console.log(event.target);
  setNote(prevNote => {
    // console.log(prevValue);
    return {...prevNote, [name]:value}
  });
}

function submitNote(event){

  if((note.title && note.content) !== "" ) 
    {
    // calling the "props.onAdd" is equal to call "addNote" from App component.
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }
    // event.preventDefault() we use it for refesh table preventing by form using. 
    event.preventDefault();
}

  return (
    <div>
    {/* in React all the classes need to be camelcases */}
      <form onClick={handleClick} className="create-note">
        {isClicked && <input onChange={handleChange} name="title" placeholder="Title" autoComplete="off" value={note.title} />}
        {isClicked && <hr/>}
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows={isClicked ? 3 : 1} value={note.content}/>
        <Zoom in={isClicked}><Fab onClick={submitNote} type="submit"><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
