import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function ModalCart(props){
    return (
        <div>
            <Table >
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
                </tr>
            </thead>
            <tbody>
                {
                props.state.map( (a, i)=>{
                    return (
                    <tr key={i}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.quan}</td>
                        <td><button onClick={ ()=>{ props.dispatch({type : 'countup'}) }}>+</button>
                        <button onClick={ ()=>{ props.dispatch({type : 'countdown'}) }}>-</button></td>
                    </tr>
                    )
                })
                }
                
                
            </tbody>
            </Table>
            {
                props.alert === true
                ?<div className="my-alert-yellow">
                    <p>지금 구매하시면 신규 할인 20%</p>
                    <button onClick ={ ()=> { 
                        props.dispatch({type : 'close'})
                    }}>닫기</button>
                </div>
                : null
            }
        </div>
    )
}

function propsCart(state) {
    return {
        // cartName : state[0].name
        state : state.reducer,
        alert : state.reducer2
    }
}

export default connect(propsCart)(ModalCart)
// export default ModalCart;