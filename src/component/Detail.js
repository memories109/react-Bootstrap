import React, { useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';


function ModalDetail(props) {

    let {id} = useParams();
    let history = useHistory();
    let detailNum = props.data.find( (a)=> {
      return a.id == id;
    });
    

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+(detailNum.id+1)+'.jpg'} width="100%"/>
          </div>
          <div className="col-md-6 mt-4"> 
          
          <h4 className="pt-5">{detailNum.title}</h4>
          <p>{detailNum.content}</p>
          <p>{detailNum.price}</p>
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