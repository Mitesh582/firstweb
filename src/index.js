import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {BrowserRouter} from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
// import Products from './Pages/Home/Products';
import Home from './Pages/Home/Home';
import Feature from './Pages/Home/Features/Features';
import Header from './Header/Header'
import View from './View/View';
import Error from './Error/Error';
import AddEmployee from './View/AddEmployee';
import EmpView from './View/EmpView';
// import CRUD from './componate/CRUD/CRUD';
// import ToDoApp from './componate/ToDoApp';
// import Register from './componate/Register';
// import HandleFrom from './componate/HandleFrom';
// import FormHandle from './componate/FormHandle';
// import KeyList from './componate/KeyList';
// import Tab from './componate/Tab';
// import CounterrFun from './componate/CounterrFun';
// import CounterWidth from './componate/CounterWidth';
// import CounterFun from './componate/CounterFun';
// import App from '../src/componate/App';
// import Header from '../src/componate/Header';
// import Counter from './componate/Counter';
// import HoverCounter from './componate/HoverCounter';
// import Theme from './componate/Theme';
// import Gallery from './componate/Gallery';
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const lists = ['Home', 'About', 'Service', 'Pages', 'Contact-Us'];
root.render(

      <>
      <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/View' element={<View/>}/>
                <Route path='/Features' element={<Feature/>}/>
                <Route path='/AddEmployee' element={<AddEmployee/>}/>
                <Route path='*' element={<Error/>}/>
                <Route path='/EmpView' element={<EmpView/>} />
                {/* <Route path='/' element={<Products/>}/> */}
            </Routes>
        </BrowserRouter>
        {/* <CRUD/> */}
      {/* <Header logo='images/logo.png' dropdown='Pages' list = {lists} /> */}
      {/* <Header logo='images/logo2.png' dropdown='shop' /> */}
      {/* <Counter/> */}
      {/* <HoverCounter/> */}
      {/* <CounterFun/> */}
      {/* <Theme/> */}
      {/* <Gallery/> */}
      {/* <CounterrFun/>
      <CounterWidth/> */}
      {/* <Tab/> */}
      {/* <KeyList/> */}
      {/* <FormHandle/> */}
      {/* <HandleFrom/> */}
      {/* <Register/> */}
      {/* <ToDoApp/> */}
      {/* <App/> */}
      </>

);

