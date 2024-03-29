// VisitingCard.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import ProfilePic from "./ProfilePic";
// import './App.css';

function VisitingCard({ data }) {
  const [titlenameA, setTitlenameA] = useState("write here...");
  const [titlenameB, setTitlenameB] = useState("write here...");
  const [titlenameC, setTitlenameC] = useState("write here...");
  const [titlenameD, setTitlenameD] = useState("write here...");
  const handleNameChangeA = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setTitlenameA("write here...");
    } else {
      setTitlenameA(inputValue);
    }
  };
  const handleNameChangeB = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setTitlenameB("write here...");
    } else {
      setTitlenameB(inputValue);
    }
  };
  const handleNameChangeC = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setTitlenameC("write here...");
    } else {
      setTitlenameC(inputValue);
    }
  };
  const handleNameChangeD = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setTitlenameD("write here...");
    } else {
      setTitlenameD(inputValue);
    }
  };
  function handleA() {
    let finaldata = titlenameA;
  }
  function handleB() {
    let finaldata = titlenameB;
    // console.log(finaldata)
  }
  function handleC() {
    let finaldata = titlenameC;

    // console.log(finaldata)
  }
  function handleD() {
    let finaldata = titlenameD;

    console.log(finaldata);
  }
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">A : {titlenameA}</h5>
          <input
            type="string"
            placeholder="Entet value"
            onChange={handleNameChangeA}
          />
          <button onClick={handleA}>saveA</button>
        </div>
        <ProfilePic/>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">B : {titlenameB}</h5>
          <input
            type="string"
            placeholder="Entet value"
            onChange={handleNameChangeB}
          />
          <button onClick={handleB}>SaveB</button>
        </div>
        <ProfilePic/>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">C : {titlenameC}</h5>
          <input
            type="string"
            placeholder="Entet value"
            onChange={handleNameChangeC}
          />
          <button onClick={handleC}>SaveC</button>
        </div>
        <ProfilePic/>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">D : {titlenameD}</h5>
          <input
            type="string"
            placeholder="Entet value"
            onChange={handleNameChangeD}
          />
          <button onClick={handleD}>SaveD</button>
        </div>
        <ProfilePic/>
      </div>
      <div className="card">
        <div className="card-body">
          {
            <ul className="list-group">
              {data.map((item, index) => (
                <li key={index} className="list-group-item">
                  <div className="card">
                    <div className="card-body card-index">{item.id}</div>
                    <h1 className="card-txt">{item.name}</h1>
                  </div>
                </li>
              ))}
            </ul>
          }
          
        </div>
      </div>
    </div>
  );
}

export default VisitingCard;
