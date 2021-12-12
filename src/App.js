/* eslint-disable */ 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목 , 글제목변경] = useState(['서울','광주','강남','포항','창원']); 
  let posts = '강남 고기 맛집';
  
  let [count, countChange] = useState(0);
  function 함수 () {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={함수}>클릭</button>
      <div className="list">
      <h4> {글제목[0]} <span onClick={()=>{ countChange(count+1) }}>👍</span>{count}</h4>
      <p>2월 18일 발행</p>
      <hr/>
      </div>
      <div className="list">
      <h4> {글제목[1]}</h4>
      <p>2월 18일 발행</p>
      <hr/>
      </div>
      <div className="list">
      <h4> {글제목[2]}</h4>
      <p>2월 18일 발행</p>
      <hr/>
      </div>
      <div className="list">
      <h4> {글제목[3]}</h4>
      <p>2월 18일 발행</p>
      <hr/>
      </div>
      <div className="list">
      <h4> {글제목[4]}</h4>
      <p>2월 18일 발행</p>
      <hr/>
      </div>
      
        
    </div>
  );
}

export default App;
