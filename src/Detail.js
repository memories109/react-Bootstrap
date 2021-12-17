import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {infoContext} from './App.js';

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

  let [play , playChange] = useState(true);
  let {id} = useParams();
  let history = useHistory();
  let detailNum = props.shoes.find( (a)=> {
      return a.id == id;
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
      </div>
    )
  }

function Info (props){
  console.log(props);
  return (
    
    <p>재고 : {props.info[0]}</p>
  )
}

  export default ModalDetail; 