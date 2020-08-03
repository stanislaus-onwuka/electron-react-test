import React from 'react';
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import Note from './components/note';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      noteText:'',
      notes:[]
    }
  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }

  addNote(){

    if(this.state.noteText === ''){return false;}

    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText: ''});
  }




  render(){

    let notes = this.state.notes.map((val,key)=>{
      return <Note key={key} text={val}/>
    })

    return (
      <div className="App">
      <header>
        <h1>To Do Application</h1>
      </header>
      <main>
        <div className="add-section">
          <Textfield  
            className="text-input"
            ref={((input)=>{this.textInput =input})}
            value={this.state.noteText}
            name="auto-focus" autoFocus width="medium"
            onChange={noteText => this.updateNoteText(noteText)}
          />
          <Button className="add-btn" appearance="primary" onClick={this.addNote.bind(this)}>
            Add
          </Button>
        </div>
        <div className="notes">
          {notes}
        </div>
      </main> 
      </div>
    );
  }
  
}

export default App;
