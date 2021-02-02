import React,{ useEffect, useState, useContext}from "react";
import { useParams } from "react-router-dom";
//import useToDoJournal from '../../useToDoJournal'


const JournalDetail = ({data, deleteJournal, useUpdateJournal,updateJournal}) => {
  const {journalId} = useParams();
  const journal = data.find((p) => p.id === Number(journalId));
  let journalData;
  if (journal) {
    journalData = {
      
        name: journal.name,
        description: journal.description,
      
    }
  } else {
    journalData = {
      name: "Not exists",
      description: "No description"
    }
    
  }
  //const {updateJournal} = useToDoJournal(data);
  const { value, onChangeName, onChangeDescription } = useUpdateJournal(data,journalId);
  console.log(value);
  
  return (
    <div>
      <div className="journal-detail-wrapper">
        <div className="journal-detail-form">
          <div className="form-group">
            <label>Title</label>
            <br />
            <input
              id="test"
              type="text"
              className="title-input-field"
              value = {journal ? value.name: journalData.name}
              onChange = { onChangeName }
              readOnly= {journal ? false : true}
            >
            </input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              id ="dest"
              type="text"
              className="description-input-field"
              rows="10"
              value= {journal ? value.description : journalData.description}
              onChange={onChangeDescription}
              readOnly= {journal ? false : true}
            >
            </textarea>
          </div>
          <div>
            <button
             className="button-save-journal"
             onClick= {() =>{
              updateJournal(journalId,value) ;
             }}
             disabled={journal ? false : true}
            >Save</button>
            <button  className="button-save-journal" onClick= {()=>{
              deleteJournal(journalId);
            }} 
            disabled={journal ? false : true}
            >Delete</button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
