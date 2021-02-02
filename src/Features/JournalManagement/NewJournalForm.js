import React from "react";
import useInputJournal from '../../useInputJournal'

const NewJournalForm = ({saveJournalData}) => {
  
  const { value, reset, onChangeName, onChangeDescription } = useInputJournal();

  return (
    <div>
      <div className="new-journal-wrapper">
        <h2>New Journal</h2>

        <div className="new-journal-form">
          <div className="form-group">
            <label>Title</label>
            <br />
            <input
              className="title-input-field"
              placeholder="Journal Title"
              onChange={onChangeName}
              value={value.name}
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              className="description-input-field"
              rows="10"
              cols="50"
              placeholder="Journal Description"
              onChange={onChangeDescription}
              value={value.description}
            ></textarea>
          </div>
          <div>
            <button className="button-save-journal" onClick={event => {

                event.preventDefault();
                saveJournalData(value);
                reset();
            }}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJournalForm;
