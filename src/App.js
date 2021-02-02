import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


import NewJournalForm from "./Features/JournalManagement/NewJournalForm";
import JournalList from "./Features/JournalManagement/JournalList";
import LoginPage from "./Features/Login/Login";
import useToDoJournal from './useToDoJournal'

function App() {
  const journalData = [
    {
      id: 1,
      name: "Go to the beach",
      description:
        "Khoan hãy đi đang dịch.",
      
    },
    {
      id: 2,
      name: "Camping",
      description:
        "Dịch đi đâu mà đi.",
      
    },  
    {
      id: 3,
      name: "Go to the concert",
      description:
        "Dịch mà đi cái gì bật Youtube mà nghe.",
      
    },
    {
      id: 4,
      name: "Play game",  
      description:
        "Hợp lý ở nhà chơi game.",
      
    }
  ];
  const Home = () =>{
    return (
      <div>Welcome!</div>
    );
  }
  const { journalList, addJournal, deleteJournal, updateJournal} = useToDoJournal(journalData)

  return (
    <BrowserRouter>
     
      <div className="App">
        <div className="TitleArea">
          <h1>Mini Journal App</h1>
        </div>
        <div className="option-area">
          <Link className="tab" to="/my-journal" >
            All entries
          </Link>
          <Link className="tab" to="/new-journal">
            New journal
          </Link>
          {/* <Link to="/"></Link> */}
          <Link className="tab" to="/login">Login</Link>
        </div>

        <div className="MainArea">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route path="/my-journal">  
            <JournalList value={journalList} deleteJournal={deleteJournal} updateJournal={updateJournal} />
          </Route>
          <Route path="/new-journal">
            <NewJournalForm
              saveJournalData={value => {
                //console.log(value);
                const trimmedName = value.name.trim();
                const trimmedDescription = value.description.trim();
                // loại bỏ khoảng trắng của Input
                if (trimmedName.length > 0 && trimmedDescription.length >0) {
                  addJournal({ name:trimmedName, description:trimmedDescription });
                  // hàm thêm input vào list
                }
              }}
            />
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
        </div>
        
      </div>
    
    </BrowserRouter>
  );
}

export default App;
