/* eslint-disable */ 
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {infoContext} from './App.js';
import { Nav } from 'react-bootstrap';

import {CSSTransition} from 'react-transition-group';


let BoxStyled = styled.div`
  padding : 20px;
`;

let TitleStyled = styled.h4`
  font-size : 25px;
  color : ${ props => props.color }
`; 

// class Detail2 extends React.Component{
//   componentDidMount(){

//   }
//   componentWillUnmount(){

//   }
// }




function ModalDetail(props) {
  let info = useContext(infoContext)
  let [MultiTab, setMultiTab] = useState(0);
  let [aniSwitch, setAniSwitch] = useState(false);

  let [play , playChange] = useState(true);
  let {id} = useParams();
  let history = useHistory();
  let detailNum = props.shoes.find( (a)=> {
      return a.id === id;
    });
    
  let [sample, sampleChange] = useState('');

    useEffect( ()=> {
      // axios.get();

      let timer = setTimeout( ()=> {
        playChange(false);
      }, 2000);
      return ()=>{
        clearTimeout(timer)
      }

    },[play]) ;
  // },[]) ;
    

    

    return (
      <div className="container">
        <BoxStyled>
          <TitleStyled className="red">상세페이지</TitleStyled>
        </BoxStyled>
        <input onChange={ (e)=> {
          sampleChange(e.target.value)
        } }/>
        {
          play === true
          ?
          <div className='my-alert-yellow'> 
            <p> 재고가 얼마 남지 않았습니다.</p>
          </div>
          : null
        }
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+(detailNum.id+1)+'.jpg'} width="100%"/>
          </div>
          <div className="col-md-6 mt-4"> 
          
          <h4 className="pt-5">{detailNum.title}</h4>
          <p>{detailNum.content}</p>
          <p>{detailNum.price}</p>

          {/* <Info info={props.info}/> */}
          <button className="btn btn-danger" onClick={ ()=> {
            let newArray = [...props.info];
            
            props.infoChange(newArray);
          }}>주문하기</button>
          <button className="btn btn-danger" onClick={ ()=> {
              history.goBack()
              // history.push('/')
          }}>뒤로가기</button>
          </div>
        </div>
        
        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={ ()=> { setAniSwitch(false); setMultiTab(0)}}>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={ ()=> { setAniSwitch(false); setMultiTab(1)}}>Active 2</Nav.Link>
          </Nav.Item>
        </Nav>
        <CSSTransition in={aniSwitch} classNames="wow" timeout={500}>
        <ModalTab MultiTab={MultiTab} setAniSwitch={setAniSwitch}/>
        </CSSTransition>
        
      </div>
    )
  }

function ModalTab(props){

  useEffect( ()=> {
    props.setAniSwitch(true);
  });

  if(props.MultiTab === 0){
    return <div>0000</div>
  }else if(props.MultiTab === 1){
    return <div>1111</div>
  }else if(props.MultiTab === 2){
    return <div>default</div>
  }
}

function Info (props){
  console.log(props);
  return (
    
    <p>재고 : {props.info[0]}</p>
  )
}

  export default ModalDetail; 