import React from "react";
import "./Saved.css"; 

const Saved = props => 
    <div className ="saved-container"> 
    <div className="row">
            <div className="col"> Saved <hr/> </div>
    </div>
    <div className="row">
            <div className="col"> 
                <li className="list-group-item">
                    <h4>
                        <span>
                            <em>{props.title}</em>
                        </span>
                        <span className="btn-group pull-right">
                            <a href={props.url} target="_blank">
                                <button className="btn btn-default ">View Article</button>
                            </a>
                                <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
                        </span>
                    </h4>
                    <p>Date Published: {props.date}</p>
                    </li>
                </div>
    </div>
    </div>;


export default Saved;