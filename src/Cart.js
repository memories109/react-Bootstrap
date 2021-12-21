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
                <tr>
                <td>{props.state[0].id}</td>
                <td>{props.state[0].name}</td>
                <td>{props.state[0].quan}</td>
                <td>@mdo</td>
                </tr>
                
            </tbody>
            </Table>
        </div>
    )
}

function propsCart(state) {
    return {
        // cartName : state[0].name
        state : state
    }
}

export default connect(propsCart)(ModalCart)
// export default ModalCart;