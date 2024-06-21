import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './App.css';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import { FaCog } from 'react-icons/fa';
import Header_bar from './components/header_bar.jsx';
import Chat from "./components/Chat.jsx";
import store from '../redux/store.js' 
import { Provider } from 'react-redux' 
import { useCookies } from "react-cookie";






ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>


    <Router >
      {/* <Header /> */}
      <Provider store={store}>
      <Header_bar />
      <div className="main_row">
        <div className="side_col">
          <Sidebar />
        </div>
        <div className="main_col">
        <App />
        </div>
      </div>
     
    
 
    <Footer />
   {/* <Chat /> */}
   </Provider>
    </Router>
   
  // </React.StrictMode>,
)
