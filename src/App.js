/* eslint-disable */ 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목 , 글제목변경] = useState(['서울','광주','강남','포항','창원']); 
  let posts = '강남 고기 맛집';
  let [modal, modalChange] = useState(false)


  let [count, countChange] = useState([0,0,0,0,0]);
  function 함수 () {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray);
  }
  function fndata(param){
    var newArray = [...count];
    newArray[param] = newArray[param]+1;
    countChange(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={함수}>클릭</button>
      {
      글제목.map( (a,i)=> {
        return (
          <div className="list">
          <h4 >{a} <span onClick={()=>{ fndata(i) }}>👍</span>{count[i]}</h4>
          <p>2월 18일 발행</p>
          <hr/>
          </div>
        )
        })
      }

      <button onClick = { ()=> {modalChange(!modal)}}>클릭</button>
      {
        modal === true 
        ? <Modal></Modal>
        : null
      }
    
        
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>  
  )
}


export default App;
