/* eslint-disable */ 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목 , 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','강남 헬스장']); 
  let posts = '강남 고기 맛집';
  
  let [count, countChange] = useState(0);
  function 함수 () {
    글제목변경(['여자 코트 변경', '여자 코트 변경', '여자 코트 변경 ']);
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
      
        
    </div>
  );
}

export default App;
