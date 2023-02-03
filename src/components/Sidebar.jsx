const Sidebar = (props) => {
  const noteElements = props.notes.map((note, index) => {
    const noteBody = note.body.split("\n");
    const noteName = noteBody[0].replace(/[^a-zA-Z ]/g, "");

    return (
      <div key={note.id}>
        <div
          className={`title ${
            note.id === props.currentNote.id ? "selected-note" : ""
          }`}
          onClick={() => props.setCurrentNoteId(note.id)}
        >
          <h4 className="text-snippet">{noteName}</h4>
        </div>
      </div>
    );
  });

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
};

export default Sidebar;
