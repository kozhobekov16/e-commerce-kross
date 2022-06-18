import './App.scss';
import Header from './components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage';
import BasketPage from './pages/basket-page/BasketPage';
import { useEffect, useState } from 'react';
import { AppContext } from './AppConext'
function App() {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/db.json')
      const kross = await response.json()
      setData(kross);
    }
    fetchData()
  }, [])
  return (
    <BrowserRouter>
      <AppContext.Provider value={{
        data,
        cart,
        setCart
      }}>
        <div className='app'>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/basket' element={<BasketPage />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
