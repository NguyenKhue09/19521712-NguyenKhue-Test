import React from "react";
import JournalDetail from "./JournalDetail";
import { Link, Route,  useRouteMatch} from "react-router-dom";
import useUpdateJournal from '../../useUpdateJournal'

const JournalList = ({value,deleteJournal,updateJournal}) => {
  
  
  const {url} = useRouteMatch();
  const journalData = value.map((journal) => {
    return (
      <li key={journal.id}>
        <Link to={`${url}/${journal.id}`}>{journal.name}</Link>
      </li>
    );
  }); 
  return (
    
    <div>
      <div className="journal-list-wrapper">
        <header>
          <div className="subTitle">Your entries</div>
          <div className="subTitle">Detail</div>
        </header>
      </div>
      <div className="journal-list-main-area">
        <div className="journal-list">
          <div>
            <ul>
              {/* <li>go to the beach</li>
              <li>camping</li>
              <li>go to the concert</li>
              <li>play game</li> */}
              {journalData}
            </ul>
          </div>
        </div>
        {/* <div className="journal-detail">
          <JournalDetail />
        </div> */}
        <Route path={`${url}/:journalId`}>
          <div className="journal-detail">
            <JournalDetail data={value} deleteJournal={deleteJournal} useUpdateJournal={useUpdateJournal} updateJournal={updateJournal}/>
          </div>
        </Route>
      </div>
    </div>

  );
};

export default JournalList;
