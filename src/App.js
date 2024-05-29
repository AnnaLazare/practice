import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Article from './components/Article';
import Aside from './components/Aside';
import About from './pages/About';
import News from './pages/News';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="main">
                    <Section />
                    <Article>
                      <Routes>
                            <Route exact path="/" element={<About />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/contact" element={<Contact />} />
                      </Routes>
                    </Article>
                    <Aside />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
