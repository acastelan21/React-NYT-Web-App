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
    
    
    API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
     
      .then((res)=>{
        this.setState({articles:res.data.response.docs});
        console.log(this.state.articles);
    });
  }
  renderArticles = () => {
    return this.state.articles.map(article =>(
      <Results 
      _id={article._id}
      key={article._id}
      title={article.headline.main}
      date={article.pub_date}
      url={article.web_url}
      />
    ));
  }
  
  render() {
    return (
      <Wrapper>
        <Header/>

        
        <Search
        handleTopicChange ={this.handleTopicChange}
        handleStartYearChange={this.handleStartYearChange}
        handleEndYearChange={this.handleEndYearChange}
        handleFormSubmit = {this.handleFormSubmit}
        renderArticles = {this.renderArticles()}
        />
        <Results/>

        
       <Saved/>

      </Wrapper>
      
    );
  }
}

export default App;
