import React from 'react';
import {Link } from 'react-router-dom';
import web from '../img/4.png';

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 m-auto">
        <div className="card">
          <img src={props.imgsrc} alt="ok" className="card-img-top" height="200px" width="200px"/>
          <div className="card-body">
            <div className="card-title">{props.title}</div>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, inventore?
            </p>
            <Link to="/" className="btn btn-info">Go Anywhere</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
