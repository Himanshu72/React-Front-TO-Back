import React from "react";
import Contacts from "./componets/contacts/Contacts";
import AddContact from "./componets/contacts/AddContact";
import Headert from "./componets/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./componets/pages/About";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./componets/pages/PageNotFound";
import Test from "./componets/test/Test";
import EditContact from "./componets/contacts/EditContact";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Headert brand="Contact Manager" />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
