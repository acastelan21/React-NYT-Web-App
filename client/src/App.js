import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
import API from "./utils/API";
class App extends Component {
  state ={
    topic:"",
    startYear:"",
    endYear:"",
    articles:[],
    saved:[]
  }
  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleStartYearChange = (event) => {
    this.setState({ startYear: event.target.value });
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleEndYearChange = (event) => {
    this.setState({ endYear: event.target.value });
  }
  handleFormSubmit =(event)=> {
    event.preventDefault();
    
    console.log("I am here");
    API.searchNYT(this.state.topic, this.state.StartYear,this.state.endYear)
      .then((res)=>{
        if (res){
      console.log("working");
        };
    });
  }
  render() {
    return (
      <Wrapper>
        <Header>   

        </Header>
        <Search>
        
        </Search>
        <Results>

        </Results>
        <Saved>
        
        </Saved>
      </Wrapper> 
    );
  }
}

export default App;
