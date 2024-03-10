import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Singup from './component/Singup';
import Login from './component/Login';
import Counter from './component/Counter';
import Todo from './component/Todo';
import Notfound from './component/Notfound';
import ShoppingProduct from './component/ShoppingProduct';
import Cart from './component/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Singup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/todo' element={<Todo/>}/>
            <Route path='/shop' element={<ShoppingProduct/>} />
            <Route path='*' element={<Notfound/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
