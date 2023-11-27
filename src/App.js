import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './components/content';
import Read from './components/read';
import Write from './components/write';
import Update from './components/update';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Films Collection</Navbar.Brand>       {/* This is the name on the nav bar. */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Browse">Browse</Nav.Link>
                <Nav.Link href="/Add">Add</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Content></Content>}></Route>          {/* For viewing the home page.                   */}
          <Route path='/browse' element={<Read></Read>}></Route>          {/* For viewing all the films in the collection. */}
          <Route path='/add' element={<Write></Write>}></Route>           {/* For adding a new film to the collection.     */}
          <Route path='/update/:id' element={<Update></Update>}></Route>  {/* For updating the films in the collection.    */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;