import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from '../src/componate/App';
// import Header from '../src/componate/Header';
// import Counter from './componate/Counter';
import Theme from './componate/Theme';
// import Gallery from './componate/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const lists = ['Home', 'About', 'Service', 'Pages', 'Contact-Us'];
root.render(

      <>
      {/* <Header logo='images/logo.png' dropdown='Pages' list = {lists} /> */}
      {/* <Header logo='images/logo2.png' dropdown='shop' /> */}
      {/* <Counter/> */}
      <Theme/>
      </>

);

