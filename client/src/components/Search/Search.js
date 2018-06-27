import React from "react";
import "./Search.css"; 

const Search = props => 
    <div className ="search-container"> 
        <div className="row"></div>
            <div className="col"> Search <hr/> </div>
        <div className="row"></div>
            <div className="col"> 
            <form>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Year</label>
                <input onChange={props.handleStartYearChange} type="text" className="form-control" id="startYear" />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Year</label>
                <input onChange={props.handleEndYearChange} type="text" className="form-control" id="endYear" />
              </div>
              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
            
            </div>
   
            <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            {props.renderArticles}
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
  </div>
 

     


export default Search;