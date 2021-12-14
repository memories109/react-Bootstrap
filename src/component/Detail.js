import React, { useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';


function ModalDetail(props) {

    let {id} = useParams();
    let history = useHistory();

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+id+'.jpg'} width="100%"/>
          </div>
          <div className="col-md-6 mt-4"> 
          <h4 className="pt-5">{props.data[id].title}</h4>
          <p>{props.data[id].content}</p>
          <p>{props.data[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={ ()=> {
              history.goBack()
              // history.push('/')
          }}>뒤로가기</button>
          </div>
        </div>
      </div>
    )
  }

  export default ModalDetail; 