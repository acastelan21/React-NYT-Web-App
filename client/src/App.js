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
  };
   componentDidMount(){
    this.getSavedArticles()
  }
  getSavedArticles =()=> {
    API.getArticle().then((res)=>{
      this.setState({saved:res.data});
    });
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
  handleSavedButton = (id)=>{
  console.log(id);
  const findArticleByID = this.state.articles.find((el) => el._id === id);
  console.log("findArticleByID: ", findArticleByID);
  const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url};
  API.saveArticle(newSave)
  .then(this.getSavedArticles());
    
  
   
  }
  handleDeleteButton = (id)=>{
    API.deleteArticle(id)
      .then(this.getSavedArticles());
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
        
        />
        <div>
          {
            this.state.articles.map(article =>(
              <Results
              _id={article._id}
              key={article._id}
              title={article.headline.main}
              date={article.pub_date}
              url={article.web_url}
              handleSavedButton={this.handleSavedButton}
              getSavedArticles={this.getSavedArticles}
              />
            ))
          }
        </div>

        
        <div> 
         {
          this.state.saved.map(save => (
            <Saved
              _id={save._id}
              key={save._id}
              title={save.title}
              date={save.date}
              url={save.url}
              handleDeleteButton={this.handleDeleteButton}
              getSavedArticles={this.getSavedArticles}
            />
          )) 
         }
        </div>
      </Wrapper>
      
    );
  }
}

export default App;
