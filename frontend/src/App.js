import HomePage  from './pages/HomePage';
import ProductPage  from './pages/ProductPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

//Add logo image in place of Rent*Thy*Stuff

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Rent*Thy*Stuff </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/product/:idCode" element={<ProductPage/>}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
