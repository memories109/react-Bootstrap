/* eslint-disable */ 
import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav,  NavDropdown, Row,Col,img  } from 'react-bootstrap';
import Shoes from './data.js';
import ModalDetail from './Detail.js';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

let infoContext = React.createContext();


function App() {

  let [shoes, shoesChange] = useState(Shoes);
  let [info, infoChange] = useState([10,11,12]);

  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Toy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Switch>
      <Route exact path="/">
      
      <div className="background">
        <h1>20% Season off</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </div>
      <infoContext.Provider value={info} >
      <div className="container" >
        <div className="row">
          <ModalList shoes={shoes}/>
        </div>
      </div>
      </infoContext.Provider>
      <button className="btn btn-primary" onClick={ ()=> {

        // axios.post('서버URL', {id :'test',pw : 1234});

        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then( (result)=> {

          shoesChange([...shoes, ...result.data]);
        })
        .catch( ()=> {
          console.log('실패')
        })
      }}>더보기</button>
      </Route>
      
    
        <Route path="/detail/:id">
          <ModalDetail shoes={shoes} info={info} infoChange={infoChange} />
        </Route>
      
      <Route path="/:id"> 
        <div>아무거나 이거 보여주셈</div>
      </Route>
      

      <Route path="/test" component={ModalList}>
      </Route>
    </Switch>

    </div>
    
    
  );
}




function ModalList (props){
  
  let info = useContext(infoContext);

  return (
    <div>
    {
        props.shoes.map( (a,i)=> {
          return (
              <div className="col-md-4" key={i}>
                <img src={'https://codingapple1.github.io/shop/shoes'+(i+1)+'.jpg'} width="100%"></img>
                <h4>{props.shoes[i].title}</h4>
                <p>{props.shoes[i].content}&{props.shoes[i].price}</p>
                <p>{info[i]}</p>
              </div>
          )
        })
      }
      
    </div>
  )
}

export default App;
