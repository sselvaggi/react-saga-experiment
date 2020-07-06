import * as React from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import Products from '../pages/Products'
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default class Header extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/#products">Products</NavLink>
              <NavLink to="/#products1">Products</NavLink>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
           
          {/* TODO data={data} */}
          <Route path="products" component={Products} />
          <Route path="/#products1" component={Products} />
          <Route exact path="/" component={Home}  />
        </Switch>
        <Link to="/#products">Link to Hash Fragment</Link>
      </HashRouter>
    );
  }
}