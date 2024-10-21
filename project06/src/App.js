import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import NotFound from './pages/NotFound'

function App() {

  // 상품 목록을 넣어둘 state
  const [list, setList] = useState([])

  return (
    <div className='container'>
      <Header />

      {/* 메인 역할을 하는 Router */}
      <Routes>

        <Route path='/' element={<Main />}></Route>
        <Route path='/list' element={<ProductList list={list} setList={setList}/>}></Route>
        <Route path='/detail/:num' element={<ProductDetail list={list}/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
