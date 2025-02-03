import './App.css';
import Article from './components/article/Article';
import Navbar from './components/navbar/Navbar';
import { Blog, Features, Footer, Header, Possibility, WhatGPT } from './containers';

function App() {
  return (
    <div className="App">
            <h1>GPT-3</h1>
            <Navbar/>
            <Article/>

    </div>
  );
}

export default App;
