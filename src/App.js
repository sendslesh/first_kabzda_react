import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
//импортируем компоненты из других файлов
//import Technology from "./Technology";
//import Header from "./Header";


//jsx разметка
const App = () => {
        return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Profile />
            </div>
        );
    }


export default App;
