import React from 'react';
import './Post.css';

const post = (props) => {

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.body}</p>
                <small className="card-date">{props.date}</small>
                <br />
                <div className="links">
                    <p className="edit card-link" data-id={props._id}>
                        <i className="fa fa-pencil"></i>
                    </p>
                    <p className="delete card-link" data-id={props._id}>
                        <i onClick={props.deletePost} className="fa fa-remove" />
                    </p>
                </div>
            </div>
        </div>
    );
};


 export default post;