import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FormDataDisplay, PersonalForm, ProfessionalForm } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ PersonalForm } />
          <Route exact path="/professionalForm" component={ ProfessionalForm } />
          <Route exact path="/formDisplay" component={ FormDataDisplay } />
        </Switch>
      </Router>
    );
  }
}
export default App;
