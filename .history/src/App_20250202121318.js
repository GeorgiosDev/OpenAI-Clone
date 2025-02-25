import "./App.css";
import {  Brand, Navbar, CTA } from "./components/index";
import {
  Blog,
  
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
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
