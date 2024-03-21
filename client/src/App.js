// Required Package Import;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // Components
import HomePage from './components/home/Home';
import View from './components/view/View';


//App Route
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/course/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

//App Export;
export default App;
