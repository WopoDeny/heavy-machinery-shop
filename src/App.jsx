import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer.jsx";
import Home from './pages/Home/Home';
import RoadRollers from './pages/RoadRollers/RoadRollers';
import MiniLoaders from './pages/MiniLoaders/MiniLoaders';
import Compressors from './pages/Compressors/Compressors';
import PartsService from './pages/PartsService/PartsService';
import Contacts from './pages/Contacts/Contacts';
import './App.css';
import RoadRollerDetails from './pages/RoadRollers/RoadRollerDetails';
import RoadRollerDetails6114 from './pages/RoadRollers/RoadRollerDetails6114';
import RoadRollerDetails6616 from './pages/RoadRollers/RoadRollerDetails6616';
import RoadRollerDetails6620 from './pages/RoadRollers/RoadRollerDetails6620';
import RoadRollerDetails6516 from './pages/RoadRollers/RoadRollerDetails6516';
import FloatingContactButton from './components/FloatingContactButton/FloatingContactButton';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/road-rollers" element={<RoadRollers />} />
          <Route path="/road-rollers/1" element={<RoadRollerDetails />} />
          <Route path="/road-rollers/2" element={<RoadRollerDetails6114 />} />
          <Route path="/road-rollers/3" element={<RoadRollerDetails6616 />} />
          <Route path="/road-rollers/4" element={<RoadRollerDetails6620 />} />
          <Route path="/road-rollers/5" element={<RoadRollerDetails6516 />} />
          <Route path="/mini-loaders" element={<MiniLoaders />} />
          <Route path="/compressors" element={<Compressors />} />
          <Route path="/parts-service" element={<PartsService />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}

export default App;
