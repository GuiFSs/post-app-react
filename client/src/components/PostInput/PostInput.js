import React from 'react';

const postInput = (props) => {

    return (
        <div className="card card-body card-form">
            <h1>Say Something</h1>
            <p className="lead">What's on your mind ?</p>
            <div className="form-group">
                <input type="text" id="title" className="form-control" placeholder="Post Title" onChange={props.changed} value={props.title} />
            </div>
            <div className="form-group">
                <textarea id="body" className="form-control" placeholder="Post Body" value={props.body} onChange={props.changed} />
            </div>
            <input type="hidden" id="id" value="" />
            <button className="post-submit btn btn-primary btn-block" onClick={props.postClick} >Post It</button>
        </div>
    );
};

export default postInput;