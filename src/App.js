import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage.js';
import Culture from './Components/Culture.js';
import Geography from './Components/GeographyPage.js';
import History from './Components/History.js';
import Blog from './Components/Blog.js';
import BestPlaces from './Components/BestPlaces.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  let root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/geography" element={<Geography/>}></Route>
          <Route path="/history" element={<History/>}></Route>
          <Route path="/culture" element={<Culture/>}></Route>
          <Route path="/bestplace" element={<BestPlaces/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}