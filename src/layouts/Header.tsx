import * as React from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import Products from '../pages/Products'
export default class Header extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home}  /> 
        {/* TODO data={data} */}
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
    );
  }
}