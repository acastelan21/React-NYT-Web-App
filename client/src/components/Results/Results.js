import React from "react";
import "./Results.css"; 

const Results = props => 
    <div className ="results-container"> 
        <div className="row">
            <div className="col"> Results <hr/> </div>
        </div>
            
        <div className="row">
            <div className="col">
                <li className="list-group-item">
                    <h4>
                        <span><em>{props.title}</em></span>
                        <span className="btn-group pull-right">
                            <a href={props.url} target="_blank">
                                <button className="btn btn-default ">View Article</button>
                            </a>
                                <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save</button>
                        </span>
                    </h4>
                    <p>Date Published: {props.date}</p>
                </li>
            </div>
    </div> 
    </div>; 


export default Results;