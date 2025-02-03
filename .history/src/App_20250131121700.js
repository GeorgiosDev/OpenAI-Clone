import "./App.css";
import { Article, Brand, Navbar, CTA, Feauture } from "./components/index";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT,
} from "./containers/index";

function App() {
  return (
    <div className="App ">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features/>
      <Possibility/>
      <CTA/>
      
    </div>
  );
}

export default App;
