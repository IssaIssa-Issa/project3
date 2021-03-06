import React,  { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import login from './Components/Containers/login';
import ParentContainer from './Components/Containers/ParentContainer';
import ChildContainer from './Components/Containers/ChildContainer';
import Callback from './Components/Authentication/callback';
import ManageFundsForm from './Components/Forms/ManageFundsForm';
import ManageChoresForm from './Components/Forms/ManageChoresForm';
import TransactionContainer from './Components/Containers/TransactionContainer';
import MyResponsiveBar from './Components/Containers/GoalChart';
import EditGoals from './Components/Forms/EditGoals';
import ViewAllChores from './Components/Containers/ViewAllChores';


export default class App extends Component  {
    state = {
        message: "",
        error: "",
        eee: "",
        text: ""
      };
    
      componentDidMount = () => this.fetchAPIMessage();
    
      fetchAPIMessage = async () => {
        try {
          const res = await fetch(`/api/message`);
          const { message } = await res.json();
          this.setState({ message });
        } catch (err) {
          console.error(err);
        }
      };
      render = () => (
          <div>
      <Router>
              <Route exact path="/" component={login} />
              <Route exact path='/callback' component={Callback} />
              <Route exact path="/parent" component={ParentContainer} />
              <Route exact path="/child" component={ChildContainer} />
              <Route exact path="/managefundsform" component={ManageFundsForm} />
              <Route exact path="/managechoresform" component={ManageChoresForm} />
              <Route exact path="/transactions" component={TransactionContainer} />
              <Route exact path="/Goals" component={MyResponsiveBar} />
              <Route exact path="/editgoals" component={EditGoals} />
              <Route exact path="/viewallchores" component={ViewAllChores} />
          </Router>
      </div>    );
      }
