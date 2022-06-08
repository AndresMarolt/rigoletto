import './App.css';
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
