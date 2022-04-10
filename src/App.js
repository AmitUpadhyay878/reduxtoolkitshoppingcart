
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux'
import store from './store/store';
function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Navbar />
    <Routes>    
      <Route exact path="/" element={<Home />} />
      <Route  path="/cart" element={<Cart />} />   
    </Routes>
    </Provider>
    </div>
  );
}

export default App;
