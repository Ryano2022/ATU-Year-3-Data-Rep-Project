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
            <Navbar.Brand href="/">Films Collection</Navbar.Brand>
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
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/browse' element={<Read></Read>}></Route>
          <Route path='/add' element={<Write></Write>}></Route>
          <Route path='/update/:id' element={<Update></Update>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;