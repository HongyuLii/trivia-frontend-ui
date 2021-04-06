import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import QuestionList from "./components/questions-list.component";
import EditQuestion from "./components/edit-question.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={QuestionList} />
        <Route path="/edit/:id" component={EditQuestion} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
